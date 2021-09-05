function checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    if (user != undefined || user != null) {

        document.querySelector("#loggedIn").innerHTML = "Welcome <a href = 'profile.html'>" + user.name + "</a>  &nbsp;<a data-loggedIn ='true' href='#' onclick='logout()'> Logout</a>";
    }


}
checkLogin();

function logout() {
    localStorage.removeItem("LOGGED_IN_USER");
    window.location.href = "login.html";
}

let userStatus = localStorage.getItem("LOGGED_IN_USER");
// alert(userStatus);

if (userStatus != null || userStatus != undefined) {
    console.log(userStatus.role);
    if (userStatus.role == "ADMIN") {
        $(".navLog[data-loggedIn='true']").show();
        $(".navLog[data-loggedIn='false']").hide();
    } else {

        $(".navLog[data-loggedIn='true']").hide();
        $(".navLog[data-loggedIn='false']").hide();
    }
} else {
    $(".navLog[data-loggedIn='true']").hide();
    $(".navLog[data-loggedIn='false']").show();
}



function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}