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

let url ="https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks";

axios.get(url).then(res =>{

  let tasks = res.data;
   let myTasks = tasks.filter(obj=> obj.userId == user.id);
 var content="";
 
  for(let task of myTasks){
  
   content= content+`<tr><td>${task.userId}</td><td>${task.attendanceDate}</td><td>${task.name}</td><td>${task.inTime}</td><td>${task.outTime}</td><td>${task.totalHours}</td><td>${task.comments}</td><td><input type="button" id="deleteButton" value="Delete" onclick="deleteRow(${task.id})" /></td></tr>`;
 //   <td><img src="images/trash.png" alt=""></td>
  }
  console.log(content);
 document.querySelector("#table-to-body").innerHTML = content;
}).catch(err => {
  alert("error in getting data");

});

function deleteRow(id){
    alert(id);
    alert("Do you want to delete this data?");
    const url =`https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks/${id}`;
    axios.delete(url).then(res => {
        alert("deleted succesfully");
        window.location.href="timesheet_record.html";
    }).catch(err =>{
        alert("error in deleting");
    });
    
  }



