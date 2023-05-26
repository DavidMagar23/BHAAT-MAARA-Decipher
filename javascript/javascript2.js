const body = document.querySelector('body');

const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    let answer = prompt("Answer: ");
    if ( answer !== null) {
        checkAnswer(answer);
    }

})

function checkAnswer (answer) {
    answer = Number(answer);
    if (answer === 16) {
        alert("16 seconds. It's the seconds played. Count the seconds.");

        alert("The Rabit Hole passed.");

        alert("You may send a screenshot of this message for the next test.")
    }
    else {
        wrongAnswer();
    }
}

function wrongAnswer() {
    let number = Math.floor(Math.random() * 10);
    if (number === 1 || number === 2) {
        alert('Stupidass');
    }
    else if (number === 3 || number === 4) {
        alert('Bro, You ...');
    }
    else if (number === 5 || number === 6) {
        alert('Man, you tripping');
    }
    else if (number === 7 || number === 8) {
        alert('Think again?');
    }
    else if (number === 9 ){
        alert('. . . ');
    }
    else {
        alert(`Dude, you suck.`);
    }
}

const img = document.querySelector('.image');
const audio = document.querySelector('audio');


let counter = 0;

img.addEventListener('click', function(e) {
    counter++;
    if (counter % 2 === 0) {
        pauseAudio();
    }
    else {
        playAudio();
    }
    console.log(counter);
})



function playAudio () {
    audio.play();
}

function pauseAudio () {
    audio.pause();
    audio.currentTime = 0;
}