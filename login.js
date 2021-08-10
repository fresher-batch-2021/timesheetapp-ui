$("#header").load("header.html");
$("#footer").load("footer.html");

function login() {
  
  event.preventDefault();
  const email = document.querySelector("#staffEmail").value.toLowerCase();
  const password = document.querySelector("#staffPassword").value;


  switch(true){
    case (email == null || email == "" || email.trim() == ""):{alert("Name cannot be blank");break;}
    case (password == null || password == "" || password.trim() == ""):{alert("Password cannot be blank");break;}
    case (email != "agathiyan@gmail.com" || password != "agathi@123"):{alert("Email or password is invalid");break;}
    default:{alert("success");  window.location.href = "timesheet.html";}
  }

}
