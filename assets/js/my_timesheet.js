$("#header").load("_header.html");



function validDate() {
    var today = new Date().toISOString().split('T')[0];
    var nextWeekDate = new Date(new Date().getTime() + 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    document.getElementsByName("attendanceDate")[0].setAttribute('min', today);
    document.getElementsByName("attendanceDate")[0].setAttribute('max', nextWeekDate)
}

// && (a == parseInt(a)) && (b == parseInt(b))

function AddData() {
    // below variable r for checking
    var x = document.getElementById("taskName").value;
    var a = document.getElementById("timeIn").value;
    var b = document.getElementById("timeOut").value;
    var y = document.getElementById("comments").value;
    if ((parseInt(x) != (x)) && (y == parseInt(y))) {
        toastr.error("Wrong Value Entered");
    } else {
        var rows = "";
        var taskName = document.getElementById("taskName").value;
        var timeIn = document.getElementById("timeIn").value;
        var timeOut = document.getElementById("timeOut").value;
        var totalHours = SumHours();
        var comments = document.getElementById("comments").value;
        let userStr = localStorage.getItem("LOGGED_IN_USER");
        let user = userStr != null ? JSON.parse(userStr) : null;
        if (user == null) {
            toastr.error("Please Login");
            window.location.href = "login.html";
        }
        var userId = user._id;
        var attendanceDate = document.getElementById("attendanceDate").value;
        let userdata = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));


        rows += "<tr><td>" + userdata._id + "</td><td>" + attendanceDate + "</td><td>" + taskName + "</td><td>" + timeIn + "</td><td>" + timeOut + "</td><td>" +
            totalHours + "</td><td>" + comments + "</td></tr>";
        $(rows).appendTo("#list tbody");

        var taskObj = {
            "inTime": timeIn,
            "outTime": timeOut,
            "totalHours": totalHours,
            "comments": comments,
            "name": taskName,
            "userId": userId,
            "attendanceDate": attendanceDate,
            "status": "APPROVED"
        };


        const dbUsername = "apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw";
        const dbPassword = "deea8a2257ba08c5a56fb729475edfa1";
        const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

        const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks";
        axios.post(url, taskObj, { headers: { 'Authorization': basicAuth } })
            .then((res) => {
                let data = res.data;
                toastr.success("Task added successfully");

            }).catch(err => {
                console.log(err.response.data);
                toastr.error("Unable to Add");
            });

        console.log(taskObj);


        let taskStr = localStorage.getItem("TASKS");
        let tasks = taskStr != null ? JSON.parse(taskStr) : [];
        tasks.push(taskObj);


        //store all tasks in localStorage
        localStorage.setItem("TASKS", JSON.stringify(tasks));





    }

}




function ResetForm() {
    document.getElementById("list-task").reset();
}

function SumHours() {

    var timeIn = document.getElementById("timeIn").value;
    var timeOut = document.getElementById("timeOut").value;

    var diff = 0;
    if (timeIn && timeOut) {
        timeIn = ConvertToSeconds(timeIn);
        timeOut = ConvertToSeconds(timeOut);

        diff = Math.abs(timeOut - timeIn);
        // console.log( 'time difference is : ' + secondsTohhmmss(diff) );
        // console.log(secondsTohhmmss(diff));
        return secondsTohhmmss(diff);
    }

}

function ConvertToSeconds(time) {
    var splitTime = time.split(":");
    return splitTime[0] * 3600 + splitTime[1] * 60;
}

function secondsTohhmmss(secs) {
    var hours = parseInt(secs / 3600);
    var seconds = parseInt(secs % 3600);
    var minutes = parseInt(seconds / 60);
    return hours + "hours : " + minutes + "minutes ";
}