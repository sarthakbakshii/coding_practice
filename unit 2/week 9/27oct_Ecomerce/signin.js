document.querySelector('button').addEventListener('click',signIn);

var regUsers = JSON.parse(localStorage.getItem("userData"));

function signIn() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if(email == "admin" && pass== "admin"){  // if adimn do this -----------
        window.location.href = "admin.html";
    }
    else{      // if user do this ----------
       
        for( var i = 0; i < regUsers.length ; i++){
            console.log(regUsers[i]);
            if(regUsers[i].emailAddress == email && regUsers[i].password == pass )
            {
                window.location.href = "product.html";
            }
        }
    }

}