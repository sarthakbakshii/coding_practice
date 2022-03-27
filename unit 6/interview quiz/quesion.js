// q2 =

// foo();

// function foo() {
//     console.log("hello")
// }

// q8 >

// arr = ['a','b','c','d','e'];
// const fun = ( [f,...r]) => r.reduce( (a,c) => a+c) + f;
// console.log( fun( arr )  )

// q9 =>



// for(let i = 0 ; i < 3 ; i++){
//     const a = 2;
//     let b = 3;
// }

// console.log(a);
// console.log(b)

// q12 =

// var name = "ajay";

// function printdtl(){
//     console.log( this.name )
// }

// var person = {
//     name : "haren",
//     print : printdtl() //=== its a function so not assesable and typeerror
//     // if its a callback then it works
// }

// person.print()

// 16

// var num = Number("100");
// var prod = "10"*5;
// var join = "hello" + 5 + "th person";
// var b = String( 1024)

// console.log(num)
// console.log(prod)
// console.log(join)
// console.log(b)

// 24

// let  obj = { name : "sarthak" ,  pass : "121212"  }

// const getData = ({name , pass}) =>{
//     console.log(name, pass)
// }

// getData(obj)

// function con(x){
//     var y = x*10;
//     function val(z){
//         console.log(x,y,z)
//     }
//     val(y*5)
// }
// con(3)

// var a1 = [1,2,3,4,5];
// // var a2[1,2,3,4,5];
// var a3 = new Array(5).fill(0).map( function(a,b){ return b+1 });
// // var a4[] = [1,2,3,4,5]

// console.log(a1);
// // console.log(a2);
// console.log(a3);
// // console.log(a4);

// var arr = [1,2,3,4,5];
// arr.map( a => a*5 )
// console.log(arr)

// const arr = [10,12,15,21]
// for( var i = 0 ; i < arr.length ; i++){
//     setTimeout( function() {
//         console.log( i , arr[i])
//     }, 1000)
// }

// const pr = (x) =>{
//     x = x+5;
//     return inner =>{
//         x* inner
//     }
// }
// console.log( pr(5)(10) )

// const sum = (x,y) =>{
//     x = x && 5;
//     y = y || 5;
//     return x+y
// }
// console.log( sum(20,5) )

var 0j