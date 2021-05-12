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
    showQuestions(0);
    queCounter(1);
};

var queCount = 0;
let queNumber = 1;

var nextBtn = quizBox.querySelector(".next-btn")

// If Next Btton Clicked
nextBtn.onclick = function(){
    if(queCount < questions.length - 1){
       queCount++;
       queNumber++;
       showQuestions(queCount); 
       queCounter(queNumber);
    } else{
    console.log("Questions completed"); 
    }
};

// getting questions and options from array
function showQuestions(index){
    var queText = document.querySelector(".que-text");
    var optionList = document.querySelector(".option-list")
    var queTag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    var optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
};

function queCounter(index){
    var bottomQuesCounter = quizBox.querySelector(".total-que");
    var totalQuesCountTag = '<span><p>'+ queCount +'</p>Of<p>'+ questions.length +'</p>Questions</span>';
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}