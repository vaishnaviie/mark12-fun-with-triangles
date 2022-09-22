var sides=document.querySelectorAll(".input-hypo");
var button=document.querySelector("#btn");
var outputBox=document.querySelector("#hypo-output-box");

function sqOfSides(a,b){
    var square=(a*a)+(b*b);
    return square;
}

function calculateHypo(){
    var square=sqOfSides(Number(sides[0].value),Number(sides[1].value));
    var squareRoot=Math.sqrt(square);
    var convertedSquareRoot=parseFloat(squareRoot).toFixed(2);
    outputBox.innerText= `Length of the hypotenuse is ${convertedSquareRoot} cm`;
}

button.addEventListener("click",calculateHypo)