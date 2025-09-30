const playingAudios = [];

// Function to generate the sound buttons
function createSoundButtons() {
    const soundContainer = document.getElementById('buttons');
    
    // In a real-world scenario, you would fetch these file names from a server
    // For this local setup, manually list your audio files here
    const soundFiles = [
        'sound1.mp3',
        'sound2.mp3',
        'sound3.mp3',
        'sound4.mp3',
        'sound5.mp3',
        'sound6.mp3'
    ];
    
    // Loop through the sound files and create a button for each
    soundFiles.forEach(soundFile => {
        const button = document.createElement('button');
        
        // Use the filename (without extension) as the button text
        const soundName = soundFile.split('.')[0];
        button.innerText = soundName;
        button.classList.add('btn');
        
        // Store the sound file path as a data attribute on the button
        button.dataset.sound = `sounds/${soundFile}`;
        
        soundContainer.appendChild(button);
    });
}

// Function to play a sound
function playSound(filePath) {
    // Stop any other currently playing sounds before starting a new one
    stopAllSounds(); 
    
    const audio = new Audio(filePath);
    audio.play();
    
    // Add the new audio object to our tracking array
    playingAudios.push(audio);
}

// Function to stop all currently playing sounds
function stopAllSounds() {
    playingAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Rewind the audio to the beginning
    });
    // Clear the array
    playingAudios.length = 0; 
}

// Add event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Generate the buttons based on the sound files array
    createSoundButtons();

    const buttonsContainer = document.getElementById('buttons');
    const stopButton = document.querySelector('.stop');

    // Use event delegation for the sound buttons
    buttonsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn')) {
            const soundPath = event.target.dataset.sound;
            if (soundPath) {
                playSound(soundPath);
            }
        }
    });

    // Event listener for the stop button
    stopButton.addEventListener('click', stopAllSounds);
});