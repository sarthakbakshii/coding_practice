import "./index.css"
import React from 'react';
import ReactDom from 'react-dom';

// ======== without bable
// ReactDom.render(
//     React.createElement( "h1",{ id: "h1", className: "red"}, "dry run react" ),
//     document.getElementById("root")

// )

// ======== with bable
ReactDom.render(
    <h1 className="red">dry run 1
      <div>div in check</div>
      <h3>h3 check</h3>
    </h1>,
    document.getElementById("root")

)


// const h1 = document.createElement("h1");
// h1.className = "red";
// h1.innerHTML = "dry run 1";

// const root = document.getElementById("root");
root.append(h1)

/*
for working with bable in webpack :

            npm install @babel/core babel-loader --save-dev

add in webpack.config:

rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]

then :
     npm install @babel/preset-env @babel/preset-react --save-dev

     rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]

*/