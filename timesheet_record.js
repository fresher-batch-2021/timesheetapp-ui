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



// function retrieveData() {
//   console.log("tasks");
//   var key = document.getElementById("table-to-body").value;
//   var records = window.localStorage.getItem(key);
//   var table = document.createElement("table");
//   var infor = document.createTextNode(records);
//   table.appendChild(infor);
//   var element = document.getElementById("table-to-body");
//   element.appendChild(table);
//
// }
//
// window.onload =function(){ //ensures the page is loaded before functions are executed.
//
//     document.getElementById("display-button").onclick = retrieveData;
// }

// let taskList = localStorage.getItem('tasks');
// var data = JSON.parse(localStorage.getItem("TASKS"));

// store data

// function displayData() {
//     let data = [
//       {
//         taskName : "Create home page",
//         timeIn: "9",
//         timeOut: "6",
//         totalTime: "9",
//         comments: "Nill",

//       },
//     //   {
//     //     taskName : "Create home page",
//     //     timeIn: "9",
//     //     timeOut: "6",
//     //     totalTime: "9",
//     //     comments: "Nill",

//     //   },
//     //   {
//     //     taskName : "Create home page",
//     //     timeIn: "9",
//     //     timeOut: "6",
//     //     totalTime: "9",
//     //     comments: "Nill",

//     //   },
//     ];

//     //<tr><td>1</td></tr>
//     //<tr><td>2</td></tr>
//     let content = "";
//     for (let dataObj of data) {
//     //   content = content + "<tr><td>"+ taskObj.id +"</td><td>" + taskObj.name + "</td><td>" + taskObj.priority + "</td></tr>";
//       content =
//         content +
//         `<tr><td>${dataObj.taskName}</td><td>${dataObj.timeIn}</td><td>${dataObj.timeOut}</td><td>${dataObj.totalTime}</td><td>${dataObj.comments}</td></tr>`;
//     }
//     console.log(content);

//     // document.querySelector("#qr-data").innerHTML = content;
//     document.querySelector("#qr-data").innerHTML = content;
//   }
//   displayData();






        //    $("#header").load("header.html");
        //         $("#footer").load("footer.html");

        //         function addTask(){
        //             event.preventDefault();
        //             const userId = parseInt(document.querySelector("#userId").value);
        //             const taskName = document.querySelector("#taskName").value;
        //             const taskObj = {
        //                 "name" : taskName,
        //                 "status":"PENDING",
        //                 "createdBy": userId,
        //             };
        //             console.log(taskObj);
        //             alert("Successfully Added Task");
        //             window.location.href="listtask.html";


        //         }

        // function copytable() {
        //   var source = document.getElementById('list');
        //   var destination = document.getElementById('TableTo');
        //   var copy = source.cloneNode(true);
        //   copy.setAttribute('id', 'tableTo');
        //   destination.parentNode.replaceChild(copy, destination);
        //   }
        //   setTimeout(function() {
        //   copytable();
        //   }, 0);
