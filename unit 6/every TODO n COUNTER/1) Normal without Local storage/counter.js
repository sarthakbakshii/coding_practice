const countBox = document.getElementById("countBox");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click" ,() =>{
    countBox.innerHTML = parseInt(  +countBox.innerHTML + 1)
})

decrement.addEventListener("click" ,() =>{
    countBox.innerHTML = parseInt(  +countBox.innerHTML - 1)
})