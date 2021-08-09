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

// // Creating a function to remove item from list
// function removeItem() {
 
//   // Declaring a variable to get select element
//   var a = document.getElementById("table-to-body");
//   var candidate = document.getElementById("candidate");
//   var item = document.getElementById(candidate.value);
//   a.removeChild(item);
// }



