const body = document.querySelector('body');

const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    let answer = prompt("Answer: ");
    if ( answer !== null) {
        checkAnswer(answer);
    }

})

const audio = document.querySelector('audio');
function checkAnswer (answer) {
    answer = answer.toUpperCase();
    if (answer === 'CONCERT') {
        audio.play();
        
        alert("The Concert, of course.");

        alert("The beggining passed.");

        alert("You may send a screenshot of this message for the next test.")
    }
    else {
        wrongAnswer();
    }
}

function wrongAnswer() {
    let number = Math.floor(Math.random() * 10);
    if (number === 1 || number === 2) {
        alert('Dumbass idiot');
    }
    else if (number === 3 || number === 4) {
        alert('You stupid bro');
    }
    else if (number === 5 || number === 6) {
        alert('Try again');
    }
    else if (number === 7 || number === 8) {
        alert('Think again?');
    }
    else if (number === 9 ){
        alert('. . . ');
    }
    else {
        alert(`You don't have a brain, do you?`);
    }
}