const myAnotherFileFunction = require("./myanotherfile");

let myName = "My name is Dhaval";

function one() {
  console.log(`one ${myName}`);
  console.log(myAnotherFileFunction());
}

function two() {
  console.log(`two ${myName}`);
}

module.exports = {
  one: one,
  two: two,
};

/*----------------------------------------------------------------
    Create 3 files
    index.js => run this file and this will run two functions imported from second file
    second.js => contains 2 functions and in one of the two functions it runs the function imported from third file
    third.js => contains 1 function which is to be exported
------*/
