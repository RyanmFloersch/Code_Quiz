
var startButton = document.querySelector(".start-button");
var startingElements = document.querySelectorAll(".start-screen");
var countDownDisplay = document.querySelector(".timer");
var optionDisplay = document.querySelector(".option-buttons ");


// Old question object
// {
//     text: "What data type only has the values true and false?",
//     choices: [
//         "boolean",
//         "string",
//         "number",
//         "undefined"
//     ],
//     // The index of the question in the questions array
//     correctIndex: 0
// }

// An array of objects containing the questions
var questionArray = [
    {
        question: "What data type only has the values true and false?",
        questionNumber: 1,
        ans1: "boolean",
        ans2: "string",
        ans3: "number",
        ans4: "undefined",
        correctAnswer: "boolean"
    },
    {
        question: "What does the DOM stand for?",
        questionNumber: 2,
        ans1: "Dominoe On Marketplace",
        ans2: "Document Object Model",
        ans3: "Dodging Oncoming Motorcyles",
        ans4: "Deep Ocean Maintainance",

        correctAnswer: "Document Object Model"
    }
];


function setTimer() {
    countDownDisplay.innerText = "Timer: 60";
}

function setHeader() {
    questionDisplay = "Welcome to the quiz";

}

// Countdown for the timer
function countDown() {

    var count = 60;
    var timer = setInterval(function () {
        count--;
        countDownDisplay.innerText = "Time: " + count;

        if (!count) {
            alert("Times up");
            clearInterval(timer);
        }
    }, 1000);

}




function genButtons(){
    for(var i=0; i < questionArray.length;i++){
        var questionObj = questionArray[i];


        var questionText = document.createElement('p');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');
        var button4 = document.createElement('button');

        
        questionText.innerText = questionObj.question;
        button1.innerText = questionObj.ans1;
        button2.innerText = questionObj.ans2;
        button3.innerText = questionObj.ans3;
        button4.innerText = questionObj.ans4;
        

        questionText.dataset.questionIndex = i;
        button1.dataset.questionIndex = i;
        button2.dataset.questionIndex = i;
        button3.dataset.questionIndex = i;
        button4.dataset.questionIndex = i;

        optionDisplay.append(questionText);
        optionDisplay.append(button1);
        optionDisplay.append(button2);
        optionDisplay.append(button3);
        optionDisplay.append(button4);

        // Hide the elements initially
        questionText.classList.add('hide');
        button1.classList.add('hide');
        button2.classList.add('hide');
        button3.classList.add('hide');
        button4.classList.add('hide');

    }

}

function displayQuestion(questionNumber){
    

     var answerOptions = optionDisplay.children;
    
    for(el of answerOptions){
        if(el.dataset.questionIndex == questionNumber){
            el.classList.remove("hide");
            el.classList.add("show");
        }
    }

}

function hideQuestion(questionNumber){
    var answerOptions = optionDisplay.children;
    
    for(el of answerOptions){
        if(el.dataset.questionIndex == questionNumber){
            el.classList.remove("show");
            el.classList.add("hide");
        }
    }

}


function startQuiz() {
    //Begins the timer
    countDown();
    //Hides the starting elements
    for (el of startingElements) {
        el.classList.add("hide");
    }       

    genButtons();


    var currentQuestionNumber = 0;
    var numberCorrect = 0;
    displayQuestion(currentQuestionNumber);

    optionDisplay.addEventListener('click', function (event) {
        var selectedAnswer = event.target;
        var  curQuestion = questionArray[currentQuestionNumber];
        if(selectedAnswer.innerText === curQuestion.correctAnswer){
            console.log("CORRECT");
            numberCorrect++;
            hideQuestion(currentQuestionNumber);
            currentQuestionNumber++;
            
        }else{
            console.log("INCORRECT");
            hideQuestion(currentQuestionNumber);
            currentQuestionNumber++;
        }


        displayQuestion(currentQuestionNumber);

    });




}

function init() {
    // any other initializer functions here 
    setTimer();
    setHeader();

    //event listeners 
    startButton.addEventListener("click", startQuiz);
}

init();







// Onpage load initialize event listeners and run
// any functions that need to process when the page first loads

// initialize out app;
// init fuction has the event listern button to start the quiz in
// this case.

//

//maybe an array of functions that loops and the index
//increases after the button/option has been chosen.
//


