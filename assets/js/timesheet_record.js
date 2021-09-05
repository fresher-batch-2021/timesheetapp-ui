$("#header").load("_header.html");


//    getting data
let userStr = localStorage.getItem("LOGGED_IN_USER");
let user = userStr != null ? JSON.parse(userStr) : null;

const dbUsername = "apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw";
const dbPassword = "deea8a2257ba08c5a56fb729475edfa1";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/_all_docs?include_docs=true"

axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {

    let tasks = res.data.rows.map(obj => obj.doc);
    let myTasks = tasks.filter(obj => obj.userId == user._id);
    var content = "";

    for (let task of myTasks) {

        content = content + `<tr><td>${task.userId}</td><td>${task.attendanceDate}</td><td>${task.name}</td><td>${task.inTime}</td><td>${task.outTime}</td><td>${task.totalHours}</td><td>${task.comments}</td><td><input type="button" id="deleteButton" value="Delete" onclick="deleteRow('${task._id}', '${task._rev}')" />&ensp;<button><a href='update-task.html?id=${task._id}' style="text-decoration:none;">Edit</a></button></td></tr>`;
        //   <td><img src="images/trash.png" alt=""></td>
    }
    console.log(content);
    document.querySelector("#table-to-body").innerHTML = content;
}).catch(err => {
    toastr.error("error in getting data");

});

function deleteRow(id, rev) {
    toastr.success(id);
    toastr.error("Do you want to delete this data?");
    const dbUsername = "apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw";
    const dbPassword = "deea8a2257ba08c5a56fb729475edfa1";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    //const url =`https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks/${id}?rev=${rev}`;
    const url = "https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/" + id + "?rev=" + rev;
    //  const url ="https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/${id}?rev=${rev}`;"
    console.log(url);
    axios.delete(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        toastr.success("deleted succesfully");
        window.location.href = "timesheet_record.html";
    }).catch(err => {
        toastr.error("error in deleting");
    });

}