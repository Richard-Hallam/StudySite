document.addEventListener("DOMContentLoaded", function(){
    loadQuestion(question1)
    let buttons = document.getElementsByClassName('questionButton');

    // for (let button of buttons) {
    //     button.addEventListener("click", function() {
    //         if (this.getAttribute("data-type") === "btn1") {
    //             alert('btn1');
    //         } else if (this.getAttribute("data-type") === "btn2") {
    //             alert('btn2');
    //         } else if (this.getAttribute("data-type") === "btn3") {
    //             alert('btn3');
    //         }else if (this.getAttribute("data-type") === "btn4") {
    //             alert('btn4');
    //         }
    //     });
    // }})
})


function loadQuestion(question){
    let buttons = document.getElementsByClassName('questionButton');
    document.getElementById('question').textContent = question[0];
    let btnIndex = 1
    for (let button of buttons){
        button.textContent = question[btnIndex];
        btnIndex = btnIndex+1;
    }
}




//array in the format [question, answer1, answer2, answer3, answer4, correctAnswerIndex]
question1 = ['What does "flex-direction: column" do in flexbox?',
    'arrange items vertically from top to bottom',
    'arrange items vertically from bottom to top',
    'arrange items horizontally from left to right',
    'tacks the flex items horizontally from right to left',
    1];
