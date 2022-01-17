create a mock movies table in sequel and mongodb which has 
500 documents which has following columns/fields
-----------------------------------------------------------
id
movie_name
movie_genre
production_year ( between 1990 to 2020)
budget ( 9000 to 20000)
------------------------------------------------------------
I want queries for the following in both mysql and mongo all queries should only return movie_name and production_year

## find all movies which are equal to movie_name

> db.movies.find( {movie_name : {$eq : "SENNOSIDES"}})
> select * from movies where movie_name = "SENNOSIDES";

## find all movies which are not equal to movie_name

> db.movies.find( {movie_name : {$ne : "SENNOSIDES"}})
> select * from movies where movie_name != "SENNOSIDES";

## find all movies greater than and greater than equal to a budget

> db.movies.find( { budget : {$lte : 19720}})
> select * from movies where budget <= 19720;

>db.movies.find( { budget : {$lte : 19720}}).count()
> select count(*) from movies where budget <= 19720;

## find all movies less than and less than equal to a budget

> db.movies.find ( {
    $and :[  
             {  budget : { $lt : 19720 } } ,
             {  budget : {$lte : 19720}  } 
          ]
})
> select * from movies where budget < and budget <= 19720

## find all movies that are produced after 2000 with budget greater than 10000

> db.movies.find ( {
    $and : [
        {production_year : {$gt : 2000 } },
        {budget : {$gt : 10000}}
    ]
})
> select * from movies where production_year > 2000 and budget > 10000

## find all movies that are produced after 2000 or budget greater than 10000
## find all movies that are neither produced after 2000 nor with budget greater than 10000.
## find all movies that are not produced in 2000 or they do not have budget of 10000

## find all movies that were produced from 2000 to 2010.

> db.movies.find ( { production_year : {$gt : 2000 , $lt : 2010}})
> select * from movies where production_year between 2000 and 2010

## Sort all movies descending based on the production year 
   and if the year is same then alphabetically for their movie_names

> db.movies.find ({},{ production_year : 1, movie_name : 1 , _id : 0})
.sort({production_year : -1, movie_name : 1})

## in query 10 skip the first 10 entries and fetch the next 5

db.movies.find().limit(10).map((doc)=>{db.movies.update({_id: doc._id},{$unset:{movie_genre:1}})})

## remove movie genre from the first 10 movies in query 10.
