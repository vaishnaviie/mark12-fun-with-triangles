var inputParameters=document.querySelectorAll(".input-parameters");
var button=document.querySelector("#btn-area");
var outputBox=document.querySelector("#area-output-box");

function helper(base,height){
    var equation=(1/2)*base*height;
    return equation;
}

function calculateArea(base,height){
    // var equation=helper((inputParameters[0].value),Number(inputParameters[1].value))

    var base=Number(inputParameters[0].value);
    var height=Number(inputParameters[1].value);
    if(base>0 && height>0){
        var equation=helper(base,height);
        var convertedEquation=parseFloat(equation).toFixed(2);
        outputBox.innerText=`The area is ${convertedEquation} 
        cm²` ;
    }
 
    else{
        outputBox.innerText=`Invalid input. Enter positive values.` ;
    }
 
}

button.addEventListener("click",calculateArea);