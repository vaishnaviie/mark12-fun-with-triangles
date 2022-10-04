var form=document.querySelector("#form");
var submitBtn=document.querySelector("#submit-btn");
var outputBox=document.querySelector("#quiz-output-box");

var rightAnswers=["90","Right Angle","one right angle","45°","Midsegment","Right Angle","Hypotenuse","3","3","2"];

function yourScore(){
    var score=0;
    var i=0;

    var formResult=new FormData(form);
    for(let value of formResult.values()){
        if(value===rightAnswers[i]){
            score++;
        }
        i++;
    }

    outputBox.innerText=`Your score is ${score}`;
}

submitBtn.addEventListener("click",yourScore);