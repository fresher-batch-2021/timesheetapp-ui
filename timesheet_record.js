$("#header").load("header.html");
$("#footer").load("footer.html");

//    geeting data
let userStr = localStorage.getItem("LOGGED_IN_USER");
                        let user = userStr != null ? JSON.parse(userStr):null;    

// let tasksStr = localStorage.getItem("TASKS");
// let tasks = JSON.parse(tasksStr);
// console.table(tasks);
// let myTasks = tasks.filter(obj=> obj.userId == user.id);
// console.table(myTasks);

//let url ="https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks";
const dbUsername ="apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw";
        const dbPassword = "deea8a2257ba08c5a56fb729475edfa1";
        const basicAuth = "Basic " + btoa(dbUsername+ ":" + dbPassword);
const url ="https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/_all_docs?include_docs=true"

axios.get(url,{headers:{'Authorization': basicAuth}}).then(res =>{

  let tasks = res.data.rows.map(obj=>obj.doc);
   let myTasks = tasks.filter(obj=> obj.userId == user._id);
 var content="";
 
  for(let task of myTasks){
  
   content= content+`<tr><td>${task.userId}</td><td>${task.attendanceDate}</td><td>${task.name}</td><td>${task.inTime}</td><td>${task.outTime}</td><td>${task.totalHours}</td><td>${task.comments}</td><td><input type="button" id="deleteButton" value="Delete" onclick="deleteRow('${task._id}', '${task._rev}')" /></td></tr>`;
 //   <td><img src="images/trash.png" alt=""></td>
  }
  console.log(content);
 document.querySelector("#table-to-body").innerHTML = content;
}).catch(err => {
  alert("error in getting data");

});

function deleteRow(id,rev){
    alert(id);
    alert("Do you want to delete this data?");
    const dbUsername ="apikey-v2-n9i9mmwl3nxoshs878dn76zeb22gvambxdzrr040ezw";
        const dbPassword = "deea8a2257ba08c5a56fb729475edfa1";
        const basicAuth = "Basic " + btoa(dbUsername+ ":" + dbPassword);
    //const url =`https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks/${id}?rev=${rev}`;
    const url ="https://50eb74b6-05fa-4bcf-8bd8-696f364f9d42-bluemix.cloudantnosqldb.appdomain.cloud/timesheetappdb_tasks/${id}?rev=${rev}`;"
    axios.delete(url,{headers:{'Authorization': basicAuth}}).then(res => {
        alert("deleted succesfully");
        window.location.href="timesheet_record.html";
    }).catch(err =>{
        alert("error in deleting");
    });
    
  }



