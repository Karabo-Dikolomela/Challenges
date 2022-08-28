 function calc (){
    let value1 = parseInt(document.querySelector("#value1").value)
    let value2 = parseInt(document.querySelector("#value2").value)
    let operator = document.querySelector("#operator").value

    let result;

 if (operator == "add") {
    calculate = value1 + value2;

 } else if (operator == "subtract"){
    calculate = value1 - value2;

 } else if (operator == "multiply"){
    calculate = value1 * value2;

 } else if (operator == "divide"){
    calculate = value1 / value2;

 } else {
    alert ("invalid input");
 }

 document.getElementById("result").innerHTML= calculate;
 }

    
