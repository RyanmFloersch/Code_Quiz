
var mainDisplay = document.querySelector(".main-content");
var startButton = document.querySelector(".start-button");
var startingElements = document.querySelectorAll(".start-screen");
var countDownDisplay = document.querySelector(".timer");
var optionDisplay = document.querySelector(".option-buttons ");
var resultDisplay = document.querySelector(".result");


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
        // questionNumber: 1,
        ans1: "1. boolean",
        ans2: "2. string",
        ans3: "3. number",
        ans4: "4. undefined",
        correctAnswer: "1. boolean",

    },
    {
        question: "What does the DOM stand for?",
        // questionNumber: 2,
        ans1: "1. Dominoe On Marketplace",
        ans2: "2. Document Object Model",
        ans3: "3. Dodging Oncoming Motorcyles",
        ans4: "4. Deep Ocean Maintainance",
        correctAnswer: "2. Document Object Model",

        
    }
];


function setTimer() {
    countDownDisplay.innerText = "Timer: 60";
}

function setHeader() {
    questionDisplay = "Welcome to the quiz";

}
// helper function to quickly get an objects number of properties
function getObjectPropNumber(obj){
    var count= 0;
    for (key in obj) {
        count++;
    }
    return count;
}

//Helper function to hud elements
// Pass in an aray consisting of html elements and it will set their display to none
// The parameter cannot be empty and must be an iterable array of html elements.
function hideElements(elArray){
    
    for(child of elArray ){
        child.style.display = 'none';
    }
}
// Reveals hidden elements but only sets them to inline. 
function revealElements(elArray){
    
    for(child of elArray ){
        child.style.display = 'inline';
    }
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

        // declare and initialize the new elements
        var questionText = document.createElement('p');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');
        var button4 = document.createElement('button');


        // set the values to the elements text
        questionText.innerText = questionObj.question;
        button1.innerText =questionObj.ans1;
        button2.innerText =questionObj.ans2;
        button3.innerText =questionObj.ans3;
        button4.innerText =questionObj.ans4;

        // Set the data set to the current quetion index.
        // Done for ease of hiding and displaying questions later.
        questionText.dataset.questionIndex = i;
        button1.dataset.questionIndex = i;
        button2.dataset.questionIndex = i;
        button3.dataset.questionIndex = i;
        button4.dataset.questionIndex = i;

        var elArray = [questionText, button1,button2,button3,button4];

        // Add the elements to the div element in mainDisplay.
        // optionDisplay.append(questionText);
        // optionDisplay.append(button1);
        // optionDisplay.append(button2);
        // optionDisplay.append(button3);
        // optionDisplay.append(button4);
        for ( child of elArray) {
            optionDisplay.append(child);
        }




        // // Hide the elements initially
        // questionText.classList.add('hide');
        // button1.classList.add('hide');
        // button2.classList.add('hide');
        // button3.classList.add('hide');
        // button4.classList.add('hide');
        for ( child of elArray) {
            child.classList.add('hide');
        }


    }

}


function genResultScreen(){

    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var div = document.createElement('div');
    var p = document.createElement('p');
    var textField = document.createElement("textarea");
    var button = document.createElement('button');

    h2.innerText = 'All done!';
    h3.innerText = 'Your final score is ';
    p.innerText = "Enter initials: ";
    button.innerText = "Submit";




    mainDisplay.append(h2);
    mainDisplay.append(h3);
    div.append(p);
    div.append(textField);
    div.append(button);
    div.style.flexDirection ="row";
    mainDisplay.append(div);

    // div.classList.add('result');
    var elArray = [h2,h3,div,p,textField,button];

    for(var i = 0; i< elArray.length; i++){
        elArray[i].classList.add('result');
        // elArray[i].classList.add('hide');
    }
    hideElements(mainDisplay.querySelectorAll('.result'));

    // for(el of elArray){
    //     el.dataset.screen = "resultScreen" ;
    //     el.classList.add('hide') ;
    //     console.log(el);

    // }




}




// Function that reveals the questions by adding the show class and removing the hide
// class from the elements in the optionDisplay section of the html.   
function displayQuestion(questionNumber){
    

     var answerOptions = optionDisplay.children;
    
    for(el of answerOptions){
        if(el.dataset.questionIndex == questionNumber){
            el.classList.remove("hide");
            el.classList.add("show");
        }
    }

}
// Function that hides the questions by removing the show class and adding the hide
// class from the elements in the optionDisplay section of the html.  
function hideQuestion(questionNumber){
    var answerOptions = optionDisplay.children;
    for(el of answerOptions){
        if(el.dataset.questionIndex == questionNumber){
            el.classList.remove("show");
            el.classList.add("hide");
        }
    }
}



function resultScreen(score){

    var resultElements = mainDisplay.querySelectorAll('.result');

    // for(var i =0; i< resultElements.length; i++){
    //     console.log(resultElements[i]);
    // }
    // revealElements(resultElements);


    var h2 = resultElements[0];
    var h3 = resultElements[1];
    var div = resultElements[2];
    var p = resultElements[3];
    var initials  = resultElements[4];
    var button = resultElements[5];
    // var elArray = [h2,h3,div,p,textField,button];

     
    

    button = mainDisplay.querySelector("button");
    button.addEventListener('click', highScoreScreen(score));

}

function highScoreScreen(score){

    // hideElements();
     
    

}

function startQuiz() {
    //Begins the timer
    countDown();
    //Hides the starting elements
    for (el of startingElements) {
        el.classList.add("hide");
    }       

    genButtons();
    genResultScreen();


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

        if(currentQuestionNumber< questionArray.length){
            displayQuestion(currentQuestionNumber);
        }else{
            resultScreen(numberCorrect);  
        }

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


