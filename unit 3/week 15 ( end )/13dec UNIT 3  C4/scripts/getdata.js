


let key = `eadfb9daa83a4cc7a3a3a495cec5abb0`

const getnews = async (loc) => {
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=eadfb9daa83a4cc7a3a3a495cec5abb0`

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.articles)
    showSidebar_Data(data.articles,loc)
}

const showSidebar_Data = (data,loc) => {
    data.map(async a => {
        let item = document.createElement("div");
        item.className = "item"
        item.innerHTML = `
        <h4>${a.title}</h4>
        <p class="p" >*** By author: " ${a.author} " </p>
        <p class="des"> # ${a.description} </p
        `;
        item.addEventListener("click", () =>{
                mailDisplay(a)
        })

        loc.append(item)
    })
}

const mailDisplay = news => {
    console.log(news)
    let displayBox = document.getElementById("displayBox")
    // displayBox.innerHTML = null;

    displayBox.innerHTML = `<h2>${news.title}</h2>
                            <div class="imgBox">
                                    <img src="${news.urlToImage}"
                                        alt="">
                                    <div class="imgContent">
                                        <p><span>Source: </span> ${news.source.name}</p>
                                        <p><span>Author: </span> ${news.author}</p>
                                        <p><span>Published At: </span> ${news.publishedAt}</p>
                                    </div>
                                    
                            </div>
                            <div class="des"> <h5>Description : </h5>
                                        ${news.description}
                                    </div>`;
}


export {getnews,showSidebar_Data,mailDisplay}