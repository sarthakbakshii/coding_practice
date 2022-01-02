// 1. get data (fetch , url );
// 2. append data ( data content , location/parent )

async function getData(url){
    try{
        let res = await fetch(url);
        let data = await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

function appendData( data , location){
    data.forEach(el => {
        let div = document.createElement("div");
        div.id = "data"
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.src = el.image;
        p.innerHTML = el.title;

        div.append(img,p)

        location.append(div)

    });
}

export  {getData , appendData}