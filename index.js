var validation = function () {
    var daysOfTheWeek = [
      "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];
    var maleNames = [
      "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
    ];
    var femaleNames = [
      "Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
    ];
    var month = document.getElementById("month").value
    var name = document.getElementById("username").value
    var year = document.getElementById("year").value
    var day = document.getElementById("date").value
    
    var dateOfBirth = new Date(year + "/" + month + "/" + day);
    var find = dateOfBirth.getDay();
    var Display = document.getElementById("Display");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
  
    if (month =="" && year == "" && day == "" && name == "") {
      alert("fill all the required inputs !");
    }
  
    if (month < 0 > 31) {
      alert("Hey! " + name + " please enter a valid month");
      }
  
      else if (year < 0) {
      alert( "Hey! " + name  + " please enter a valid year");
    };
  
     if((day < 1) || (day > 31)) {
      alert("Hey! " + name + " enter a valid day between 1 to 31");
    }
  
    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      Display.style.background = "#4158D0 0%"
      Display.style.color = "black"
      Display.innerHTML = "Hey ! " + name + " you were born on " +daysOfTheWeek[find] + " your akan name is " +maleNames[find];
    };
    if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      Display.style.background = "#C850C0 46%"
      Display.style.color = "black"
      Display.innerHTML = "Hey! " + name + " you were born on " +daysOfTheWeek[find] + " your akan name is " + femaleNames[find];
    }
  };
