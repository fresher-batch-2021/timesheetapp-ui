$("#header").load("header.html");
$("#footer").load("footer.html");


function register() {

  event.preventDefault();
  const name = document.querySelector("#registerName").value;

  const email = document.querySelector("#registerEmail").value.toLowerCase();
  const password = document.querySelector("#registerPassword").value;
  const confirmPassword = document.querySelector("#registerConfirmPassword").value;


  switch (true) {
    case (name == null || name == "" || name.trim() == ""): {
      alert("Name cannot be blank");
      break;
    }
    case (email == null || email == "" || email.trim() == ""): {
      alert("Name cannot be blank");
      break;
    }
    case (password == null || password == "" || password.trim() == ""): {
      alert("Password cannot be blank");
      break;
    }
    case (password.length < 8): {
      alert("Password must be greater thab 8 characters");
      break;
    }
    case (confirmPassword == null || confirmPassword == "" || confirmPassword.trim() == ""): {
      alert("Password cannot be blank");
      break
    }
  case (password != confirmPassword): {
    alert("Confirm Password must be same as Password you entered")
    return false;
  }
  // case (email != "agathiyan@gmail.com" || password != "agathi@123"):{alert("Email or password is invalid");break;}
  default: {
    // connecting to server
    const registerObj = {
      "name": name,
      "email": email,
      "password": password
    };
    //login url
    const url = "https://product-mock-api.herokuapp.com/timesheetapp/api/v1/auth/register";

    axios.post(url, registerObj).then(res => {
      //for printing 
      console.log(res);
      alert("Registration successfull");

      window.location.href = "login.html";
    }).catch(err => {
      console.log(err);
      alert("Unable to register");

    });
  }
  }

}