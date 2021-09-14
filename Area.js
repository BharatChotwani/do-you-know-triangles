//.area-inputs , #calculate-area , #output
const areaInputs = document.querySelectorAll(".area-inputs");
const calculateAreaBtn = document.querySelector("#calculate-area");
const showOutput = document.querySelector("#output");

function calculateSides(a, b){
    const sumOfSides = (a * b / 2);
    return sumOfSides;
}

function calcculateArea(){
    const sumOfSides = calculateSides(Number(areaInputs[0].value), Number(areaInputs[1].value));
    showOutput.innerText = "The area of Triangle is " + sumOfSides;
}

calculateAreaBtn.addEventListener("click", calcculateArea);