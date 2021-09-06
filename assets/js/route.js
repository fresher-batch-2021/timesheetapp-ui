const routes = [
    { path: "register.html" },
    { path: "login.html" },
    { path: "index.html" },
    { path: "home_login.html" },
    { path: "profile.html", roles: ["USER"] },
    { path: "qrcode.html", roles: ["ADMIN"] },
    { path: "update-task.html", roles: ["USER"] },
    { path: "my_timesheet.html", roles: ["USER"] },
    { path: "timesheet_record.html", roles: ["USER"] },
    { path: "all_timesheet.html", roles: ["ADMIN"] },
    { path: "list-users.html", roles: ["ADMIN"] },


];


function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) {
        if (route.path == pageName) {
            if (!route.roles) {
                allowed = true;
                break;
            } else if (route.roles.includes(role)) {
                allowed = true;
                break;
            }
        }
    }
    return allowed;
}
(function() {

    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    let allowedAccess = checkAccess(pathName, role);



    if (!allowedAccess) {
        toastr.error("You are not authorized to access this page,Redirecting to login page");
        setTimeout(function() {
            window.location.href = "login.html";

        }, 2000);
    }
})();