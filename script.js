//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"]; // Add your sound file names without extensions
const buttonsDiv = document.getElementById("buttons");
let currentAudio = null;

// Create buttons dynamically
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", () => playSound(sound));
    buttonsDiv.appendChild(btn);
});

// Play sound function
function playSound(sound) {
    stopSound(); // Stop any currently playing audio
    currentAudio = new Audio(`sounds/${sound}.mp3`); // Path to sound file
    currentAudio.play();
}

// Stop sound function
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Stop button event listener
document.querySelector(".stop").addEventListener("click", stopSound);
