/*note all code is on documentaion / webpack / asset management
step 1) instalation

npm install --save-dev webpac
npm install --save-dev webpack-cli

step 2) setting up webpack.config.js
step 3) installing css loader 
npm install --save-dev style-loader css-loader

*/

import "./style.css";
import Icon from './images.jpg'

const header = document.getElementById("header");
header.className = "header";
header.innerHTML = ` <img src=${Icon} alt="">
        <h1>Notes App</h1>
`

const root = document.getElementById("root");
root.className = "root"
root.innerHTML = `  <button class="btn" id="btn">Save</button>
        <textarea id="notes" name="notes" id="notes" cols="100" rows="10"></textarea>
`

const btn = document.getElementById("btn")
const notes = document.getElementById("notes")

let status = true
btn.addEventListener("click", () => {
    if(status){
        status = !status;
        notes.disabled = true;
        btn.innerHTML = "Edit"
    } 
    else{
        status = !status;
        notes.disabled = false;
        btn.innerHTML = "Save"
    } 
})

