var angles=document.querySelectorAll(".angles");
var submitBtn=document.querySelector("#is-triangle-submit-btn");
var outputBox=document.querySelector("#is-triangle-output-box");

function calculateSum(a1,a2,a3){
    var sum =a1+a2+a3;
    return sum;
}

function isTriangle(){
    // var sum =calculateSum(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));

    var a1=Number(angles[0].value);
    var a2=Number(angles[1].value);
    var a3=Number(angles[2].value);

    if(a1>0&&a2>0&&a3>0){

        var sum= calculateSum(a1,a2,a3);

        if(sum===180){
            showOutput("Yahh! It is a triangle");
        }
        else{
            showOutput("Oh oh! It's not a triangle");
        }
    }

    else{
        showOutput("Invalid input. Enter positive values.");
    }
}

function showOutput(msg){
    outputBox.innerHTML=msg;
}

submitBtn.addEventListener("click",isTriangle)