document.querySelector("button").addEventListener('click',signUp);

var userArr = JSON.parse(localStorage.getItem("userData")) || [] ;

function signUp() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var user = document.getElementById("user").value;
    var mobile = document.getElementById("mobile").value;
    
    var userCredentials = {
        emailAddress : email,
        password : pass,
        userName : user,
        mobileNo : mobile
    };
    userArr.push(userCredentials)
    localStorage.setItem("userData",JSON.stringify(userArr));
    
    window.location.href = "signin.html"


}

