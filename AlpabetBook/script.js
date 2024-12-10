// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e){
	e = this
  	e.style.pointerEvents = "none"
  	setTimeout(function(){
    	e.style.pointerEvents = ""
  	}, 1000)
})

// document.addEventListener('click', () => {
//   const audio = document.querySelector('audio');
//   audio.muted = false;
//   audio.play();
// });
