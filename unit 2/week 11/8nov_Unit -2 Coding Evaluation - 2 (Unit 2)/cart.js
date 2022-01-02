

// -------------------------------------------------------- storage

  var c2_CartArray = JSON.parse(localStorage.getItem("c2_cartData")) || [];


// ------------------------------------------------------ main function
function emptyDisplayBox(){
    document.getElementById("displayBox").innerHTML = ""
}
window.addEventListener("load", () =>{
     displaycard(c2_CartArray);
     TotalDisplay();
})

//------------------------------------------------------------- DOM FUNCTION 

//== display card
function displaycard(c2_CartArray){
    emptyDisplayBox();

    var displayBox = document.getElementById("displayBox");

    c2_CartArray.map( (item,index)=>{

        var card = document.createElement("div");
        card.classList = "card";
        card.id = "card";
        card.innerHTML = `<img src="${item.image_url}" >
                        <h1>${item.name}</h1>
                        <h2>Price: ${item.price} Rs</h2>
                        <h4>Rating: ${item.rating} </h4>
                        `;
        
        displayBox.append(card);

        // var cartBtn = document.createElement("div");
        // cartBtn.classList = "cartBtn";
        // cartBtn.id = "cartBtn";
        // cartBtn.innerHTML ="Add To Cart";
        // cartBtn.addEventListener("click",() =>{ addToCart(item) });

        // card.append(cartBtn);
    })


}


// ==== total
var totalBill = 0;

function TotalDisplay(){
     totalBill = c2_CartArray.reduce( (a,c) =>{
        return a + Number(c.price);
    },0);
    totalCartItem = 0;
    c2_CartArray.map( a=> totalCartItem++);

    document.getElementById("totalPrice").innerHTML =  totalBill +" Rs";
    document.getElementById("totalItems").innerHTML =  totalCartItem;
}

// == sort by rating
function sortByRating(){
    var selection = document.getElementById("sortByRating").value;
    if( selection == "L"){
        c2_CartArray = c2_CartArray.sort( (a,b) => a.rating -b.rating );
    }
    else if( selection == "H"){
        c2_CartArray = c2_CartArray.sort( (a,b) => b.rating -a.rating );
    }
    console.log(c2_CartArray)
    displaycard(c2_CartArray);
}

function sortByPrice(){
    var selection = document.getElementById("sortByPrice").value;
    if( selection == "L"){
        c2_CartArray = c2_CartArray.sort( (a,b) => a.price -b.price );
    }
    else if( selection == "H"){
        c2_CartArray = c2_CartArray.sort( (a,b) => b.price -a.price );
    }
    console.log(c2_CartArray)
    displaycard(c2_CartArray);
}

// == check promo code
function checkPromo(){
    var promo = document.getElementById("promocode").value;
    if( promo == "masai30"){
        alert ("Congratulation you got 30% discount");

        var finalPrice = totalBill - totalBill*30/100;
        console.log(finalPrice)

        document.getElementById("newPrice").innerHTML = `New Bill : ${finalPrice} Rs`;
        TotalDisplay()

        document.getElementById("promocode").value =""
    }
}