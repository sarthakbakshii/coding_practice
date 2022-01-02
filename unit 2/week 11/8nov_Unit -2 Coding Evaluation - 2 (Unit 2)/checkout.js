
function checkAddress(){
    var address = document.getElementById("addInput").value;
    if(address == ""){
        alert("Empty Field");
         
    }
    else{
        alert("MOVE TO FILAL PROCESS");
        window.location.href = "placement.html"
    }
    document.getElementById("addInput").value = ""
}