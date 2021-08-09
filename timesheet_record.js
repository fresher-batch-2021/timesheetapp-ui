$("#header").load("header.html");
$("#footer").load("footer.html");

function retrieveTask() {
  let tasksStr = localStorage.getItem("TASKS");
   let tasks = JSON.parse(tasksStr);
   console.log(tasks);
   let content= "";
   for(let task of tasks){
     
    content += "<tr><td>" + task.taskName + "</td><td>" + task.inTime + "</td><td>" + task.outTime + "</td><td>" +
    task.totalHours + "</td><td>" + task.comments + "</td></tr>";
   }
   console.log(content);
  document.getElementById("table-to-body").innerHTML = content;
}



