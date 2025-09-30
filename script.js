//your JS code here. If required.
const sounds=["https://actions.google.com/sounds/v1/foley/hand_claps_close.ogg" ,"https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg","https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg","https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg", "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg","https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg"]
const buttons=document.querySelectorAll(".btn");
const container=document.querySelector("#buttons")
buttons.forEach((x,y)=>{
	if(y<=5)
	{
buttons[y].addEventListener('click',function(e){
	 if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0; // reset
  }
const audio = new Audio();
	audio.src=`${sounds[y]}`
	audio.play();
    // store current audio in global variable
    window.currentAudio = audio;

							})
	}
	else if(y==6)
	{
		buttons[y].addEventListener('click',function(){
		console.log("hello")	
	 if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0; // reset
  }
	})
			}
	})