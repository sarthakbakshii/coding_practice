

const searchData = async name => {
                let url = `https://newsapi.org/v2/everything?q=${name}&from=2021-12-12&to=2021-12-12&sortBy=popularity&apiKey=eadfb9daa83a4cc7a3a3a495cec5abb0`
                let res = await fetch(url);
                let data = await res.json();
                return data.articles
            }

let bomb;

const debounce = (fun,delay,input) => {
    clearTimeout(bomb);
    bomb = setTimeout(() => {
        fun(input);
    }, delay);
}

const getName = async input =>{
    let name = input.value;
    // console.log(name)
    let NewArr = await searchData(name);
    // console.log(NewArr);

    if(input.value.length == 0){
        document.getElementById("debounceBox").innerHTML = null;
    }

    displayDebounce(NewArr);
}
const displayDebounce = arr =>{
    let db = document.getElementById("debounceBox");
    db.innerHTML = "";
    arr.map( a=> {
        console.log(a)
        let opt = document.createElement("div");
        opt.className = "opt";
        opt.innerHTML = a.title;
        opt.addEventListener("click", () => {
            document.getElementById("input").value = a.title
        })

        debounceBox.append(opt)
    })
}

export {debounce,getName,searchData}