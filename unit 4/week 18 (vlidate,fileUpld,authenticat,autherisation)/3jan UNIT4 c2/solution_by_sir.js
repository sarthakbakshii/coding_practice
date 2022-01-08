/*    QUESTION  */

// get api for all products 


// find all products which are higher than Rs.500 


// find all the products which are available in more 
// than 3 different colours 

({"$expr":{$gte:[{$size:"$color"},3]}

where colors_array.length:{$gt:3}

 const product = await Product.find({colors :{$size : {$gte : 2} }  })
                .lean().exec();
 
 const product = await Product.find({"colors.2" : {$exists : true }})
                .lean().exec();
        

// find all the products which have atleast 
// 1 colour that matches.   


// find the product which has the most colours.


// find the products which can be used by men and women.   


// find the total number of products on the site 
// ( for e.g :- If 1 product has 3 colours then it counts as 3 products )


// find the colour which has the most products.




