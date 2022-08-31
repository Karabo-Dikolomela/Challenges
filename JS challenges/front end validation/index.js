function myValidation(){
    let x = document.getElementById("newTask").value;
    

    if (x.match('<') =='<' || x.match('>') =='>') {
        document.getElementById("newTaskError").style.display = "block";
      }
      else{
        document.getElementById("newTaskError").style.display = "none";
      }

      let emptyListTag = document.createElement('li');
      let newTask = document.createTextNode('newTask');
      let a = emptyListTag.appendChild(newTask);
      let b = document.getElementById("taskList").appendChild(emptyListTag);
  }

  function myValidation2(){
    let y = document.getElementById("setDate").value;

    if (y.match("yyyy/mm/dd") == "yyyy/mm/dd"){
        document.getElementById("setDateError").style.display = "block";
    }
    else{
        document.getElementById("setDateError").style.display = "none";
    }
  }

  function myValidation3(){
    let z = document.getElementById("setTime").value;

    if (z == "--:--"){
        document.getElementById("setTimeError").style.display = "block";
    }
    else{
        document.getElementById("setTimeError").style.display = "none";
    }
  }