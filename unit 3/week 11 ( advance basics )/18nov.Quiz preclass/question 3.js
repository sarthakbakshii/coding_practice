// --------------------- question 3

// let person1 ={ name: "jonny kumar"};
// let person2 = { name : " happy singh"};

// function enter(){
//     console.log("i m bakchod");
// }
// enter.call(person1);
// enter.call(person2)

// --------------------- question 4

// let person1 ={ name: "jonny kumar"};
// let person2 = { name : " happy singh"};

// function enter(){
//     console.log(this.name);
// }
// enter.call(person1);
// enter.call(person2)

// -------------------------------question 7
function enter(n,a,u){
    this.name = a;
    this.price = a;
    this.img = u
}
var person1 = enter("elon","mush");
console.log("person1 : ", person1)