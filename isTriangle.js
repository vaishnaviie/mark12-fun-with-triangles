var angles=document.querySelectorAll(".angles");
var submitBtn=document.querySelector("#is-triangle-submit-btn");
var outputBox=document.querySelector("#is-triangle-output-box");

function calculateSum(a1,a2,a3){
    var sum =a1+a2+a3;
    return sum;
}

function isTriangle(){
    var sum =calculateSum(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));

    if(sum===180){
        showOutput("Yahh! It is a triangle");
    }
    else{
        showOutput("Oh oh! It's not a triangle");
    }
}

function showOutput(msg){
    outputBox.innerHTML=msg;
}

submitBtn.addEventListener("click",isTriangle)