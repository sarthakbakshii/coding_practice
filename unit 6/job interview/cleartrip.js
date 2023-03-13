// Flexbox v/s flexitem

// display: inline, 
// block,
// inline-block,
// flex,
// grid,
// none



// <div>
// 	<span></span>
// </div>


// <style>
// div {
// 	display: flex;
// 	height: 300px;
// 	background: red;
// }

// span {
// 	width: 200px;
// 	height: 300px;
// 	background: yellow;
// 	float: right;
// }
// </style>





// const myObject = {
//   price: 20.99,
//   get_price: function () {
//     return this.price
//   },
// }
// const customObject = Object.create(myObject)
// customObject.price = 19.99
// delete customObject.price
// console.log(customObject.get_price())





// var x = 100;
// function xyz() {
// 	console.log(x);
//  	var x = 200;
// }

// xyz(); // undefined





// const x;
// console.log(x); // cannot read property of undefined

// var x;
// console.log(x);

// let x;
// console.log(x);



// let arr = [1,2,3]         //—--- 100
// arr = [...arr, 4];        //---- 101



// function xyz() {
// 	var x = 100;
// 	var y = 200;
// 	var z = 3000;

// 	return function innerXyz() {
// 		console.log(x);
// 	}
// }

// const hello = xyz();  //[function : function]
// hello();








// Promises:


	//  let promise = new Promise( (resolve,reject) =>{
	// 	setTimeOut( () =>{
    // 			resolve("content")
    //                     }, 2000 )
    //        } );




// Promise.reject(100)
// .then(res => console.log(1, res))
// .catch(err => console.log(2, err))
// .catch(err => console.log(3, err))
// .catch(err => console.log(4, err))
// .then(res => console.log(5, res))

// onclick onClick

// // 2, 100
// // 3, 100
// // 4, 100


// <div>
//        <p>
// 	 <span>hello</span>
//        </p>
// </div>



// setTimeout(() => console.log(1), 0);
// console.log(2);
// Promise.resolve().then(() => console.log(3));
// console.log(4);

contry : 
[
    { n : "a" , t : 1},
    { n : "b" , t : 1},
    { n : "a" , t : 2},
    { n : "b" , t : 2},
    { n : "a" , t : 3},
    { n : "b" , t : 3},
];
filter : 
[
    { n : "a" , t : 1},
    { n : "b" , t : 1},
    { n : "a" , t : 2},
    { n : "b" , t : 2},
    { n : "a" , t : 3},
    { n : "b" , t : 3},
]

// ---------------------
conrty : [
    { n : "a" , t : 2},
    { n : "b" , t : 2},
]

