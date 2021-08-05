
$("#header").load("header.html");
$("#footer").load("footer.html");
// store data

function displayData() {
    let data = [
      {
        id: 1,
        name: "Agathiyan",
        employeeId: "2851",
        email: "agathiyannv@gmail.com",
        timeDuration: "5:00",
        
      },
      {
        id: 1,
        name: "Agathiyan",
        employeeId: "2851",
        email: "agathiyannv@gmail.com",
        timeDuration: "5:00",
        
      },
      {
        id: 1,
        name: "Agathiyan",
        employeeId: "2851",
        email: "agathiyannv@gmail.com",
        timeDuration: "5:00",
        
      },
    ];
  
    //<tr><td>1</td></tr>
    //<tr><td>2</td></tr>
    let content = "";
    for (let dataObj of data) {
      //content = content + "<tr><td>"+ taskObj.id +"</td><td>" + taskObj.name + "</td><td>" + taskObj.priority + "</td></tr>";
      content =
        content +
        `<tr><td>${dataObj.id}</td><td>${dataObj.name}</td><td>${dataObj.employeeId}</td><td>${dataObj.email}</td><td>${dataObj.timeDuration}</td></tr>`;
    }
    console.log(content);
  
    // document.querySelector("#qr-data").innerHTML = content;
    document.querySelector("#qr-data").innerHTML = content;
  }
  displayData();
  