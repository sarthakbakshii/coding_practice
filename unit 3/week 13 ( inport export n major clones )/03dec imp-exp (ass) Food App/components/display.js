
const displaybox_big = (data) =>{
    return`<img class="img" src="${data.strMealThumb}">
        <div class="dtl">
            <h1>${data.strMeal}</h1>
            <h3>Catagory: ${data.strCategory} </h3>
            <p>${data.strInstructions}</p>
        </div>`;
}
const empty_search_box = () => {
    document.getElementById("nameInput").value = null;
    document.getElementById("debounceBox").innerHTML = null;
}


export {displaybox_big,empty_search_box}