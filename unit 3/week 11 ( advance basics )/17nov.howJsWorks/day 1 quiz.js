// let arr = [1,2,3];
// console.log(`original array : ${arr}`)
// // output => [ 1, 2, 3 ]


// const copy = a => ch = a;
// copy(arr)


// console.log(`copied array :   ${ch}
// `)
// // output => [ 1, 2, 3 ]

// ch = ch.map( a => a*2)
// // output => [ 2, 4, 6 ]

// console.log(`original array : ${arr}`)
// console.log(`change Copied array : ${ch}`)
// i m still not understanding if we change the value to 2nd/coiped array how and why will the original array change

let arr = [1,2,3];
Object.freeze(arr)
console.log(`original array : ${arr}`)
// output => [ 1, 2, 3 ]


const copy = a => ch = a;
copy(arr)
console.log(`copied array :   ${ch}
`)

ch[0] = 10;
ch[1] = 20;
ch[2] = 30;
console.log(`change Copied array : ${ch}`)

arr[0] = 10;
console.log(`change original array : ${arr}`)


