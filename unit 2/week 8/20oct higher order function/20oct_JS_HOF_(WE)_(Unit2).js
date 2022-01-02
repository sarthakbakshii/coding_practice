	
// Problem-1
// Given an array of numbers print the square of those numbers



// Problem-2
// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2]
// Sample Output [2, 4]




// Problem-3
// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3]
// Sample Output - [1,3]



// Problem-4
// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4]
// Sample Output - 24




// Problem-5
// Given an array of numbers find the sum of odd elements

// Sample Input - [1, 2, 3, 4]
// Sample Output - 4



// Problem-6
// Given an array of numbers find the sum of cubes if the number is divisible by 3

// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

console.log(`Question 1 :
`)
const arr1 = [1,2,3,4,5];

const sq = arr1.map( a => a*a);
console.log(
`Given array                                  : ${arr1}
Square of array                              : ${sq}

Question 2 :
`)
const  arr2 = [1,2];
const output2 = arr2.map(a => a*2);
console.log(
`Given array                                  : ${arr2}
Double value of array                        : ${output2}

Question 3 :
`)
const arr3 = [1,2,3];
const output3 = arr3.filter(a => a%2==1);
console.log(
`Given array                                  : ${arr3}
Odd elements of array                        : ${output3}

Question 4 :
`)
const arr4 = [2,3,4];
const output4 = arr4.reduce( (a,c) => a*c);
console.log(
`Given array                                  : ${arr4}
product of elements of array                 : ${output4}

Question 5 :
`)
const arr5 = [1,2,3,4];
const output5 = arr5.filter(a => a%2==1).reduce( (a,c) => a+c,0);
console.log(
`Given array                                  : ${arr5}
sum of odd elements of array                 : ${output5}

Question 6 :
`)
const arr6=[1,2,3,4,5,6];
const output6 = arr6.filter(a => a%3==0).reduce( (a,c) => {
    return a + c**3
},0);
console.log(
`Given array                                  : ${arr6}
sum of cubes if the number is divisible by 3 : ${output6}
`)