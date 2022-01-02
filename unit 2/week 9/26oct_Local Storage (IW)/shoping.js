var body = document.querySelector("body");

var container = document.createElement("div");
    container.setAttribute("class","container");
body.append(container)


// ----------------------------- add to do - start
var addBox = document.createElement("div");
    addBox.setAttribute("class","addBox");
    container.append(addBox);

    //  ------------------------elements
    let form = document.createElement("form");
    form.addEventListener("submit",addItem)
    

                    let entryInput = document.createElement("input");
                        entryInput.type = "text";
                        entryInput.setAttribute("class","entryInput");
                        entryInput.placeholder = "Enter Items";
                        entryInput.setAttribute("id","entryInput");

                    let quantity = document.createElement("input");
                        quantity.type = "text";
                        quantity.setAttribute("class","quantity");
                        quantity.placeholder = "Enter Quantity";
                        quantity.setAttribute("id","quantity");

                    let addBtn = document.createElement("input");
                        addBtn.type = "submit";
                        addBtn.value = "ADD";
                        addBtn.setAttribute("class","addBtn")
                    
                    form.append(entryInput,quantity,addBtn)
    addBox.append(form);

    

    //  ------------------------elements


// ----------------------------- show to do - start
var showBox = document.createElement("div");
    showBox.setAttribute("class","showBox");
    showBox.setAttribute("id","showBox");
    container.append(showBox);

// -------------------------------------------------------------------------------- backend functionalities 
let superData = JSON.parse( localStorage.getItem("localstored") ) || [];

window.addEventListener("load",function () {
    displayData(superData)
})

function addItem(event){
    event.preventDefault();
    let item = document.getElementById("entryInput").value;
    let qty = document.getElementById("quantity").value;

    if(item == "" && qty == ""){
        alert("Both items are empty")
    }
    else if(item == ""){
        alert("please fill the item")
    }
    else if(qty == ""){
        alert("please fill the quantity")
    }
    else{
                list = {item,qty};
                superData.push(list)
                // console.log(superData);
                localStorage.setItem("localstored",JSON.stringify(superData));

                

                console.log(superData)
                displayData(superData)
    }
    document.getElementById("entryInput").value = "";
    document.getElementById("quantity").value = "";

}

function displayData(superData){
    document.querySelector("#showBox").innerHTML = ""

    superData.map( (item,index) =>{
         var showBox_ele = document.createElement("div");
                showBox_ele.setAttribute("class","showBox_ele");
                showBox.append(showBox_ele);

                let entryOutput = document.createElement("input");
                    entryOutput.type = "text";
                    entryOutput.setAttribute("class","entryOutput");
                    entryOutput.value = item.item;
                    entryOutput.disabled = true;
                    entryOutput.setAttribute("id","entryOutput");

                let outputQty = document.createElement("input");
                    outputQty.type = "text";
                    outputQty.setAttribute("class","outputQty");
                    outputQty.value = item.qty;
                    outputQty.disabled = true;
                    outputQty.setAttribute("id","outputQty");
                
                let dltBtn = document.createElement("input");
                    dltBtn.type = "button";
                    dltBtn.value = "DELETE";
                    dltBtn.setAttribute("class","dltBtn")
                    dltBtn.addEventListener("click", () => makeDelete(index))

                showBox_ele.append(entryOutput,outputQty,dltBtn)
    })
}

function makeDelete(index) {
    console.log(index);
    superData.splice(index,1);
    localStorage.setItem("localstored",JSON.stringify(superData));
    displayData(superData)
}
