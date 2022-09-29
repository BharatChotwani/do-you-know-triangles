const areaInputs = document.querySelectorAll(".area-inputs");
const calculateAreaBtn = document.querySelector("#calculate-area");
const showOutput = document.querySelector("#output");

function calculateSides(a, b){
    if(a > 0 && b > 0) {
    const sumOfSides = (a * b / 2);
} else{
    showOutput.innerText = "Please enter valid number."
}
    return sumOfSides;
}

function calcculateArea(){
    const sumOfSides = calculateSides(Number(areaInputs[0].value), Number(areaInputs[1].value));
    if(sumOfSides > 0){
    showOutput.innerText = "The area of Triangle is " + sumOfSides;}
    
    else{
        showOutput.innerText = "Please fill the correct values in field";
    }
}

calculateAreaBtn.addEventListener("click", calcculateArea);