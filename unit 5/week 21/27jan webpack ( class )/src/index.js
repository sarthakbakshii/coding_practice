import "./index.css"

const h1 = document.createElement("h1");
h1.className = "red";
h1.innerHTML = "dry run 1";

const root = document.getElementById("root");
root.append(h1)