                $("#header").load("header.html");
                $("#footer").load("footer.html");
    
                function addTask(){
                    event.preventDefault();
                    const userId = parseInt(document.querySelector("#userId").value);
                    const taskName = document.querySelector("#taskName").value;
                    const taskObj = { 
                        "name" : taskName,
                        "status":"PENDING",
                        "createdBy": userId,
                    };
                    console.log(taskObj);
                    alert("Successfully Added Task");
                    window.location.href="listtask.html";
    
    
                }