let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;


const searchData = async name => {
    let res = await fetch(searchUrl+name);
    let data = await res.json();
    // console.log(data.meals)
    return data.meals
}

export {searchData}