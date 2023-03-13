// async function getUsernames(threshold) {
//   try {
//     const data = await fetch(
//       "https://jsonmock.hackerrank.com/api/article_users?page=1"
//     );
//     const json = await data.json();
//     console.log(json);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getUsernames(1);

// const fetch = require("cross-fetch");

// const getUsernames = (threshold) =>{
//     fetch(`https://jsonmock.hackerrank.com/api/article_users?page=1`)
//     .then( res => res.json())
//     .then( data =>{
//         console.log(data)
//     })
// }
// getUsernames(1)

// let promise = new Promise( (resolve , reject) =>{
//     console.log(1);
//     resolve("sussess");
//     console.log(2)
// })

// promise.then( (res) =>{
//     console.log(res)
// })

// console.log(4)

// function a(){
//     var one = "one";
//     return function res(){
//         console.log(one)
//     }
// }
// let b = a.res; //[ function : function ]
// b() 

let p1=( )=>{
    console.log("1")
   
}

let p2=(callback)=>{
    setTimeout(()=>{
      console.log("2")
      callback(p1)
    },1000)

    
}
let p3=( callback )=>{
  console.log("3")
  callback( p1 )
}


p2( p3 )

// 2 , 3 , 1