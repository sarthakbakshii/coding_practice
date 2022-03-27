// ------ global volatile storage
const volatileData = JSON.parse( localStorage.getItem("ls_data_1")) || []
console.log("line 3", volatileData)

// ----- on load
window.addEventListener("load" ,() =>{
    showTodo(volatileData)
})

// ----- get text
const textInput = document.getElementById("input");
const textInput2 = document.getElementById("input2");
const addDtn = document.getElementById("add");
const displayTodo = document.getElementById("displayTodo")

addDtn.addEventListener("click", () =>{
    volatileData.push({ a : textInput.value, b : textInput2.value})
 
    localStorage.setItem("ls_data_1", JSON.stringify(volatileData) )

    console.log("line 11 ", volatileData);

    showTodo(volatileData)

    textInput.value = null
    textInput2.value = null
})

// -------- show data
const showTodo = (todo) =>{
    displayTodo.innerHTML = null;

    todo.map(  (a,i) =>{
        var singleTodo = document.createElement("div");
        singleTodo.innerHTML = `${i+1} )  ${a.a} : ${a.b}  `  
        
                const del = document.createElement("button");
                del.innerHTML = "delete";
                del.onclick = () => deleteTodo(a,i)
                singleTodo.append(del)

                const edit = document.createElement("button");
                edit.innerHTML = "edit";
                edit.onclick = () => editTodo(i)
                singleTodo.append(edit)

        displayTodo.append(singleTodo)
    })
}

// ------------- delete todo
const deleteTodo = (a,i) =>{
   volatileData.splice(i,1)
   localStorage.setItem("ls_data_1", JSON.stringify(volatileData) )

   console.log("line 39", volatileData)
     showTodo(volatileData)
}

const editTodo = (i) => {
    const op1 = prompt("Enter first data if wnat to edit or Leave it to continue")
    const op2 = prompt("Enter second data if wnat to edit or Leave it to continue")
     
    
    volatileData[i].a = op1 == ""? volatileData[i].a : op1
    volatileData[i].b = op2 == ""? volatileData[i].b : op2

    localStorage.setItem("ls_data_1", JSON.stringify(volatileData) )

//    volatileData[i] = { a : op1, b : op2}
     showTodo(volatileData)
    
}



// // -------- show data
// const showTodo = (todo) =>{
//     displayTodo.innerHTML = null;

//     todo.map(  (a,i) =>{
//         var singleTodo = document.createElement("div");
//         singleTodo.innerHTML = `${i+1} )  ${a}  
//         <button onclick="" >
//               delete
//         </button> `;

//         displayTodo.append(singleTodo)
//     })
// }

// // ------------- delete todo
// const deleteTodo = (a,i) =>{
//     console.log("delete", a , i)
// }