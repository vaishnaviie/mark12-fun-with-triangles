var inputParameters=document.querySelectorAll(".input-parameters");
var button=document.querySelector("#btn-area");
var outputBox=document.querySelector("#area-output-box");

function helper(base,height){
    var equation=(1/2)*base*height;
    return equation;
}

function calculateArea(base,height){
    var equation=helper((inputParameters[0].value),Number(inputParameters[1].value))
    var convertedEquation=parseFloat(equation).toFixed(2);
    outputBox.innerText=`The area is ${convertedEquation} 
    cm²` ; 
 
}

button.addEventListener("click",calculateArea);