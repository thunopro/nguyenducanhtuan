let currentAudio = null;

function zoom_div(e) {
    var a = document.querySelectorAll(".button")[1].textContent;
    var t = e.querySelector(".smallcard").innerHTML;
    
    // Handle special romaji cases for audio files
    var audioFile = t;
    if (t === 'dji') audioFile = 'ji';
    if (t === 'dzu') audioFile = 'zu';
    
    if (a.includes("hiragana")) {
        document.getElementById("chargif").src = `./assetFlCard/katakana/${t}.gif`;
        document.getElementById("charcard").src = `./assetFlCard/kcard/${t}.png`;
    } else {
        document.getElementById("chargif").src = `./assetFlCard/hiragana/${t}.gif`;
        document.getElementById("charcard").src = `./assetFlCard/hcard/${t}.png`;
    }
    document.querySelector("#flashcard h1").innerHTML = t;
    document.querySelector("#flashcard").style.display = "block";
    document.getElementById("homefl").style.opacity = .15;
    
    // Play the audio for the clicked card
    playAudio(audioFile);
}

function playAudio(audioFile) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(`./kana-quiz-sounds/audio/0/${audioFile}.mp3`);
    currentAudio.play().catch(e => console.log("Audio not found: " + audioFile));
    
    // Save current audio file for replay button
    var replayBtn = document.getElementById("replay_btn");
    if (replayBtn) {
        replayBtn.dataset.sound = audioFile;
    }
}

function replayAudio(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to #flashcard and closing it
    var replayBtn = document.getElementById("replay_btn");
    if (replayBtn && replayBtn.dataset.sound) {
        playAudio(replayBtn.dataset.sound);
    }
}

function comeback() {
    document.querySelector("#flashcard").style.display = "none";
    document.getElementById("homefl").style.opacity = 1;
}

function change_kata() { window.location.href = "./indexKatacard.html"; }
function change_hira() { window.location.href = "./indexHiracard.html"; }
function back_to_menu() { window.location.href = "./index.html"; }