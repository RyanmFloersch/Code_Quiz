var mainHeader = document.querySelector('.main-header');
var countDownDisplay = document.querySelector("#timer");
var startText = document.querySelector('#startText');
var startButton = document.querySelector("#start");
var questionDisplay = document.querySelector("#questionDisplay");
var quizDisplay = document.querySelector(".quiz-display");
var btnChoices = quizDisplay.querySelectorAll('buttons');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var optionDisplay = document.querySelector(".quiz-display ");
var resultDisplay = document.querySelector(".result-Display");



var currentQuestionIndex = 0;
var question;
var count = 60;




function displayQuestion(){
    question = questions[currentQuestionIndex];
    quizDisplay.classList.remove('hide');
    console.log(quizDisplay);
    questionDisplay.classList.remove('hide');
    


    questionDisplay.innerText = question.question;
    console.log(choice1);
    choice1.innerText = question.ans1;
    choice1.classList.remove('hide');
    choice2.innerText = question.ans2;
    choice2.classList.remove('hide');
    choice3.innerText = question.ans3;
    choice3.classList.remove('hide');
    choice4.innerText = question.ans4;
    choice4.classList.remove('hide');



    // var choice1 = document.createElement('button');
    // var choice2 =  document.createElement('button');
    // var choice3 =  document.createElement('button');
    // var choice4 =  document.createElement('button');

    // quizDisplay.append(choice1);
    // quizDisplay.append(choice2);
    // quizDisplay.append(choice3);
    // quizDisplay.append(choice4);    



}

function startTimer(){
    

}


function startQuiz(){
    mainHeader.classList.add('hide');
    startText.classList.add('hide');
    startButton.classList.add('hide');

    displayQuestion();



}




startButton.addEventListener('click', startQuiz);
quizDisplay.addEventListener('click', displayQuestion);




