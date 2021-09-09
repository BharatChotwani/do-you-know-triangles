//angle-input,Istrianglebtn,outputEl

const inputFieds = document.querySelectorAll(".angle-input");
const isTrianglebtn = document.querySelector("#Istrianglebtn");
const showOutput = document.querySelector("#outputEl");

function calculateSumOfAngles(angle1,angle2,angle3) {
const sumOfAngles = angle1 + angle2 + angle3;
// console.log(sumOfAngles);

}

function isTriangle() {
// const sumOfAngles = calculateSumOfAngles(45°,45°,90°);
}

isTrianglebtn.addEventListener("click", isTriangle)