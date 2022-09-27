var sides=document.querySelectorAll(".input-hypo");
var button=document.querySelector("#btn");
var outputBox=document.querySelector("#hypo-output-box");

function sqOfSides(a,b){
    var square=(a*a)+(b*b);
    return square;
}

function calculateHypo(){
    // var square=sqOfSides(Number(sides[0].value),Number(sides[1].value));

    var a=Number(sides[0].value);
    var b=Number(sides[1].value);

    if(a>0 && b>0){
        var square=sqOfSides(a,b);
        var squareRoot=Math.sqrt(square);
        var convertedSquareRoot=parseFloat(squareRoot).toFixed(2);
        outputBox.innerText= `Length of the hypotenuse is ${convertedSquareRoot} cm`;
    }

    else{
        outputBox.innerText=`Invalid input. Enter positive values.`;
    }
}

button.addEventListener("click",calculateHypo)