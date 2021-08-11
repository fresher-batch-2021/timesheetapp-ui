$("#header").load("header.html");
$("#footer").load("footer.html");


function validDate(){
var today = new Date().toISOString().split('T')[0];
var nextWeekDate = new Date(new Date().getTime() + 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
document.getElementsByName("attendanceDate")[0].setAttribute('min', today);
document.getElementsByName("attendanceDate")[0].setAttribute('max', nextWeekDate)
}


function AddData() {
    // below variable r for checking
    var x = document.getElementById("taskName").value;
    var y = document.getElementById("timeIn").value;
    var a = document.getElementById("timeOut").value;
    var b = document.getElementById("comments").value; 
    var letters = '/^[a-zA-Z]+$/';
    if ((parseInt(x) != (x)) && (y == parseInt(y)) && (a == parseInt(a)) && (b == parseInt(b))) {
        alert("Wrong Value Entered");
    } else {
        var rows = "";
        var taskName = document.getElementById("taskName").value;
        var timeIn = document.getElementById("timeIn").value;
        var timeOut = document.getElementById("timeOut").value;
        var totalHours = SumHours();
        var comments = document.getElementById("comments").value;
        var userId=localStorage.getItem("userId");
        var attendanceDate=document.getElementById("attendanceDate").value;
        alert(taskName);
        rows += "<tr><td>" + userId + "</td><td>" + attendanceDate + "</td><td>" + taskName + "</td><td>" + timeIn + "</td><td>" + timeOut + "</td><td>" +
            totalHours + "</td><td>" + comments + "</td></tr>";
        $(rows).appendTo("#list tbody");
        
        var taskObj = {
            "inTime": timeIn,
            "outTime": timeOut,
            "totalHours": totalHours,
            "comments": comments,
            "name": taskName,
            "userId":userId,
            "attendanceDate":attendanceDate
        };
        const url = "https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks";
        axios.post(url,taskObj).then (res => {
            alert("added to server");
        }).catch(err =>{
            alert("error in sending data");
        });
        console.log(taskObj);


        let taskStr = localStorage.getItem("TASKS");
        let tasks = taskStr != null ? JSON.parse(taskStr): []; 
        tasks.push(taskObj);


        //store all tasks in localStorage
        localStorage.setItem("TASKS", JSON.stringify(tasks));




       
    }

}




function ResetForm() {
    document.getElementById("list-task").reset();
}

function SumHours() {
    
var timeIn = document.getElementById("timeIn").value ;
var timeOut = document.getElementById("timeOut").value ;

var diff = 0 ;
if (timeIn && timeOut) {
timeIn = ConvertToSeconds(timeIn);
timeOut = ConvertToSeconds(timeOut);

diff = Math.abs( timeOut - timeIn ) ;
// console.log( 'time difference is : ' + secondsTohhmmss(diff) );
console.log(secondsTohhmmss(diff) );
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
var minutes = parseInt(seconds / 60) ;
return hours + "hours : " + minutes + "minutes ";
}