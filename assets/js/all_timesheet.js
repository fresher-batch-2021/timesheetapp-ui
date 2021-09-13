$("#header").load("_header.html");
$("#footer").load("_footer.html");


//    getting data
let userStr = localStorage.getItem("LOGGED_IN_USER");
let user = userStr != null ? JSON.parse(userStr) : null;

function listAllTasks() {

    var content = "";

    TaskService.getAllTasks().then(res => {

        let data = res.data.rows;
        let all_task_list = data.map(obj => obj.doc);


        let i = 0;

        for (let task of all_task_list) {

            i = i + 1;



            content = content + `<tr><td>${task.userId}</td><td>${task.attendanceDate}</td><td>${task.name}</td><td><time>${task.inTime}</time></td><td><time>${task.outTime}</time></td><td>${task.totalHours}</td><td>${task.comments}</td><td><input class="btn btn-success" type="button" id="approveButton" value="Approve" onclick="approveRow(${task.id})" /></td></tr>`;


        }
        document.querySelector("#all-data-body").innerHTML = content;

    }).catch(err => {
        console.log(err);
        toastr.error("Error in getting data");
    });

}
listAllTasks();



function approveRow(id) {

    toastr.success("Task is approved");
    TaskService.getTask(id).then(res => {
        let approveObj = res.data;
        approveObj.status = "APPROVED";
        TaskService.approveTask(id, approveObj)
            .then(res1 => {
                toastr.success("Successfully Approved");
                window.location.reload();
            }).catch(err => {
                toastr.error("error");
                console.log(err.response.message);
            })
    })



}

function searchName() {
    let searchName = document.getElementById("searchBox").value;
    let myTable = document.getElementById("all-timesheet");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[2];

        if (tableDatas) {
            let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
            if (textValue.indexOf(searchName) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }

}