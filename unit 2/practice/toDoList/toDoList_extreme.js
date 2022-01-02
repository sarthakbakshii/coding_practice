var body = document.querySelector("body");

var container = document.createElement("div");
    container.setAttribute("class","container");
body.append(container)

// ----------------------------- add to do - start
var addBox = document.createElement("div");
    addBox.setAttribute("class","addBox");
    container.append(addBox);

    //  ------------------------elements
    let entryInput = document.createElement("input");
        entryInput.type = "text";
        entryInput.setAttribute("class","entryInput");
        entryInput.setAttribute("id","entryInput");

    let addBtn = document.createElement("input");
        addBtn.type = "button";
        addBtn.value = "ADD";
        addBtn.addEventListener("click",addData)
        addBtn.setAttribute("class","addBtn")
    
    addBox.append(entryInput,addBtn)
    //  ------------------------elements
    let data = [];  //======================================================================> database: 

    function addData(event){
        var dataToBeAdded = document.getElementById("entryInput").value;
        
        if(dataToBeAdded == ""){ alert("Please fill something, so i can add")}
        else{
            // data.push({dataToBeAdded,flag:1}) //=====================================>adding to database:
            // showdata();
               var showBox_ele = document.createElement("div");
                showBox_ele.setAttribute("class","showBox_ele");
                showBox.append(showBox_ele);

                let entryOutput = document.createElement("input");
                    entryOutput.type = "text";
                    entryOutput.setAttribute("class","entryOutput");
                    entryOutput.value = dataToBeAdded;
                    entryOutput.disabled = true;
                    entryOutput.setAttribute("id","entryOutput");

                let dltBtn = document.createElement("input");
                    dltBtn.type = "button";
                    dltBtn.value = "DELETE";
                    dltBtn.addEventListener("click", (event) =>{
                        event.target.parentNode.remove()
                    })
                    dltBtn.setAttribute("class","dltBtn")
                
                let doneBtn = document.createElement("input");
                    doneBtn.type = "button";
                    doneBtn.value = "DONE";
                    doneBtn.setAttribute("class","doneBtn");
                    doneBtn.addEventListener("click", (event) =>{
                        entryOutput.setAttribute("class","green");
                    })

                let editBtn = document.createElement("input");
                    editBtn.type = "button";
                    editBtn.value = "EDIT";
                    editBtn.setAttribute("class","editBtn");
                    editBtn.addEventListener("click", (event) =>{
                        entryOutput.disabled = false;
                    })

                let saveBtn = document.createElement("input");
                    saveBtn.type = "button";
                    saveBtn.value = "SAVE";
                    saveBtn.setAttribute("class","saveBtn");
                    saveBtn.addEventListener("click", (event) =>{
                        entryOutput.disabled = true;
                    })

                    showBox_ele.append(entryOutput,doneBtn,editBtn,saveBtn,dltBtn)
        }

        document.getElementById("entryInput").value = "";
    }

    console.log(data)
// ----------------------------- add to do - end

// ----------------------------- show to do - start
var showBox = document.createElement("div");
    showBox.setAttribute("class","showBox");
    container.append(showBox);



    //  ------------------------elements
    
    
    // function showdata(){

        


    //     for(let i = 0 ; i< data.length ; i++){
    //         var showBox_ele = document.createElement("div");
    //             showBox_ele.setAttribute("class","showBox_ele");
    //             showBox.append(showBox_ele);

    //     let entryOutput = document.createElement("input");
    //         entryOutput.type = "text";
    //         entryOutput.setAttribute("class","entryOutput");
    //         entryOutput.setAttribute("id","entryOutput");

    //     let dltBtn = document.createElement("input");
    //         dltBtn.type = "button";
    //         dltBtn.value = "DELETE";
    //         dltBtn.addEventListener("click",addData)
    //         dltBtn.setAttribute("class","dltBtn")
        
    //     let doneBtn = document.createElement("input");
    //         doneBtn.type = "button";
    //         doneBtn.value = "COMPLETED";
    //         doneBtn.addEventListener("click",addData)
    //         doneBtn.setAttribute("class","doneBtn")

    //         showBox_ele.append(entryOutput,doneBtn,dltBtn)

    // }

    // }
    

    
    //  ------------------------elements



// ----------------------------- show to do - start