function myFunction(){

let userList = ["Phila", "Karabo", "Aphile-Aphile", "Tshegofatso", "Hlompho", "Tshiamo", "Onele", "Olona", "Onwabile", "Oyisile"]
let menuOpt = prompt("input number of choice","1","2","3","4");
switch(menuOpt){
    case "1":
        let user1 = prompt("first user");
        let user2 = prompt("second user");
        let user3 = prompt("third user");
        userList.push(user1, user2, user3);
        document.getElementById("maybe").innerHTML = userList.join("<br>");

        break;
     
    case "2":
        userList.pop();
        document.getElementById("maybe").innerHTML = userList.join("<br>");

        break;

    case "3":
        document.getElementById("maybe").innerHTML = userList.join("<br>");
       
        break;

    case "4":
        let sortedList =userList.sort();
        document.getElementById("maybe").innerHTML = userList.join("<br>");
}
}