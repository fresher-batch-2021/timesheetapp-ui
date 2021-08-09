$("#header").load("header.html");
$("#footer").load("footer.html");

function login() {
  event.preventDefault();
  const email = document.querySelector("#staffEmail").value.toLowerCase();
  const password = document.querySelector("#staffPassword").value;

  if (email == null || email == "" || email.trim() == "") {
    alert("Name cannot be blank");
    return false;
  } else if (password == null || password == "" || password.trim() == "") {
    alert("Password cannot be blank");
    // return false;
  }
 
  else if (email != "agathiyan@gmail.com" || password != "agathi@123") {
    alert("Email or password is invalid");
    return false;
  } else {


    alert("success");
    window.location.href = "timesheet.html";
  }



};