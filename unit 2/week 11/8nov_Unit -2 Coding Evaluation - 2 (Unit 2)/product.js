

// -------------------------------------------------------- storage

var data = [
    {
      name: "SAMSUNG Galaxy F12",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      price: 11499,
    },
    {
      name: "SAMSUNG Galaxy F42",
      rating: 4.2,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
      price: 12199,
    },
    {
      name: "Apple Iphone 12",
      rating: 4.6,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
      price: 59999,
    },
    {
      name: "APPLE iPhone 12 Mini",
      rating: 4.5,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      price: 49999,
    },
    {
      name: "OPPO A12",
      rating: 3.8,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
      price: 9490,
    },
    {
      name: "ASUS ROG Phone 3",
      rating: 4.9,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      price: 46999,
    },
    {
      name: "DIZO Star 300",
      rating: 3.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
      price: 1299,
    },
    {
      name: "Micromax IN Note 1 ",
      rating: 4.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
      price: 10999,
    },
    {
      name: "SAMSUNG Galaxy Z Fold3 5G",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
      price: 149999,
    },
  ];

  localStorage.setItem("c2_itemData",JSON.stringify(data));
// localStorage.clear()
  var c2_itemArray = JSON.parse(localStorage.getItem("c2_itemData"));
  var c2_CartArray = JSON.parse(localStorage.getItem("c2_cartData")) || [];

// ------------------------------------------------------ main function
function emptyDisplayBox(){
    document.getElementById("displayBox").innerHTML = ""
}
window.addEventListener("load", () =>{
     displaycard(c2_itemArray);
})

//------------------------------------------------------------- DOM FUNCTION 

//== display card
function displaycard(c2_itemArray){
    emptyDisplayBox();

    var displayBox = document.getElementById("displayBox");

    c2_itemArray.map( (item,index)=>{

        var card = document.createElement("div");
        card.classList = "card";
        card.id = "card";
        card.innerHTML = `<img src="${item.image_url}" >
                        <h1>${item.name}</h1>
                        <h2>Price: ${item.price} Rs</h2>
                        <h4>Rating: ${item.rating} </h4>
                        `;
        
        displayBox.append(card);

        var cartBtn = document.createElement("div");
        cartBtn.classList = "cartBtn";
        cartBtn.id = "cartBtn";
        cartBtn.innerHTML ="Add To Cart";
        cartBtn.addEventListener("click",() =>{ addToCart(item) });

        card.append(cartBtn);
    })


}

// --- add to cart
function addToCart(item){
    let cartCheck = c2_CartArray.filter( a =>{
        return a.name == item.name && a.price == item.price && a.rating == item.rating && a.image_url == item.image_url
    });
    if( cartCheck.length > 0){
        alert("Item Already Added To The Cart");
    }
    else{
        c2_CartArray.push(item);
        localStorage.setItem("c2_cartData",JSON.stringify(c2_CartArray));
        // console.log(c2_CartArray)
        // alert("not present")
    }
}

// == sort by rating
function sortByRating(){
    var selection = document.getElementById("sortByRating").value;
    if( selection == "L"){
        c2_itemArray = c2_itemArray.sort( (a,b) => a.rating -b.rating );
    }
    else if( selection == "H"){
        c2_itemArray = c2_itemArray.sort( (a,b) => b.rating -a.rating );
    }
    console.log(c2_itemArray)
    displaycard(c2_itemArray);
}

function sortByPrice(){
    var selection = document.getElementById("sortByPrice").value;
    if( selection == "L"){
        c2_itemArray = c2_itemArray.sort( (a,b) => a.price -b.price );
    }
    else if( selection == "H"){
        c2_itemArray = c2_itemArray.sort( (a,b) => b.price -a.price );
    }
    console.log(c2_itemArray)
    displaycard(c2_itemArray);
}
