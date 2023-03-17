var mainHeader = document.querySelector('.main-header');
var countDownDisplay = document.querySelector("#timer");
var goToHighScore = document.querySelector('#highScore');
var startText = document.querySelector('#startText');
var startButton = document.querySelector("#start");
var questionDisplay = document.querySelector("#questionDisplay");
var quizWrap = document.querySelector('.quiz-wrap');
var quizDisplay = document.querySelector(".quiz-display");
var choices = quizDisplay.querySelectorAll('button');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var resultDisplay = document.querySelector(".result-Display");
var questionResult = document.querySelector('#result');
var initialArea = resultDisplay.querySelector('textarea');
// var resultSubmit = resultDisplay.querySelector('button');
var highScoreScreen = document.querySelector('.high-score-display');
var goBackBtn = highScoreScreen.querySelector('#goBackBtn');
var clearHighScoreBtn = highScoreScreen.querySelector('#clearHighScoreBtn');

var numberOfTimiesIn = 0;

var currentQuestionIndex = 0;
var question = {};
var count = 60;
var isDone = false;
var numCorrect = 0;
var initials;


function displayResult(result) {

    questionResult.classList.remove('hide');
    var el = questionResult;

    if (result) {
        el.innerText = "Correct!";

    } else {
        el.innerText = "Incorrect!";
        count -= 10;
    }
    var opacity = 1;

    setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            el.style.opacity = opacity;
        }

    }, 500);

}



function checkAnswer(clickedBtn) {
    numberOfTimiesIn++;
    console.log(numberOfTimiesIn);
    if (clickedBtn.dataset.index === question.correctAnswer) {
        console.log('correct');
        currentQuestionIndex++;
        numCorrect++;
        displayResult(true);

    } else {
        console.log('incorrect');
        currentQuestionIndex++;
        displayResult(false);
    }

    if (currentQuestionIndex === questions.length) {

        questionDisplay.classList.add('hide');
        quizDisplay.classList.add('hide');

        for (btns of choices) {
            btns.classList.add('hide');
        }
        displayResultScreen();
    } else {

        displayQuestion();
    }
}

function displayHighScoreScreen() {

    highScoreScreen.classList.remove('hide');
    var h2 = highScoreScreen.querySelector('h2');
    var scores = highScoreScreen.querySelector('textArea');
    h2.innerText = "High Score";
    goBackBtn.innerText = "Go Back";
    clearHighScoreBtn.innerText = "Clear High Scores";
    highScoreScreen.style.display = "flex";

    scores.innerText = initials + " - " + numCorrect;



}



function displayResultScreen() {
    isDone = true;
    resultDisplay.classList.remove('hide');
    resultDisplay.style.display = 'flex';


    var h2 = resultDisplay.querySelector('h2');
    var h3 = resultDisplay.querySelector('h3');
    var textArea = initialArea;
    var submit = resultDisplay.querySelector('button');

    h2.innerText = "All done!";
    h3.innerText = "Enter initials: ";
    submit.innerText = 'Submit';

    submit.addEventListener('click', function () {
        if (textArea) {
            initials = initialArea.value;
            localStorage.setItem(initialArea.value, JSON.stringify(numCorrect));
            resultDisplay.classList.add('hide');
            resultDisplay.style.display = "none";
            displayHighScoreScreen();


        } else {
            console.log("no initials enterd");
        }
    });

}


function displayQuestion() {
    question = questions[currentQuestionIndex];

    console.log(question.questionText);
    quizDisplay.classList.remove('hide');
    questionDisplay.classList.remove('hide');

    questionDisplay.innerText = question.questionText;
    choice1.innerText = question.ans1;
    choice1.dataset.index = '1';
    choice1.classList.remove('hide');
    choice2.innerText = question.ans2;
    choice2.dataset.index = '2';
    choice2.classList.remove('hide');
    choice3.innerText = question.ans3;
    choice3.dataset.index = '3';
    choice3.classList.remove('hide');
    choice4.innerText = question.ans4;
    choice4.dataset.index = '4';
    choice4.classList.remove('hide');
}

// Countdown for the timer
function countDown() {

    var count = 60;
    var timer = setInterval(function () {
        count--;
        countDownDisplay.innerText = "Time: " + count;

        if (isDone) {
            clearInterval(timer);
        }

        if (!count) {
            alert("Times up");
            clearInterval(timer);
        }

    }, 1000);

}


function startQuiz() {
    mainHeader.classList.add('hide');

    startText.classList.add('hide');
    startButton.classList.add('hide');
    questionResult.classList.add('hide');

    countDown();
    displayQuestion();



}

function init() {

    currentQuestionIndex = 0;
    count = 60;
    isDone = false;
    numCorrect = 0;
    question = questions[currentQuestionIndex];

    quizWrap.classList.remove('hide');
    mainHeader.classList.remove('hide');
    startText.classList.remove('hide');
    startButton.classList.remove('hide');
    questionResult.classList.remove('hide');

    mainHeader.innerText = "Coding Quiz Challenge";
    startText.innerText = "Try to answer the following code-related quetions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds";

 
}



startButton.addEventListener('click', startQuiz);

// quizDisplay.addEventListener('click', function (event) {
//     checkAnswer(event.target);
// })

for (el of choices) {
    el.addEventListener('click', function () {
        checkAnswer(this);
    })
}

goToHighScore.addEventListener('click', function () {
    quizDisplay.classList.add('hide');
    startButton.classList.add('hide');
    startText.classList.add('hide');

    mainHeader.classList.add('hide');
    displayHighScoreScreen();
});
goBackBtn.addEventListener('click', function () {
    highScoreScreen.style.display = "none";
    highScoreScreen.classList.add('hide');
    init();
});

clearHighScoreBtn.addEventListener('click', function () {
    localStorage.clear();
})




