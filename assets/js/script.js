
var quizDisplay = document.querySelector(".quiz-wrap");
var startButton = document.querySelector("#start");
var countDownDisplay = document.querySelector("#timer");
var optionDisplay = document.querySelector(".quiz-display ");
var resultDisplay = document.querySelector(".result-Display");

var currentCardIndex = 0;
var question;
var count = 60;


function displayQuestion(){


}


function startQuiz(){
    startButton.classList.add('hide');
    displayQuestion();
}




startButton.addEventListener('click',startQuiz);





