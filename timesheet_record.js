$("#header").load("header.html");
$("#footer").load("footer.html");

function retrieveTask() {
  let tasksStr = localStorage.getItem("TASKS");
   let tasks = JSON.parse(tasksStr);
   console.log(tasks);
   let content= "";
   let url = "https://product-mock-api.herokuapp.com/timesheetapp/api/v1/tasks";
   axios.get(url).then(res => {
     alert("getting data");
     let tasks = res.data;

     for(let task of tasks){
     
      content += "<tr><td>" + task.taskName + "</td><td>" + task.inTime + "</td><td>" + task.outTime + "</td><td>" +
      task.totalHours + "</td><td>" + task.comments + "</td></tr>";
     }
     console.log(content);
    document.getElementById("table-to-body").innerHTML = content;
   }).catch(err => {
     alert("error in getting data");

   });
   
}

// // Creating a function to remove item from list
// function removeItem() {
 
//   // Declaring a variable to get select element
//   var a = document.getElementById("table-to-body");
//   var candidate = document.getElementById("candidate");
//   var item = document.getElementById(candidate.value);
//   a.removeChild(item);
// }



