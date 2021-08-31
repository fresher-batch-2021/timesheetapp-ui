$("#header").load("assets/partial/header.html");



function register() {

    event.preventDefault();
    const name = document.querySelector("#registerName").value;

    const email = document.querySelector("#registerEmail").value.toLowerCase();
    const password = document.querySelector("#registerPassword").value;
    const confirmPassword = document.querySelector("#registerConfirmPassword").value;

    RegisterValidator.validate(name, email, password, confirmPassword)

    const registerObj = {
        "name": name,
        "email": email,
        "password": password
    };

    console.log(registerObj);
    UserService.register(registerObj).then(res => {
        let data = res.data;
        console.log(data);
        alert("Registration Successful");
        window.location.href = "home_login.html";

    })

    .catch(err => {
        console.log(err.response.data);
        alert("Unable to Register");
    });

}