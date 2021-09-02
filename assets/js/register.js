$("#header").load("assets/partial/header.html");



function register() {

    event.preventDefault();
    const name = document.querySelector("#registerName").value;

    const email = document.querySelector("#registerEmail").value.toLowerCase();
    const password = document.querySelector("#registerPassword").value;
    const confirmPassword = document.querySelector("#registerConfirmPassword").value;

    try {




        RegisterValidator.validate(name, email, password, confirmPassword)

        const registerObj = {
            "name": name,
            "email": email,
            "password": password,
            "role": "USER"
        }
        isEmailExists(email).then(res => {

                let exists = res;
                if (exists) {
                    toastr.error("", "This email Id is already exists", //if its true it is an error
                        {
                            preventDuplicate: true
                        });
                } else {

                    console.log(registerObj);
                    UserService.register(registerObj).then(res => {
                        let data = res.data;
                        console.log(data);
                        toastr.success("successfully register");
                        setTimeout(function() {
                            window.location.href = "home_login.html";
                        }, 1000)


                    })

                    .catch(err => {
                        console.log(err.response.data);
                        toastr.error("Unable to Register");
                    });
                }
            })
            .catch(err => {

                console.error(err);
                toastr.error("Error" + err.message)
            });
    } catch (err) {
        console.log(err);
        toastr.error(err.message);
    }
}