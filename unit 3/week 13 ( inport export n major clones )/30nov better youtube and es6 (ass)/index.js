
let youtubeAPIkey = `AIzaSyB8ISqc9mU6E71OulGswURd51y2qjmWJHs`;
    youtubeAPIkey =`AIzaSyDmyZh9TG9EVhe-b2hCWEHBaLima29uf0M`;    // my
window.addEventListener("load",() =>{
    getPopularVedio();
})
async function getPopularVedio(){
        try{
            let url =  `https://www.googleapis.com/youtube/v3/videos?key=${youtubeAPIkey}&part=snippet&chart=mostPopular&regionCode=IN&maxResults=50`;

            let res = await fetch(url);
            let data = await res.json();
            // console.log(data.items);
            displayPopularVedio(data.items)

        }
        catch(err){
           console.log(" get popular vedio section",err);
        }
}


async function getChannelIcon(vdo){
    try{
        let chID = vdo.snippet.channelId;
        let url = `https://www.googleapis.com/youtube/v3/channels?key=${youtubeAPIkey}&id=${chID}&part=snippet`;
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.items[0].snippet.thumbnails.default.url)
        return data.items[0].snippet.thumbnails.default.url;

    }
    catch(err){
        console.log(" get channel icon section",err);
    }
} 

 function displayPopularVedio(vdoData){
    // console.log(vdoData);
    const displayBox= document.getElementById("displayBox");

     vdoData.forEach(async vdo => {
         channelIcon = await getChannelIcon(vdo);
         thumbnail = vdo.snippet.thumbnails.high.url;
         title = vdo.snippet.title;
         chanelTitle = vdo.snippet.channelTitle

         console.log(vdo)
         console.log("channelIcon:",channelIcon);
         console.log("thumbnail:",thumbnail)
         console.log("title:",title)
         console.log("chanelTitle:",chanelTitle)

         let card = document.createElement("div")
         card.className = "card";
         card.innerHTML=
         `
         <img src="${thumbnail}" width="100%" height="180px" style="object-fit: cover;">
         <div class="imgContent">
            <div class="left">
                <img src="${channelIcon}" class="chIcon">
            </div>
            <div class="right">
                <h5>${title}</h5>
                <span>${chanelTitle}</span>
            </div>
         </div>
         `;

         displayBox.append(card)

     });
}