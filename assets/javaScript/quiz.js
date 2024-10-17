document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName('questionButton');

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "btn1") {
                alert('btn1');
            } else if (this.getAttribute("data-type") === "btn2") {
                alert('btn2');
            } else if (this.getAttribute("data-type") === "btn3") {
                alert('btn3');
            }else if (this.getAttribute("data-type") === "btn4") {
                alert('btn4');
            }
        });
    }})


