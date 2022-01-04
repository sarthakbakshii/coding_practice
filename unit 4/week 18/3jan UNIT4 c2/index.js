const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use( express.json()); //-- converting data to BSON
//  on creation of POST data, () may be or not )

/*    QUESTION 

get api for all products   ( DONE )
find all products which are higher than Rs.500     ( DONE )
find all the products which are available in more than 3 different colours (DONE)
find all the products which have atleast 1 colour that matches.   ( done )
find the product which has the most colours.
find the products which can be used by men and women.   ( done )
find the total number of products on the site ( for e.g :- If 1 product has 3 colours then it counts as 3 products )
find the colour which has the most products.




*/
// --------------------- connection
const conect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/unit4_c2_db");
}

// --------------------- schema
const productSchema = new mongoose.Schema({
    p_name : {type : String , required : true},
    gender : {type : String , required : true},
    price : { type : Number , required : true },
    colors : [
        {type : mongoose.Schema.Types.ObjectId ,
          ref : "color",
        required : true}
    ]
});
const colorSchema = new mongoose.Schema({
    c_name : {type : String, required: true},
    p_ids : [
        {type : mongoose.Schema.Types.ObjectId ,
          ref : "product",
        required : true}
    ]
});

// ---------------------model
const Product = mongoose.model("product", productSchema);
const Color = mongoose.model("color", colorSchema);


// ============================================ CRUD 
// --------------------- crud for product


// ---  get all products
app.get("/product", async (req,res) => {
    try {
        const product = await Product.find().lean().exec();
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// --- create product 
app.post("/product", async (req,res) => {
    try {
        const product = await Product.create(req.body);
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// --- product higher than 500
app.get("/product/priceGt500", async (req,res) => {
    try {
        const product = await Product.find({price : {$gt : 500} }).lean().exec();
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// ---------- product color size 3 or more;

app.get("/product/colorGt3", async (req,res) => {
    try {
        //  const product = await Product.find({colors :{$size : {$gte : 2} }  }).lean().exec();
        const product = await Product.find({"colors.2" : {$exists : true }}).lean().exec();
        
        
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// ---------- product color atleast;

app.get("/product/colorLTE1", async (req,res) => {
    try {
         const product = await Product.find({colors :{$size : 1 }  }).lean().exec();
        // const product = await Product.find({"colors.2" : {$exists : true }}).lean().exec();
        
        
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// --- product gender : both
app.get("/product/genderBoth", async (req,res) => {
    try {
        const product = await Product.find({gender : "both" }).lean().exec();
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// --- product with max length
app.get("/product/maxColorLength", async (req,res) => {
    try {
        const product = await Product.aggregate([
            {$unwind : "$colors"},
            {$group : {_id : "$_id", length : {$sum : 1}}},
            { $sort : { length : -1 }},
            { $limit : 1}
        ])
        return res.send(product);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// ---- total number of product 
app.get("/product/totalNUmOfProducts", async (req,res) => {
    try {
        const product = await Product.find();

        let sum = 0
        for( let i = 0 ; i < product.length ; i++){
                sum += product[i].colors.length
        }
        console.log(sum)
        return res.json({"total product " : sum})
        
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

// ----------- max color 
app.get("/product/maxClrPRoduct", async (req,res) => {
    try {
        const product = await Product.find()
                        .populate({
                            path: "colors",
                            select : {
                                c_name : 1
                            }
                        });

        const colorArray = [];
        const colorObj = {};

        function findColorFromOneArr( arr ){
            for( let i = 0 ; i < arr.length ; i ++){
                console.log(arr[i].c_name)
                colorArray.push( arr[i].c_name )
            }
        }
        for(let i = 0 ; i < product.length ; i ++ ){
            // console.log(product[i].colors)
            findColorFromOneArr(product[i].colors)
        }
        

        console.log(colorArray)

        // ----------------------------------- find max count from array
        for( let i = 0 ; i < colorArray.length ; i ++ ){
            if(colorObj[colorArray[i]] == undefined ) colorObj[colorArray[i]] = 1;
            else colorObj[colorArray[i]]++ 
        }

        console.log(colorObj)

        let maxVal = 0
        for( key in colorObj){
            if( maxVal < colorObj[key]) maxVal = colorObj[key]
        }
        console.log( " max val : ", maxVal)

        for( key in colorObj){
            if( maxVal == colorObj[key]) maxVal = key
        }
        console.log( " max val : ", maxVal)
        
        return res.json({ max_color : maxVal })
        
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});


// --------------------- crud fo color
app.get("/color", async (req,res) => {
    try {
        const color = await Color.find().lean().exec();
        return res.send(color);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});

app.post("/color", async (req,res) => {
    try {
        const color = await Color.create(req.body);
        return res.send(color);
    } catch (e) {
        return res.status(500).json({error : e.message})
    }
});



// -------------------- listening
app.listen( 2345 , async () => {
    try {
        await conect();
        console.log("running on port 2345")
    } catch (error) {
        console.log( error.message )
    }
    
})

