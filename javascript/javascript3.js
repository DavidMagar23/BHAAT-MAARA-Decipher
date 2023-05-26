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
    if (answer === 'CHITWAN') {
        audio.play();
        
        alert("'Ma ahile yeta hoina k, ma chitwan ma xu'");

        alert("Honestly, I didn't think anyone was gonna get this far.")

        alert("The Middle passed.");

        alert("You may send a screenshot of this message for the next test.")
    }
    else {
        wrongAnswer();
    }
}


function wrongAnswer() {
    let number = Math.floor(Math.random() * 10);
    if (number === 1 || number === 2) {
        alert('Where even is that?');
    }
    else if (number === 3 || number === 4) {
        alert('You for real?');
    }
    else if (number === 5 || number === 6) {
        alert('Man, you tripping');
    }
    else if (number === 7 || number === 8) {
        alert('Use your brain');
    }
    else if (number === 9 ){
        alert('HUH?');
    }
    else {
        alert(`Wow! Kati ramro hai`);
    }
}