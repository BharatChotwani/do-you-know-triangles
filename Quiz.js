const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#show-output");

const correctAnswers = ["90°", "right angled", "Polydor", "3", "2", "Hypotenuse", "A geometric figure", "Equilateral", "Geometry", "Scalene"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);