let allKana = [];
let currentCorrectAnswer = null;
let currentKanaAudio = null;
let score = 0;
const clickAudio = new Audio('./asset/bluelock_click.wav');

async function initQuiz() {
    try {
        const response = await fetch('./kana.json');
        const data = await response.json();
        allKana = data.characters;
        loadQuestion();
    } catch (e) {
        console.error("Failed to load kana data", e);
    }
}

function loadQuestion() {
    // Reset button states
    const buttons = document.querySelectorAll('.option_btn');
    buttons.forEach(btn => {
        btn.className = 'option_btn';
        btn.disabled = false;
    });

    // Pick 1 correct
    const correctIdx = Math.floor(Math.random() * allKana.length);
    const correctKana = allKana[correctIdx];
    currentCorrectAnswer = correctKana.romaji;
    
    // Determine audio file
    let audioFile = currentCorrectAnswer;
    if (audioFile === 'dji') audioFile = 'ji';
    if (audioFile === 'dzu') audioFile = 'zu';
    currentKanaAudio = new Audio(`./kana-quiz-sounds/audio/0/${audioFile}.mp3`);

    // Pick 3 wrong
    let wrongOptions = [];
    while (wrongOptions.length < 3) {
        let wrongIdx = Math.floor(Math.random() * allKana.length);
        if (wrongIdx !== correctIdx && !wrongOptions.includes(allKana[wrongIdx].romaji)) {
            wrongOptions.push(allKana[wrongIdx].romaji);
        }
    }

    // Combine and shuffle
    let options = [currentCorrectAnswer, ...wrongOptions];
    options.sort(() => 0.5 - Math.random());

    // Display
    // Randomly choose Hiragana or Katakana to display
    const showHiragana = Math.random() > 0.5;
    document.getElementById('target_kana').innerText = showHiragana ? correctKana.hiragana : correctKana.katakana;

    buttons.forEach((btn, index) => {
        btn.innerText = options[index];
    });
}

function checkAnswer(btn) {
    clickAudio.currentTime = 0;
    clickAudio.play();

    // Disable all buttons to prevent spam clicking
    const buttons = document.querySelectorAll('.option_btn');
    buttons.forEach(b => b.disabled = true);

    if (btn.innerText === currentCorrectAnswer) {
        btn.classList.add('correct');
        score += 10;
        document.getElementById('score').innerText = score;
        
        // Play the pronunciation
        currentKanaAudio.play().catch(e => {});

        setTimeout(loadQuestion, 800);
    } else {
        btn.classList.add('wrong');
        
        // Find correct button and highlight it
        buttons.forEach(b => {
            if (b.innerText === currentCorrectAnswer) {
                b.classList.add('correct');
            }
        });
        
        // Reset score or just continue
        score = 0;
        document.getElementById('score').innerText = score;
        
        setTimeout(loadQuestion, 1200);
    }
}

function quitGame() {
    window.location.href = "index.html";
}

// Start
initQuiz();
