const conversionUnit= 1000

let kmButton = document.getElementById("km");
let mButton = document.getElementById("m");

kmButton.addEventListener("click", function(){
    let input = document.getElementById("input").value
    document.getElementById("output").value = input / conversionUnit + "km";
})

mButton.addEventListener("click", function(){
    let input = document.getElementById("input").value
    document.getElementById("output").value = input * conversionUnit + "m";
})