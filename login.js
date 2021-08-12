$("#header").load("header.html");
$("#footer").load("footer.html");

function login() {
  
  event.preventDefault();
  const email = document.querySelector("#staffEmail").value.toLowerCase();
  const password = document.querySelector("#staffPassword").value;


  switch(true){
    case (email == null || email == "" || email.trim() == ""):{alert("Name cannot be blank");break;}
    case (password == null || password == "" || password.trim() == ""):{alert("Password cannot be blank");break;}
    // case (email != "agathiyan@gmail.com" || password != "agathi@123"):{alert("Email or password is invalid");break;}
    default:{
      // connecting to server
      const loginObj={
        "email":email,
        "password":password
      };
      //login url
      const url="https://product-mock-api.herokuapp.com/timesheetapp/api/v1/auth/login";

      axios.post(url,loginObj).then(res =>{//login in
        //for printing 
        console.log(res);
        let user = res.data;
        localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
        alert("login successfull");
        if(user.role == "ADMIN"){
        window.location.href="all_timesheet.html";
        }
        else{
          window.location.href="timesheet.html";
        }
      }).catch(err =>{
        console.log(err);
        alert("unable to login");

      });
    }
  }

}
