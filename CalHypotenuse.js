// .side-input , #calculate-hypotenuse , #show-output
const inputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#calculate-hypotenuse");
const outPut = document.querySelector("#show-output");

function calculateSqrt(a, b){
    const sideSqrt = a*a + b*b ;
    console.log(sideSqrt);
    return sideSqrt
}

function calculateHypotenuse() {
   const sideSqrt = calculateSqrt(Number(inputs[0].value), Number(inputs[1].value));
   const lengthOfHypotenuse = Math.sqrt(sideSqrt);
//    console.log(lengthOfHypotenuse);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);