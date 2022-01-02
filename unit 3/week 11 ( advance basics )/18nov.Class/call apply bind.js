

// const kitchen = {
//     name: "kitchen",
//     purpose : "cook",
//     order : "thali",
//     cookFood(){
//         console.log("serving " + this.order)
//     }
// }

// const livingRoom = {
//     name: "living Room",
//     purpose : "rest",
//     order : "Maggie",
    
// }
// kitchen.cookFood()
// kitchen.cookFood.call(livingRoom)

// ------------------------------
function person(n,a){
    this.name = n;
    this.age = a;
}

function teacher(s,n,a){

    person.call(this,n,a);
    this.subject = s

}
let t1 = new teacher("pysics","padlo panday",21)
console.log(t1)


// ------------------- apply
function student(n,a){

    person.apply(this,[n,a])
    this.class = "10th"
}
let s1 = new student("pablo jr",[21]);
console.log(s1)


// -------------------- bind
function player(s,n,a){
    let x = person.bind(this,n,a)
        this.sport = s;
        x() 
}
let pl1 = new player("football","christiano pablo",37)
console.log(pl1)