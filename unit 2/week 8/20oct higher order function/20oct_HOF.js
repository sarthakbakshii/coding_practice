// Problem -1 : Array String Length

// Given an array of strings print the length of each string

// Problem -2 : Array String First Character

// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

const arr1 = ["apple", "windows", "ubuntu"]
const out1 = arr1.map( a => a.length)
console.log(`
Problem 1 =>

Given Array           : ${arr1}
length of each string : ${out1}
`);

const arr2 = ["apple", "windows", "ubuntu"]

const out2 = arr2.map( a =>  a[0])

console.log(`
Problem 2 =>

Given Array           : ${arr2}
first characters      : ${out2}
`);

const arr3 = ["assignment", "problem", "media", "upload"];
const check = a =>{
    return ( a[0]=="a" || a[a.length -1]=="a")
}
const out3 = arr3.filter(check);
console.log(`
Problem 3 =>

Given Array                       : ${arr3}
first or last character is a      : ${out3}
`);

const arr4 = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
let sum =0;
const out4 = arr4.filter( (e,i) =>  i%2!==1).map( (a) => a.length).reduce( (a,c) => a+c)

console.log(`
Problem 4 =>

Given Array                                                 : ${arr4}
sum of lengths if the characters in the string are odd      : ${out4}
`);

const arr5 = [2, 4, 5, 3, 6, 8];
const out5 = arr5.filter( (e,i) => i%2==0 && e%2==0 )

console.log(`
Problem 4 =>

Given Array                                            : ${arr5}
even index (starting the count at 0) and are even      : ${out5}
`);

