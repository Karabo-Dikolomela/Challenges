let numberButton = document.getElementById("number");

        
numberButton.addEventListener("click", function(){
    let input = document.getElementById("input").value
    let output = document.getElementById("output").value
    if (input % 2 == 0){
        document.getElementById("output").value = "Even";
    } 
    else {
        document.getElementById("output").value = "Odd";
    }
    
})