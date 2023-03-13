
function fun1(){
    let promise = new Promise( (resolve , reject) =>{
         let a = 1 + 1;
         console.log("first running")
         if( a == 2) resolve("success");
         else reject("rejected")
    })

    return promise
}
function fun2(){
    console.log("second running")
}

fun1()
.then( d => console.log(d))
.then(  fun2 )
.catch( e => console.log(e))

