question1 = ['What does "flex-direction: column" do in flexbox?',
    'arrange items vertically from top to bottom',
    'arrange items vertically from bottom to top',
    'arrange items horizontally from left to right',
    'tacks the flex items horizontally from right to left',
    1];


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('questionButton');
    
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "btn1") {
                checkAnswer(CurrentQuestion, 1)
            } else if (this.getAttribute("data-type") === "btn2") {
                checkAnswer(CurrentQuestion, 2)
            } else if (this.getAttribute("data-type") === "btn3") {
                checkAnswer(CurrentQuestion, 3)
            } else if (this.getAttribute("data-type") === "btn4") {
                checkAnswer(CurrentQuestion, 4)
            }
        });
    }
    console.log('1')

    loadQuestion(question1)

})



var CurrentQuestion = question1;
/**
 * 
 * loads the question from an array and populates the
 * answer buttons. Takes questions in the following format 
 * question = [question, answer1, answer2, answer3, answer4, correctAnswerIndex]
 */
function loadQuestion(question) {
    let buttons = document.getElementsByClassName('questionButton');
    document.getElementById('question').textContent = question[0];
    let btnIndex = 1
    for (let button of buttons) {
        button.textContent = question[btnIndex];
        btnIndex = btnIndex;
    }
}

/**
 * 
 * activates the event listner for button clicks once question is loaded and passes the question
 * to check answer when a button is pressed 
 */
function listenForAnswer(question){
    
}

function checkAnswer(question, answerIndex) {
    if (answerIndex === question[5]){
        alert('Correct');
        console.log(2);
    } else {
        alert(`Wrong. The correct answer is ${question[question[5]]}`)
        console.log(3);
    }
}


//array in the format [question, answer1, answer2, answer3, answer4, correctAnswerIndex]

