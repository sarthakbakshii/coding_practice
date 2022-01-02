const body = document.querySelector("body");

// creating btn -------------- start
const btn = document.createElement("input");
btn.type = "button";
btn.setAttribute('class','btn');
btn.setAttribute('id','btn')
btn.value = 'click me to create page';
btn.addEventListener('click', (e) =>{

    
    // creating container ------------ start
    const container = document.createElement("div")
          container.setAttribute('class','container')
    // creating container ------------ end

    body.append(container)    // adding container


    // .container > child ---- start
        const top = document.createElement("div");
        const mid = document.createElement("div");
        const bottom = document.createElement("div");

        top.setAttribute("class","top");
        mid.setAttribute("class","mid");
        bottom.setAttribute("class","bottom");
    
        document.querySelector(".container").append(top,mid,bottom) 
    // .container > child ---- end

    // output : .container > { .top , .mid , .bottom }



    //  .container .top > child ---------------- start
            const top_img = document.createElement("img");
            const top_h1 = document.createElement("h1");
            const top_h3 = document.createElement("h3");

            top_img.setAttribute("class","img");
            top_img.src = 'https://via.placeholder.com/150';
            top_h1.textContent = 'LInus Torvalds';
            top_h3.textContent = 'The creator of Linux & Git';

            document.querySelector(".top").append(top_img,top_h1,top_h3);
    //  .container .top > child ---------------- end

    // output : .container .top > { .top_h1 , .top_h3 , .top_img}
           


    //  .container .mid > child ---------------- start
            let img = document.createElement('img');
            let imgContent = document.createElement('div');

            img.setAttribute("class","img");
            img.src = 'https://via.placeholder.com/150';
            imgContent.setAttribute('class','imgcontent');

            document.querySelector(".mid").append(img,imgContent);
            
            //.container .mid .imgContent > child --------- start
                    let imgContent_h1 = document.createElement('h1');
                    let imgContent_p = document.createElement('p');

                    imgContent_h1.textContent = 'Sal Khan';
                    imgContent_p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.exercitationem odio ipsum placeat, nemo eligendi optio!';

                    document.querySelector(".mid > .imgcontent").append(imgContent_h1,imgContent_p)
            //.container .mid .imgContent > child --------- end

            //output :  .container .mid .imgContent > { .imgContent_h1 , .imgContent_p }

    //  .container .mid > child ---------------- end

    //  .container .bottom > child ---------------- start
            const left = document.createElement('div');
            const line = document.createElement('div');
            const right = document.createElement('div');

            left.setAttribute('class','left');
            line.setAttribute('class','line');
            right.setAttribute('class','right');

            document.querySelector(".bottom").append(left,line,right)

                    
             //  .container .bottom .left > child ---------------- start
                    const bl_h2 =  document.createElement('h2');
                    const bl_p =  document.createElement('p');

                    bl_h2.textContent = "Ken Thompson";
                    bl_p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque exercitationem'

                    document.querySelector(".bottom > .left").append(bl_h2,bl_p)
             //  .container .bottom .left > child ---------------- end

            //  .container .bottom .right > child ---------------- start
                    const br_h2 =  document.createElement('h2');
                    const br_p =  document.createElement('p');
                    br_h2.textContent = "Ken Thompson";
                    br_p.textContent = 'Lorem ipsum dolor sit amet consectetur '

                    document.querySelector(".bottom > .right").append(br_h2,br_p)
            //  .container .bottom .right > child ---------------- end

    //  .container .bottom > child ---------------- end




    e.target.remove()
});

body.append(btn)

// creating btn -------------- end