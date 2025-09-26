// Detecting Button Press

var numberOfDrumButton = document.querySelectorAll(".drum").length
for (var i = 0; i<numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
      // detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key){
    switch (key) {
            case "w":
                var audio = new Audio('sounds/mixkit-drum-bass-hit-2294.wav');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/mixkit-fail-drum-and-xylophone-568.wav');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/mixkit-losing-drums-2023.wav');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/mixkit-ominous-drums-227.wav');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/mixkit-ominous-drums-appear-228.wav');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/mixkit-tribal-deep-drum-echoes-575.wav');
                audio.play();
                break;  
            case "l":
                var audio = new Audio('sounds/mixkit-tribal-dry-drum-558.wav');
                audio.play();
                break;
            default: console.log(buttonInnerHTML);
        }

}
function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+ currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);    

    }



    