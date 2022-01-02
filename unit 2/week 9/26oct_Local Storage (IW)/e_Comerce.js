//  readMe ---------------------------------------------------------------------------
/*

    part 1 :  MAKING DOM
    part 2 :  APPLING JS FUNCTIONALITIES 
                                    a) data arr => json => local storage
                                    b) display function 

*/
//  readMe ---------------------------------------------------------------------------

// =================================================  making dom ======================================================= 

var body = document.querySelector("body");

var container = document.createElement("div");
    container.setAttribute("class","container");
body.append(container)

displayData();

// ============================================ storage case =======================================================


var data =  [
    {
      MRP: 699,
      type: "Striped Round Neck T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
    },
    {
      MRP: 699,

      type: "Striped Round Neck T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
    },
    {
      MRP: 699,

      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
    },
    {
      MRP: 699,
      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
    },
    {
      MRP: 699,

      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
    },
    {
      MRP: 699,
      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
    },
    {
      MRP: 699,

      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
    },
    {
      MRP: 699,
      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
    },
    {
      MRP: 699,

      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
    },
    {
      MRP: 699,
      type: "Men Printed Cotton T-shirt",
      image_url:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
    },
  ];
localStorage.setItem("eCom_locallyStored",JSON.stringify(data))
  

// ============================================dispaly dom =======================================================

function displayData(){

    var dataObj = JSON.parse(localStorage.getItem("eCom_locallyStored"));
    // console.log(dataObj)
    dataObj.map( item => {
      
        let card = document.createElement("div");
            card.setAttribute("class","card");
        container.append(card)

        let img = document.createElement("img");
            img.setAttribute("class","img");
            img.setAttribute("src",item.image_url);

        let imgContent = document.createElement("div");
            imgContent.setAttribute("class","card");

          card.append(img)

    })
}


