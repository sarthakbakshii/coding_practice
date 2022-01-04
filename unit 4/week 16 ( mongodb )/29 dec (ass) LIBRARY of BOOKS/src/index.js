/*
Create a Library system which has following models

* Section ( 1 Book can belong to only one section 
    at a time but 1 section can have multiple books )
* Books ( Book can be written by 1 or more author and 
    also contains name, body )
* Author ( an author can write one or more books and 
    he also has first_name and last_name)
* CheckedOut (one book can be checked out by 1 user at a time)

Write CRUD for all these models and also write api 
endpoints that can help with below situations

* find books                                           
        http://localhost:2244/books

* find books that are checked out   
       http://localhost:2244/books?sold=true

* find all books written by an author  
       http://localhost:2244/books/ "first_name of auther"

* find books in a section
        http://localhost:2244/books?section=romance

* find books in a section that are not checked out
        
       http://localhost:2244/books?sold=false
       
* find books of 1 author inside a section    */
// ===============================================================
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ------------------------ C O N N E C T I O N
const connect = () => mongoose.connect("mongodb://127.0.0.1:27017/unit4_library_db");

// ------------------------ S C H E M A
const sectionSchema = new mongoose.Schema(
    {
        sectionName : {type : String , required : true},
    },
    {
        versionKey : false , 
        timestamps : true 
    }
);

const authorSchema = new mongoose.Schema(
    {
        first_name : { type : String , required : true},
        last_name  : { type : String , required : true}
    },
    {
        versionKey : false , 
        timestamps : true 
    }
);

const bookSchema = new mongoose.Schema(
    {
        book_name : { type : String , required : true},
        body  : { type : String , required : true},
        authors : [{
            type : mongoose.Schema.Types.ObjectId ,
            ref :  "author", required : true
        }],
        sold : { type : Boolean , default : false},
        section : { type : mongoose.Schema.Types.ObjectId ,
                    ref : "section" , required : true}
    },
    {
        versionKey : false , 
        timestamps : true 
    }
);

// -------------------- M O D E L
const Author  = mongoose.model("author",authorSchema);
const Book    = mongoose.model("book",bookSchema);
const Section = mongoose.model("section",sectionSchema) ;

// =================== C R U D ======================

// -------------------- S E C T I O N - C R U D 

app.post("/section", async (req, res) =>{
    try {
        const section = await Section.create(req.body);
        return res.send(section);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );

app.get("/section", async (req, res) =>{
    try {
        const section = await Section.find().lean().exec();
        return res.send(section);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );

// -------------------- A U T H O R - C R U D 

app.post("/authors", async (req, res) =>{
    try {
        const authors = await Author.create(req.body);
        return res.send(authors);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );

app.get("/authors", async (req, res) =>{
    try {
        const authors = await Author.find().lean().exec();
        return res.send(authors);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );
app.get("/authors/:uname", async (req, res) =>{
    try {
        const authors = await Author.find({ first_name : req.params.uname}).lean().exec();
        return res.send(authors);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );

// -------------------- B O O K - C R U D 

app.post("/books", async (req, res) =>{
    try {

        
        const books = await Book.create(req.body);
        return res.send(books);
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );


// ======================== R E A L - S O L U T I O N 


// find books that are checked out 
app.get("/books", async (req, res) =>{
    try {
        let sold = req.query.sold;
        let section_name = req.query.section;
        console.log(section_name)

        let searchCritaria = {};
        if(sold !== undefined){  //----- if sold is defined 

                if(sold == "true")   searchCritaria = { sold : true};
                else if(sold == "false")   searchCritaria = { sold : false};
            
                const books = await Book.find(searchCritaria)
                            .populate( { path : "authors" , select : {first_name : 1, last_name : 1 } })
                            .populate( { path : "section" , select : {sectionName : 1 } })
                            .lean().exec();
                return res.send(books);

        }    //----- if sold is defined 
        
        if( section_name !== undefined ){
            const books = await Section.aggregate([
                {
                    $lookup : {
                        from : "books",
                        localField : "_id",
                        foreignField : "section",
                        as : "books_list"
                    }
                },
                { $match : {sectionName : section_name }}
            ]);
            return res.send(books);
        }

        else{
            const books = await Book.find(searchCritaria)
                            .populate( { path : "authors" , select : {first_name : 1, last_name : 1 } })
                            .populate( { path : "section" , select : {sectionName : 1 } })
                            .lean().exec();
                return res.send(books);
        }
        
    } catch (e) {
        return res.status(500).json({ error : e.message})
    }
} );

// find all books written by an author 
app.get("/books/:name", async (req, res) => {
    try {
        console.log(req.params.name);

        const authors = await Author.find({ first_name : req.params.name }).lean().exec();
        const authID = authors[0]._id;

        const books = await Book.find({ "authors" :{$in :[ authID ]} })
                    .populate( { path : "authors" , select : {first_name : 1, last_name : 1 } })
                    .populate( { path : "section" , select : {sectionName : 1 } })
                    .lean().exec();

        return res.send(books);

    } catch (e) {
        return res.status(500).json({errpr : e.message})
    }
})

// find books in a section



// ================= L I S T I N I N G ====================
app.listen( 2244, async () =>{
    try {
        await connect();
        console.log("running on port 2244")
    } catch (e) {
        console.log(e.message)
    }
})