let allKana = [];
let fallingWords = [];
let score = 0;
let lives = 3;
let gameLoopInterval = null;
let spawnInterval = null;
let spawnRate = 2000;
let fallSpeed = 2;

const clickAudio = new Audio('./asset/bluelock_click.wav');
const errorAudio = new Audio('./assetMario/thua-cuoc.mp3'); // or any error sound

async function initGame() {
    try {
        const response = await fetch('./kana.json');
        const data = await response.json();
        allKana = data.characters;
        startGame();
    } catch (e) {
        console.error("Failed to load kana data", e);
    }
}

function startGame() {
    // Reset state
    score = 0;
    lives = 3;
    fallSpeed = 2;
    spawnRate = 2000;
    fallingWords = [];
    document.getElementById('score').innerText = score;
    document.getElementById('lives').innerText = lives;
    document.getElementById('play_area').innerHTML = '';
    document.getElementById('game_over').style.display = 'none';
    document.getElementById('type_input').value = '';
    document.getElementById('type_input').disabled = false;
    document.getElementById('type_input').focus();

    // Clear old intervals
    if (gameLoopInterval) clearInterval(gameLoopInterval);
    if (spawnInterval) clearInterval(spawnInterval);

    // Start intervals
    gameLoopInterval = setInterval(updateGameArea, 50);
    spawnInterval = setInterval(spawnWord, spawnRate);
}

function spawnWord() {
    if (lives <= 0) return;

    const kanaObj = allKana[Math.floor(Math.random() * allKana.length)];
    const isHiragana = Math.random() > 0.5;
    const text = isHiragana ? kanaObj.hiragana : kanaObj.katakana;
    
    let audioFile = kanaObj.romaji;
    if (audioFile === 'dji') audioFile = 'ji';
    if (audioFile === 'dzu') audioFile = 'zu';

    const el = document.createElement('div');
    el.className = 'falling_word';
    el.innerText = text;
    
    // Random X position
    const playArea = document.getElementById('play_area');
    const maxX = playArea.clientWidth - 60; // Approximate word width
    const startX = Math.floor(Math.random() * maxX);
    
    el.style.left = startX + 'px';
    el.style.top = '0px';
    
    playArea.appendChild(el);

    fallingWords.push({
        element: el,
        romaji: kanaObj.romaji,
        audioFile: audioFile,
        y: 0,
        x: startX
    });
}

function updateGameArea() {
    const playArea = document.getElementById('play_area');
    const bottomLimit = playArea.clientHeight;

    for (let i = fallingWords.length - 1; i >= 0; i--) {
        let word = fallingWords[i];
        word.y += fallSpeed;
        word.element.style.top = word.y + 'px';

        if (word.y >= bottomLimit - 40) { // Hit bottom
            word.element.remove();
            fallingWords.splice(i, 1);
            loseLife();
        }
    }
}

function loseLife() {
    lives--;
    document.getElementById('lives').innerText = lives;
    
    // Play error sound softly
    errorAudio.currentTime = 0;
    errorAudio.volume = 0.5;
    errorAudio.play().catch(e => {});

    if (lives <= 0) {
        gameOver();
    }
}

function gameOver() {
    clearInterval(gameLoopInterval);
    clearInterval(spawnInterval);
    document.getElementById('type_input').disabled = true;
    document.getElementById('game_over').style.display = 'block';
    document.getElementById('final_score').innerText = score;
}

// Input handling
document.getElementById('type_input').addEventListener('input', function(e) {
    // Play keystroke sound
    clickAudio.currentTime = 0;
    clickAudio.play().catch(e => {});

    const typedText = this.value.toLowerCase().trim();
    
    // Find matching word
    let matchIndex = -1;
    for (let i = 0; i < fallingWords.length; i++) {
        if (fallingWords[i].romaji === typedText) {
            matchIndex = i;
            break; // Find the first one
        }
    }

    if (matchIndex !== -1) {
        const word = fallingWords[matchIndex];
        
        // Success effect
        word.element.classList.add('hit');
        
        // Play voice
        const voice = new Audio(`./kana-quiz-sounds/audio/0/${word.audioFile}.mp3`);
        voice.play().catch(e => {});

        // Remove after animation
        setTimeout(() => {
            if (word.element && word.element.parentNode) {
                word.element.remove();
            }
        }, 200);

        fallingWords.splice(matchIndex, 1);
        
        // Update score
        score += 10;
        document.getElementById('score').innerText = score;
        this.value = ''; // Clear input
        
        // Increase difficulty slightly
        if (score % 50 === 0) {
            fallSpeed += 0.5;
            spawnRate = Math.max(500, spawnRate - 100);
            clearInterval(spawnInterval);
            spawnInterval = setInterval(spawnWord, spawnRate);
        }
    }
});

function quitGame() {
    window.location.href = "index.html";
}

// Load data on start
initGame();
