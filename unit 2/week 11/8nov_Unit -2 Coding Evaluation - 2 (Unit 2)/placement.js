function emptyFielf(){
   document.getElementById("cardno").value = ""
    document.getElementById("cvv").value = ""
    document.getElementById("exp").value = ""
}

function placeorder(){
var cardno = document.getElementById("cardno").value;
var cvv = document.getElementById("cvv").value;
var exp = document.getElementById("exp").value;
 if( cardno.length == 0 || cvv.length == 0 || exp.length == 0){
     alert("Empty Entry");
        emptyFielf();
 }
 else if(cardno.length<11){
     alert("Enter Complete 12 digit code");
      document.getElementById("cardno").value = ""
 }
 else {
     alert ("Order Placed");
     window.location.href = "product.html";
 }
}