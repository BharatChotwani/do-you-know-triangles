const inputFieds = document.querySelectorAll(".angle-input");
const isTrianglebtn = document.querySelector("#Istrianglebtn");
const showOutput = document.querySelector("#outputEl");

console.log(Number(inputFieds[0].value), Number(inputFieds[1].value), Number(inputFieds[2].value))

function calculateSumOfAngles(angle1,angle2,angle3) {
    if(angle1 > 0 && angle2 > 0 && angle3 > 0){
const sumOfAngles = angle1 + angle2 + angle3;}
else{
    showOutput.innerText = "Please enter valid angle (we are not taking negative or 0 values)";
}
return sumOfAngles;

}

function isTriangle() {
const sumOfAngles = calculateSumOfAngles(Number(inputFieds[0].value),Number(inputFieds[1].value),Number(inputFieds[2].value));
if(sumOfAngles > 0){
    if(sumOfAngles === 180){
    showOutput.innerText = "Yes, The angles form a triangle";
    }
    else if(sumOfAngles < 0) {
    showOutput.innerText = "opps, please fill the correct value.";
    }
    else {
    showOutput.innerText = "No, The angles are not form a triangle";
    }
} 
else {
    showOutput.innerText = "Invalid input values."
} 
}





isTrianglebtn.addEventListener("click", isTriangle);