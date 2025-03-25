const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"]; // Ensure these files exist
const buttonsDiv = document.getElementById("buttons");
const audioPlayer = document.getElementById("audio-player");
let currentAudio = null;

// Create buttons dynamically
sounds.forEach((sound, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `Sound ${index + 1}`;
    btn.dataset.sound = sound;
    btn.addEventListener("click", () => playSound(sound));
    buttonsDiv.appendChild(btn);
});

// Function to play sound
function playSound(sound) {
    stopSound(); // Stop currently playing sound
    const audioFilePath = `sounds/${sound}.mp3`;

    // Ensure Cypress can detect the <audio> element
    audioPlayer.src = audioFilePath;
    audioPlayer.load(); // Load the new audio source
    audioPlayer.play().then(() => {
        console.log(`Playing: ${sound}.mp3`);
    }).catch(error => {
        console.error("Audio play error:", error);
    });

    // Handle errors
    audioPlayer.onerror = function () {
        console.error(`Error loading sound: ${audioFilePath}`);
        alert(`Failed to load ${audioFilePath}`);
    };
}

// Stop sound function
function stopSound
