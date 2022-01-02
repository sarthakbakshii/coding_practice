import {searchData} from './getData.js';

let bomb;

const debounce = (fun,delay,input) =>{
    clearTimeout(bomb);
    bomb = setTimeout(() => {
        fun(input);
    }, delay);
}

const getName = async input => {
    let name = input.value;
    // console.log(name)
    let foodArr = await searchData(name);
    console.log(foodArr)
    displayDebounce(foodArr)

    if (input.value.length == 0) {
            debounceBox.innerHTML = null
            console.log("empty")
    }
}
const displayDebounce= arr =>{

    let db = document.getElementById("debounceBox");
    db.innerHTML = ""
    arr.map( a => {
        let opt = document.createElement("div");
        opt.className = "opt";
        opt.innerHTML = a.strMeal;
        opt.addEventListener("click", () =>{
            document.getElementById("input").value = a.strMeal;
        })
        debounceBox.append(opt);
        console.log(a);

    })
}
export {debounce,getName}