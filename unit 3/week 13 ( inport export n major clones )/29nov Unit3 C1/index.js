
async function allMeal(){
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    // let url ="https://www.themealdb.com/api/json/v1/1/latest.php"
    let req = await fetch(url)
    let data = await req.json()
    // console.log(data.categories)
    return data.categories
}
allMeal()
// -------------------------------------------------
async function displayMea(){
    let mealArr = await allMeal()
    console.log(mealArr)

    let displayBox = document.getElementById("displayBox");
    mealArr.map( obj => {
        let price = Math.round( Math.random()*100 );
        let passingdata = {obj,price}
        let card = document.createElement("div")
        card.classList = "card";
        card.id = "card";
        card.innerHTML = 
        `
        <h3> <div>${obj.strCategory}</div> <div> ${price} rs</div> </h3>
        <img class="img" src="${obj.strCategoryThumb}"  >
        <p>${obj.strCategoryDescription}</p>
        `;
        displayBox.append(card)

        let cartBtn = document.createElement("div");
        cartBtn.classList = "cartBtn";
        cartBtn.id = "cartBtn";
        cartBtn.innerHTML = "Add to cart";
        cartBtn.addEventListener("click",() =>{ addToCart(passingdata)})
        card.append(cartBtn)
    })
}
displayMea()
// -------------------------------------
var c2_CartArray2 = JSON.parse(localStorage.getItem("c2_cartData2")) || []
// -----------------------------------
function addToCart(passingdata){
    // console.log(passingdata.obj,passingdata.price)
    c2_CartArray2.push(passingdata);
    localStorage.setItem("c2_cartData2",JSON.stringify(c2_CartArray2));
    alert("Food added to the cart");
    cartNum();
}


// ---------------
console.log(c2_CartArray2)
window.addEventListener("load",()=>{
    cartNum();
})
// -------------------------- card display on menu .html
function cartNum(){
    
    let count = 0;
    c2_CartArray2.map( a => count++)
    document.getElementById("cartDisplayBox").innerHTML = count
}
// localStorage.clear()

// -----------------------------
document.getElementById("cartDisplayBox")
.addEventListener("click",() =>{
    location.href = "cart.html"
})