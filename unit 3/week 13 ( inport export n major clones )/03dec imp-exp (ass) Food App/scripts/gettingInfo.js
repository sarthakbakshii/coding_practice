//======================================================== ALL URLS 
    let baseUrl = `https://www.themealdb.com/api/json/v1/1/`
    let url_allCategories = `categories.php`  //  List all meal categories
    let url_filterByCat = `filter.php?c=`;
    let url_searchName = `search.php?s=`;
//======================================================== ALL URLS
const searchFood = async (name) =>{
    try{
        let res = await fetch(baseUrl + url_searchName + name);
        let data = await res.json();
        // console.log(data)
        return data;
        
    }
    catch(err){
        console.log(err)
    }
}

export {searchFood}


/* of no use
 // ---- step1 || fetching all catagory
    const getCatagory = async () => {
        try{
            let res = await fetch(baseUrl+url_allCategories);
            let data = await res.json();
            // console.log(data.categories);
            // return allCatagories(data.categories)
            return data.categories
        }
        catch(err){
            console.log("error in getCatagory() :- ",arr)
        }
    }

// step 3 || filter food by specific catagory
    const getFood = async (cat) =>{
        try{
            let res = await fetch(baseUrl+url_filterByCat+`${cat}`)
            let data = await res.json()
            // console.log(data.meals);
            return data.meals;
            
            
        }
        catch( err ){
            console.log("error in getFood() := ", err)
        }
    }
*/
// search food by name 
