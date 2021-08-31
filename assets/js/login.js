$("#header").load("assets/partial/header.html");


function login() {

    event.preventDefault();
    const email = document.querySelector("#staffEmail").value.toLowerCase();
    const password = document.querySelector("#staffPassword").value;

    LoginValidator.validate(email, password)

    const loginObj = {

        email: email,
        password: password
    };

    UserService.login(loginObj.email, loginObj.password).then(res => {
        let data = res.data;
        // console.log(data.docs[0]);
        alert("Login Successful");

        const user = data.docs[0];
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
        // console.log(user);

        if (user.role == "ADMIN") {
            window.location.href = "all_timesheet.html";
        } else {
            window.location.href = "my_timesheet.html";
        }

    })

    .catch(err => {
        console.log(err);
        alert("Unable to Login");
    });

}

// switch (true) {
//     case (email == null || email == "" || email.trim() == ""):
//         { alert("Name cannot be blank"); break; }
//     case (password == null || password == "" || password.trim() == ""):
//         { alert("Password cannot be blank"); break; }
//         // case (email != "agathiyan@gmail.com" || password != "agathi@123"):{alert("Email or password is invalid");break;}
//     default:
//         {
// connecting to server
// const loginObj={
//   "email":email,
//   "password":password
// }

// //login url
// const url="https://product-mock-api.herokuapp.com/timesheetapp/api/v1/auth/login";

// axios.post(url,loginObj).then(res =>{//login in
//   //for printing 
//   console.log(res);
//   let user = res.data;
//   localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
//   alert("login successfull");
//   if(user.role == "ADMIN"){
//   window.location.href="all_timesheet.html";
//   }
//   else{
//     window.location.href="timesheet.html";
//   }
// }).catch(err =>{
//   console.log(err);
//   alert("unable to login");

// });
// const dbUsername = 'apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw';
// const dbPassword = 'deea8a2257ba08c5a56fb729475edfa1';
// const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
// const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_users/_find";

// const loginObj = {
//     selector: {
//         email: email,
//         password: password,

//     },
//     fields: ["_id", "name", "email", "role"],
// };
// axios.post(url, loginObj, { headers: { Authorization: basicAuth } }).then(res => {
//     let data = res.data.docs;
// console.log(data);
// if (data.length == 0) {
//     alert("Invalid login credentials");
// } else {
//     const user = data[0];
//     localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
//     console.log(user);
//     alert("successfully logged in");
//     if (user.role == "ADMIN") {
//         window.location.href = "all_timesheet.html";
//     } else {
//         window.location.href = "my_timesheet.html";
//     }
// window.location.href="my_timesheet.html";
//                 }
//             }).catch(err => {
//                 console.error(err);
//                 alert("not login");

//             });
//         };
// }

// }