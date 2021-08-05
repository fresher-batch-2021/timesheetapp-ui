
       $("#header").load("header.html");
       $("#footer").load("footer.html");

      function login() {
        // event.preventDefault();
        const email = document.querySelector("#staffEmail").value.toLowerCase();
        const password = document.querySelector("#staffPassword").value;

        if(email  == null || email == "" || email.trim()  == ""){
          alert("Name cannot be blank");
          return false;
        } else if(password == null || password == "" || password.trim() == ""){
          alert("Password cannot be blank");
          return false;
        }
          else {
          console.log ("Your email is "+ email + " and your Password is "+password);

        let loginUserData = {
          "UserName" : email,
          "Password" : password,

        }
        console.log(loginUserData);
        }
        
           if(loginUserData === data.loginUserData){
            console.log("Success, You're in!")
          }else {
            console.log("You're not registered, Kindly contact your manager")
          }
        
      };
      
    