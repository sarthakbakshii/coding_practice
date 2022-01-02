// --------- github api
https://api.github.com/
// here you will find everything


// -------------------------- movie api
let key = "6063465";

let url = `http://www.omdbapi.com/?s=${input}&apikey=${key}`;

// --------------------------- weather api

let weatherApikey = "c6a83800817e0c5062c06ac43c5d3d96";

let url = `https://api.openweathermap.org/data/2.5/weather?
q=${city}&
appid=${weatherApikey}`;

let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&
lon=${lon}&
exclude=daily&
appid=${weatherApikey}`

// --------------------------- geolocation api
let mapApiKey = "AIzaSyDNNxEHbpPSDkk5jpUbQXuGKXRRlLleHYM";

<iframe class="iframe_active" width="450" height="250" 
frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?
key=${mapApiKey}&
q=${cityname}" allowfullscreen>
</iframe>

// --------------------------- youtube api link
https://developers.google.com/youtube/v3/docs/videos/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22id%22%3A%5B%22i7jaNVgPMRU%22%5D%7D
//  here you will find api documentation

let youtubeAPIkey = `AIzaSyB8ISqc9mU6E71OulGswURd51y2qjmWJHs`;

let youtubeAPIkey =`AIzaSyDmyZh9TG9EVhe-b2hCWEHBaLima29uf0M`; //my


let url = `https://youtube.googleapis.com/youtube/v3/search?key=${youtubeAPIkey}`;

let url = `https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${youtubeAPIkey}`;

let url = `https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${youtubeAPIkey}&type=video`;

