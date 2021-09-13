

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

  var buttonPressed = this.innerHTML;

  drumSounds(buttonPressed);

  buttonAnimation(buttonPressed);

})
}

document.addEventListener("keydown", function(){

  drumSounds(event.key);

  buttonAnimation(event.key);
})


function drumSounds(buttonPressed) {

    switch (buttonPressed) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "k":
        let kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
      break;

      case "l":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      default: console.log(buttonPressed);

    }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");
  }, 100);
}
