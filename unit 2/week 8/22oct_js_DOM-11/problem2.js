   // addEventListener('load', (event) => {
const heading1 = document.createElement("h1");
heading1.textContent = "The buttons color changes to a random value when it is clicked! But only two times!" ;

let count1 = 0;
const btn = document.createElement("input");
    btn.value = "Click here to change my color to random value";
    btn.type = "button";
    btn.style.height = "40px";
    btn.style.width = '400px';
    btn.addEventListener("click", (event) =>{
        count1++
                if(count1<3){
                    var x = Math.floor(Math.random() * 256);
                    var y = Math.floor(Math.random() * 256);
                    var z = Math.floor(Math.random() * 256);
                    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

                    // heading1.style.color = bgColor
                    btn.style.color = bgColor;
                }
                else{
                    btn.style.color = 'black';
                }
                
    });
    // count1++;
    // if(count1>2){
    //     btn.removeEventListener("click",(event));
    // }

    let count = -1;
    const btn2 = document.createElement("input");
        btn2.type = "button";
        btn2.value = "Click here to change my color to array value";
        btn2.style.height = "40px";
        btn2.style.width = "400px";
        btn2.style.marginLeft = "20px";
        btn2.addEventListener("click", (e) =>{
                count++
                const colorArr = ['red','green','blue','teal'];
                for( let i = 0 ; i<= colorArr.length ; i++){
                    if(count == i)
                     btn2.style.color = colorArr[i]

                     if(count > colorArr.length) count = -1
                }
                
        });

    const body = document.querySelector("body");
        body.append(heading1,btn,btn2);
