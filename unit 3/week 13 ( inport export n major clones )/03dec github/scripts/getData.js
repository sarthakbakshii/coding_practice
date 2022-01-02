// get details of any perticular user

// 1.  username ( argument )
// 2. api call to github

async function getData(user){
    try{
        let url = `https://api.github.com/users/${user}`;
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(`error : ${err}`)
    }
}

export default getData;