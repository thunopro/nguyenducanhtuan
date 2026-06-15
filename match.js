let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let isLocked = false;
const clickAudio = new Audio('./asset/bluelock_click.wav');
const winAudio = new Audio('./assetMario/win.mp3');

async function startGame() {
    document.getElementById('win_message').style.display = 'none';
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    isLocked = false;

    try {
        const response = await fetch('./kana.json');
        const data = await response.json();
        const allKana = data.characters;
        
        // Pick 8 random pairs
        const shuffledKana = allKana.sort(() => 0.5 - Math.random());
        const selected = shuffledKana.slice(0, 8);
        
        // Create 16 cards (8 romaji, 8 hiragana)
        selected.forEach((item, index) => {
            cards.push({ id: index, type: 'romaji', text: item.romaji, audio: item.romaji });
            cards.push({ id: index, type: 'hiragana', text: item.hiragana, audio: item.romaji });
        });
        
        // Shuffle cards
        cards.sort(() => 0.5 - Math.random());
        
        // Render
        cards.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            cardEl.dataset.id = card.id;
            cardEl.dataset.index = index;
            cardEl.dataset.audio = card.audio;
            
            cardEl.innerHTML = `
                <div class="card-front"></div>
                <div class="card-back">${card.text}</div>
            `;
            
            cardEl.addEventListener('click', flipCard);
            grid.appendChild(cardEl);
        });
    } catch (e) {
        console.error("Failed to load kana data", e);
    }
}

function flipCard() {
    if (isLocked) return;
    if (this === flippedCards[0]) return;
    
    clickAudio.currentTime = 0;
    clickAudio.play();

    this.classList.add('flip');
    
    // Also play pronunciation sound if we have it
    let audioFile = this.dataset.audio;
    if (audioFile === 'dji') audioFile = 'ji';
    if (audioFile === 'dzu') audioFile = 'zu';
    let voice = new Audio(`./kana-quiz-sounds/audio/0/${audioFile}.mp3`);
    voice.play().catch(e => {});

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    isLocked = true;
    const isMatch = flippedCards[0].dataset.id === flippedCards[1].dataset.id;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);
    
    matchedPairs++;
    if (matchedPairs === 8) {
        setTimeout(() => {
            document.getElementById('win_message').style.display = 'block';
            winAudio.play();
        }, 500);
    }
    
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [flippedCards, isLocked] = [[], false];
}

function quitGame() {
    window.location.href = "index.html";
}

// Start game on load
startGame();
