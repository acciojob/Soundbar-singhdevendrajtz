//your JS code here. If required.
const sounds=["https://actions.google.com/sounds/v1/foley/hand_claps_close.ogg" ,"https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg","https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg","https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg", "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg","https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg"]
const buttons=document.querySelectorAll(".btn");
const container=document.querySelector("#buttons")
const audio_el = document.createElement('audio');
document.body.appendChild(audio_el);

buttons.forEach((x,y)=>{
	if(y<=5)
	{
buttons[y].addEventListener('click',function(e){
	 if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0; // reset
  }

	audio_el.src=`${sounds[y]}`
	audio_el.play();
    // store current audio in global variable
    

							})
	}
	else if(y==6)
	{
		buttons[y].addEventListener('click',function(){
		
	 
   
   audio_el.pause() // reset
  
	})
			}
	})