For this assignment you need to create a database called assignment
 and collection called users that has following fields :-

first_name
last_name
email
gender
ip_address
age

> db.users.insert(
    { first_name: "samart bakshi",
      lastname : "bakshi" , 
      email : "a@gmail.com" ,
       genger : "man" , 
       ip_add : "192,244.244.244" , 
       age : 69
     }
)

Insert 10 documents in this users collection using both insert and insertMany

> db.users.insertMany([
    {
        first_name: "samart bakshi",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 54 
    },
    {
        first_name: "asda ",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 23  
    },
    {
        first_name: "adas bakshi",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 64  
    },
    {
        first_name: "samasasdrt ads",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 34 
    },
    {
        first_name: "fgsd ss",
        lastname : "d" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 24  
    },
    {
        first_name: "sdf fhth",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 34 
    },
    {
        first_name: "hh ew",
        lastname : "bakshi" , 
        email : "a@gmail.com" ,
        genger : "man" , 
        ip_add : "192,244.244.244" , 
        age : 67 
    }
])

Select all the documents in the users collection using find and also a single document using findOne

> db.users.find({lastname : "bakshi" ,genger : "man"}).pretty()
> db.users.findOne({genger : "man"})

Update at least 3 documents using update and updateMany

> db.users.update({lastname : "bakshi" , genger : "man"},
{$set : {
    age : 21 ,
    ip_add : "no_ip"
}})

> db.users.updateMany({lastname : "bakshi" , genger : "man"},
{$set : {
    age : 21 ,
    ip_add : "no_ip"
}})

Delete documents using remove, remove that will remove just 1 document, deleteOne, deleteMany
> db.users.remove({
        "_id" : ObjectId("61cc933ac5dd86ff3bf14b8a"),
        "first_name" : "hh ew",
        "lastname" : "bakshi",
        "email" : "a@gmail.com",
        "genger" : "man",
        "ip_add" : "no_ip",
        "age" : 21
},1)

Then delete the database

> show collections
users
> db.users.drop()
true
> show collections
>