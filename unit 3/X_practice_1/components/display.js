
const displayDebounce = arr =>{

    let db = document.getElementById("debounceBox");
    console.log(db.innerHTML)
    arr.map( a => {
        // let opt = document.createElement("div");
        // opt.className = opt;
        // opt.innerHTML = a.strMeal;
        // debounceBox.append(opt);
        console.log(a)
    })
}

export {displayDebounce}