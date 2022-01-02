// const userRegisteredFunction = require("./register");

// userRegisteredFunction();

// /*
//     events: {
//        user registered: [
//             function () {
//                 console.log("Send Verification Email");
//             },
//             function () {
//                 console.log("Send Verification Email");
//             },
//             function () {
//                 console.log("Send Verification Email");
//             }
//        ]
//     }
// */

const readline = require("readline");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

let books = ["GOT", "Lord of the Rings"];

function showBooks() {
  console.log("event listened");
  console.log(books);
  return;
}

const r1 = readline.createInterface({
  input: process.stdin, // Standard input => terminal
  output: process.stdout, // Standard output => terminal
});

// function showOptions() {
//   const options =
//     "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit";
// }

function interactWithUser() {
  r1.question(
    "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit \n",
    (selectedOption) => {
      eventEmitter.on("show books pressed", showBooks);
      if (selectedOption === "1") {
        eventEmitter.emit("show books pressed");
        interactWithUser();
      } else if (selectedOption === "2") {
        r1.question("Please provide name of the book", (bookName) => {
          books.push(bookName);
          eventEmitter.emit("show books pressed");
          interactWithUser();
        });
      } else if (selectedOption === "3") {
        r1.close();
      } else {
        console.log("Invalid input");
        interactWithUser();
      }
    }
  );
}

interactWithUser();

r1.on("close", () => {
  console.log("Bye Bye");
  process.exit(0);
});
