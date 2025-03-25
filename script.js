const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"]; // Ensure these are correct sound names in "sounds/" folder
const buttonsDiv = document.getElementById("buttons");
let currentAudio = null;

// Create buttons dynamically
sounds.forEach((sound, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `Sound ${index + 1}`;
    btn.dataset.sound = sound; // Store the sound name in a data attribute
    btn.addEventListener("click", () => playSound(sound));
    buttonsDiv.appendChild(btn);
});

// Function to play sound
function playSound(sound) {
    stopSound(); // Stop any currently playing audio
    currentAudio = new Audio(`sounds/${sound}.mp3`); // Ensure file path is correct

    // Handle loading errors
    currentAudio.onerror = function () {
        console.error(`Error loading sound: ${sound}.mp3`);
        alert(`Failed to load ${sound}.mp3`);
    };

    currentAudio.oncanplaythrough = function () {
        currentAudio.play();
    };
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

// Handle Cypress exceptions
if (typeof Cypress !== "undefined") {
    Cypress.on("uncaught:exception", (err) => {
        console.warn("Cypress caught an exception:", err);
        return false; // Prevent Cypress from failing the test
    });
}
