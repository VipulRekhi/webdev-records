
//for click
for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var letter = this.innerHTML;
        makeSound(letter);
        animate(letter);

    });

    //for the key press
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        animate(event.key);
    }
    )

    //actual sound fuunc
    function makeSound(key) {
        switch (key) {
            case "w":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
        }
    };
    function animate(current_key) {
        var active_button = document.querySelector("." + current_key);
        active_button.classList.add("pressed");
        setTimeout(function () {
            active_button.classList.remove("pressed");
        }, 300);

    }


}
