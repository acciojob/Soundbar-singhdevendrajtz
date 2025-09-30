//your JS code here. If required.
const sounds=["sound1.mp3","sound2.mp3","sound3.mp3","sound4.mp3","sound5.mp3", "sound2.mp3"]
const buttons=document.querySelectorAll(".btn");
const container=document.querySelector("#buttons")
buttons.forEach((x,y)=>{
	if(y<=5)
	{
buttons[y].addEventListener('click',function(e){
const audio = new Audio(`sounds/${y}`);
    audio.play();
    // store current audio in global variable
    window.currentAudio = audio;

							})
	}
	else if(y==6)
	{
		buttons[y].addEventListener('click',function(){
			
			 window.currentAudio.pause();
    window.currentAudio.currentTime = 0; // reset
	})
			}
	})