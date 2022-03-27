// async function getUsernames(threshold) {
//   try {
//     const data = await fetch(
//       "https://jsonmock.hackerrank.com/api/article_users?page=1"
//     );
//     const json = await data.json();
//     console.log(json);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getUsernames(1);

const fetch = require("cross-fetch");

const getUsernames = (threshold) =>{
    fetch(`https://jsonmock.hackerrank.com/api/article_users?page=1`)
    .then( res => res.json())
    .then( data =>{
        console.log(data)
    })
}
getUsernames(1)