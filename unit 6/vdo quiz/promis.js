
let data = ["one","two"];

// ===================== callback

// function one() {
//     setTimeout(() => {
//         data.forEach(a => console.log(a))
//     }, 2000);
// }
// function two( callback ) {

//     setTimeout(() => {
//         data.push("three");
//         callback();

//     }, 4000);
// }

// two( one )


// ============= promise with then - catch

// function one() {
//     setTimeout(() => {
//         data.forEach(a => console.log(a))
//     }, 1000);
// }

// function two() {

//     return new Promise( (resolve, reject) =>{
//             setTimeout(() => {
//                 data.push("three");
                
//                 if(false){
//                     resolve()
//                 }
//                 else{
//                     reject("error")
//                 }

//             }, 2000);
//     })

    
// }

// two()
// .then( one )
// .catch( e => console.log(e))

// =========================== promise with async await

// function one() {
//     setTimeout(() => {
//         data.forEach(a => console.log(a))
//     }, 1000);
// }

// function two() {

//     return new Promise( (resolve, reject) =>{
//             setTimeout(() => {
//                 data.push("three");
                
//                 if(false){
//                     resolve()
//                 }
//                 else{
//                     reject("error")
//                 }

//             }, 2000);
//     })

    
// }

// async function start(){
//     try {
//         await two()

//         one()

//     } catch (e) {
//         console.log(e)
//     }
// }
// start()

 arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

 /*
 output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)

                     
Test Case #3
Input: [4,4,4,2], 16,Expected: [],Actual:  []
Test Case #4
Input: [4,4,4,4], 16,Expected: [4,4,4,4],Actual:  [ 4, 4, 4, 4 ]
Test Case #5
Input: [2,7,4,0,9,5,1,3], 20,Expected: [0,4,7,9],Actual:  [ 0, 4, 7, 9 ]
Test Case #6
Input: [2,7,4,0,9,5,1,3], 120,Expected: [],Actual:  []
Test Case #7
Input: [1,2,3,4,5,9,19,12,12,19], 40,Expected: [4,5,12,19],Actual:  [ 4, 5, 12, 19 ]
                     */



let fhalf = [];
let shalf = [];

// --- breaking into 1st half    O[n]
for(let i = 0 ; i < Math.floor( arr.length / 2) ; i++){
    fhalf.push( arr[i] )
}

// ------ breaking into 2nd half    O[n]
for(let i = Math.floor( arr.length / 2) ; i < arr.length ; i++){
    shalf.push( arr[i] )
}

// ---- taking subseq of 1st half  O[N^2]
let fh_sq = []
for(let i = 0 ; i < fhalf.length ; i++){
    let substr = [];
    for( let j = i ; j < fhalf.length ; j++){
                    substr.push( fhalf[j] );
                    let sum = substr.reduce( (a,b) => a+b )

        fh_sq.push(   { s1 : [...substr], sum }  )
    }
}
// console.log( fh_sq )

// ---- taking subseq of 2ND half  O[N^2]
let sh_sq = []
for(let i = 0 ; i < shalf.length ; i++){
    let substr = [];
    for( let j = i ; j < shalf.length ; j++){
                    substr.push( shalf[j] );
                    let sum = substr.reduce( (a,b) => a+b )
        sh_sq.push( { s1 : [...substr], sum }  )
    }
}
// console.log( sh_sq )



// ============= mearging both half and their sum into a big chunk  O[n^2] whose collective sum is 20

let possibilities = []

for(let i = 0 ; i < fh_sq.length ; i++){

    for(let j = 0 ; j < sh_sq.length ; j++){


        let sq = [...fh_sq[i].s1 ,...sh_sq[j].s1];
        let sum =  fh_sq[i].sum + sh_sq[j].sum  

        if( sum == s && sq.length == 4 ){
                //  console.log( {  sq , sum } )
                 possibilities.push({  sq , sum }  )
        }
       
    }
}


// ---------------- O[ n * M * log(n)]
possibilities.forEach(
    a =>{
             a.sq = a.sq.sort( (a,b) => a - b) 
    }
   
)

possibilities =  possibilities.sort( (a,b) => a[0] - b[0])
console.log( possibilities[0].sq )




// console.log( fhalf , shalf)