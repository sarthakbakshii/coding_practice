// -------------------------------------
var c2_CartArray2 = JSON.parse(localStorage.getItem("c2_cartData2")) || []

window.addEventListener("load",()=>{
    displayMea(c2_CartArray2);
    console.log(c2_CartArray2);
    totalDisplay()
})


function displayMea(c2_CartArray2){
    

    let displayBox = document.getElementById("displayBox");
    c2_CartArray2.map( (item,index) => {
        
        let obj = item.obj;
        let price = item.price

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

        let removeBtn = document.createElement("div");
        removeBtn.classList = "cartBtn";
        removeBtn.id = "cartBtn";
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click",() =>{ remove(index)})
        card.append(removeBtn)
    })
}

function remove(index){
    console.log(index);
     document.getElementById("displayBox").innerHTML = "";
    c2_CartArray2.splice(index,1);
    localStorage.setItem("c2_cartData2",JSON.stringify(c2_CartArray2));
    displayMea(c2_CartArray2);
    totalDisplay();
}


function totalDisplay(){
    // document.getElementById("totalBox").innerHTML = "";
    var totalBill = 0;

    c2_CartArray2.map(a =>{
        totalBill += a.price
    })
    document.getElementById("totalBox").innerHTML =  totalBill
    console.log(totalBill)
}

// -----------------------------
// -----------------------------
document.getElementById("checkout")
.addEventListener("click",() =>{
    location.href = "checkout.html"
})