function validateForm() {
    var name = document.forms["signupForm"]["name"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
  
    if (confirmPassword == "") {
      alert("Confirm Password must be filled out");
      return false;
    }
  
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    document.getElementById("username").innerHTML = name;
    document.getElementById("login").style.display = "block";

    
    document.getElementById("form").style.display = "none";
  
    return false;
  }
  