// console.log( - "99" == -99.00)  // true
// console.log(99 == "99.00")      // true
// console.log(99 === Number("99")) // true
// console.log(- "99" == 99)

// const a = {};
// const b = { key : "b"};
// const c = {key : "c"};

// a[b] = 123 ;
// a[c] = 323 ;


// console.log(a[b])



// ------------------------ closer
// function name(n){
//    let d = "punam"
//     return function(){
//         console.log("name", n, d)
//     }()
// }

// name("sarthak")



// q1 )----------------------------------
// function sayHi() {
//   console.log(name);       //---undefined
//   console.log(age);        //---ReferenceError: Cannot access 'age' before initialization
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();


// q2 ) ------------------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// 3 3 3 and 0 1 2


// q3 )-----------------
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;     //--- 20
//   },
//   perimeter: () => 2 * Math.PI * this.radius, //---- arraow func, this == grobal ie, nan
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// q4)---------------------

// +true;            //---1
// !'Lydia';         //---- 0


//   q4 )------------------------------
