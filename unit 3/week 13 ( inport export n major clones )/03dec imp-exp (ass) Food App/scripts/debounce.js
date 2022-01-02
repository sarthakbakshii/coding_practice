import {searchFood} from './gettingInfo.js';


let bomd;
const debounce = (func,delay) => {
        clearTimeout(bomd);
        bomd = setTimeout(() => {
            func()
        }, delay);
}

 const findName = async () =>{
        debounceBox.innerHTML = null;
        let name = nameInput.value;
        let foodArr = await searchFood(name);
        
        if(foodArr.meals == null){
            console.log("no food")
            debounceBox.innerHTML = null
        }
        else{
            console.log(foodArr.meals);
            foodArr.meals.map( a => {
                
                let searchResBox = document.createElement("div");
                searchResBox.classList = "searchResBox";
                searchResBox.innerHTML = `${a.strMeal}`;
                searchResBox.addEventListener("click",() =>{
                    document.getElementById("nameInput").value = `${a.strMeal}`; 
                })
                debounceBox.append(searchResBox)
            })
            
        }
    }
export {debounce,findName}