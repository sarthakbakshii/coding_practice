
let Myname = "My name i ssarthak";

function prName() {
    console.log(Myname)
}

//------------- way 1
// module.exports = prName;

//---------------- way 2
module.exports = {prName};


// -======================================
// passing multiple function

module.exports.One = () => {
    console.log("hello one")
}

module.exports.Two = () => {
    console.log("hello two")
}

// --------------------------------------------- way 2
// module.exports = () {
//     --------------------
// }


// ------------------------------------------ way 3 of obj
// module.exports = {one,two}