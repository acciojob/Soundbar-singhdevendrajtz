//your JS code here. If required.
// List of sounds (make sure these files exist inside "sounds" folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

const buttonsDiv = document.getElementById("buttons");

// Create a button for each sound
sounds.forEach((sound, index) => {
  const btn = document.createElement("button");
  btn.innerText = `Play ${index + 1}`;
  btn.classList.add("btn");

  btn.addEventListener("click", () => {
    stopSounds(); // stop previous sound
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
    // store current audio in global variable
    window.currentAudio = audio;
  });

  buttonsDiv.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement("button");
stopBtn.innerText = "Stop";
stopBtn.classList.add("btn", "stop");

stopBtn.addEventListener("click", stopSounds);

buttonsDiv.appendChild(stopBtn);

// Function to stop all playing sounds
function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0; // reset
  }
}