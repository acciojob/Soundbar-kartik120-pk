let sounds = ["applause.mp3", "boo.mp3", "gasp.mp3", "tada.mp3", "victory.mp3", "wrong.mp3"]; 
let buttonsContainer = document.querySelector(".buttons");
const audioPlayer = document.querySelector("#audio-player");

 sounds.forEach(sound => {
	const btn = document.createElement("button");
	btn.className = "btn";
	btn.textContent = sound.replace(".mp3", "");
	btn.addEventListener("click", () => {
		audioPlayer.src = `sounds/${sound}`;
		audioPlayer.play();
	});
	buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop btn";
stopBtn.textContent = "Stop";
stopBtn.addEventListener("click", ()=>{
	audioPlayer.pause();
	audioPlayer.currentTime = 0;
})
buttonsContainer.appendChild(stopBtn);