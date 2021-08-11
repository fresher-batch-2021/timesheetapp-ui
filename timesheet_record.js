$("#header").load("header.html");
$("#footer").load("footer.html");

//    geeting data
    

let tasksStr = localStorage.getItem("TASKS");
let tasks = JSON.parse(tasksStr);
console.log(tasks);

let url ="https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks";

axios.get(url).then(res =>{
  alert("getting data");
  let tasks = res.data;
 var content="";
 
  for(let task of tasks){
  
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
    const url =`https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks/${id}`;
    axios.delete(url).then(res => {
        alert("deleted succesfully");
        window.location.href="timesheet_record.html";
    }).catch(err =>{
        alert("error in deleting");
    });
    
}





