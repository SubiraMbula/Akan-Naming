var submit=function(){
    var daysOfTheWeek = [
        "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
      ];
      var maleNames = [
        "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
      ];
      var femaleNames = [
        "Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
      ];
      var name = document.getElementById("name").value
      var date = document.getElementById("date").value
      var month = document.getElementById("month").value
      var year = document.getElementById("year").value
      var dateOfBirth = (year + "/" + month + "/" + day);
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
        Display.style.background = "blue"
        Display.style.color = "black"
        Display.innerHTML = "Hey ! " + name + " you were born on " +daysOfTheWeek[find] + " your akan name is " +maleNames[find];
      };
      if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
        Display.style.background = "pink"
        Display.style.color = "black"
        Display.innerHTML = "Hey! " + name + " you were born on " +daysOfTheWeek[find] + " your akan name is " + femaleNames[find];
      }
    }