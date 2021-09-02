let params = new URLSearchParams(window.location.search.substr(1));

let _id = params.get("id");
TaskService.getTask(_id).then(res => {
    let update = res.data;
    console.log(update);


    document.querySelector("#attendanceDate").value = update.attendanceDate;

    document.querySelector("#taskName").value = update.name;


    document.querySelector("#timeIn").value = update.inTime;


    document.querySelector("#timeOut").value = update.outTime;

    document.querySelector("#comments").value = update.comments;

    document.querySelector("#userId").value = update.userId;
    document.querySelector("#_id").value = update._id;
    document.querySelector("#_rev").value = update._rev;

});

function updateTask() {


    event.preventDefault();
    const attendanceDate = document.querySelector("#attendanceDate").value;
    const taskName = document.querySelector("#taskName").value;


    const timeIn = document.querySelector("#timeIn").value;

    const timeOut = document.querySelector("#timeOut").value;

    const totalHours = SumHours();

    const comments = document.querySelector("#comments").value;

    const id = document.querySelector("#_id").value;
    const rev = document.querySelector("#_rev").value;
    const userId = document.querySelector("#userId").value;



    let formValues = {
        "_id": id,
        "_rev": rev,
        "userId": userId,
        "name": taskName,
        "attendanceDate": attendanceDate,
        "inTime": timeIn,
        "outTime": timeOut,
        "comments": comments,
        "totalHours": totalHours,
    };

    console.log(formValues);



    TaskService.updateTask(formValues).then(res => {
        let users = res.data;
        // localStorage.setItem("register_in_users",JSON.stringify(users));
        toastr.success("Update successful");
        window.location.href = "timesheet_record.html";
    }).catch(err => {
        console.log(err.response.data);
        toastr.error("update failed");
    });






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
        console.log(secondsTohhmmss(diff));
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