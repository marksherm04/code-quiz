// get all required elements
var startBtn = document.querySelector(".start-btn button");
var infoBox = document.querySelector(".info-box");
var exitBtn = infoBox.querySelector(".buttons .exit");
var continueBtn = infoBox.querySelector(".buttons .restart");
var quizBox = document.querySelector(".quiz-box");

// If Start Quiz Button Clicked
startBtn.onclick = function() {
    infoBox.classList.add("activeInfo"); // show info box
};

// If Exit Button Clicked
exitBtn.onclick = function() {
    infoBox.classList.remove("activeInfo"); // hide the info box
};

// If Continue Button Clicked
continueBtn.onclick = function() {
    infoBox.classList.remove("activeInfo"); // hide the info box
    quizBox.classList.add("activeQuiz"); // show the quiz box
    showQuestions();
};

let queCount = 0;

// getting questions and options from array
function showQuestions(){
    const queText = document.querySelector(".que_text");
    let queTag = '<span>'+ questions[0].question +'</span>';
    queText.innerHTML = queTag;
};