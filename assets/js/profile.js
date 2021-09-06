$("#header").load("_header.html");

let userStr = localStorage.getItem("LOGGED_IN_USER");
let user = userStr != null ? JSON.parse(userStr) : null;
if (user != null) {
    document.querySelector("#name").innerHTML = user.name;
    document.querySelector("#email").innerHTML = user.email;
}