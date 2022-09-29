const inputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#calculate-hypotenuse");
const outPut = document.querySelector("#show-output");

function calculateSqrt(a, b){
    if(a > 0 && b > 0){
    const sideSqrt = a*a + b*b ;
    return sideSqrt
} else{
    outPut.innerText = "Please enter valid number."
}
}

function calculateHypotenuse() {
   const sideSqrt = calculateSqrt(Number(inputs[0].value), Number(inputs[1].value));
   console.log(sideSqrt);
   if(sideSqrt > 0) {
    const lengthOfHypotenuse = Math.sqrt(sideSqrt).toFixed(2);
    outPut.innerText = "Yay, The sides is Hypotenuse " + lengthOfHypotenuse;
    } else{
        outPut.innerText = "Sides can not be negatives. Enter valid Number.";
    }
   
   
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);