/*
Methods :

1) Room class constructor : takes global storage as args
2) all_room   : returns list of all rooms
3) open_lots  : return list of rooms open for booking
4) booked_lots : return list of booked rooms 

5) set_info : takes agrs as { name , adhar , age };
6) myInfo   : returns user info || if info is not available it gives error : " enter your details first "
7) book_room : take location of room ( id of room ) as agrs and check :{

    if user not available              : trow error,
    if location is already booked      : throw error,
    if location is empty and available : book for that user

}
8) checkOut : for deleting enrty 


 

*/

var rooms = new Array( 10 ).fill(-1).map( (a,i) => a = {id : i , available : true })

class Room {
    static rooms;
    constructor( rooms ){
            this.rooms = rooms 
          
    }

    get all_room(){
        return this.rooms
    }
    get open_lots(){
        return this.rooms.filter( a => {
            return a.available == true;
        })
    }
    get booked_lots(){
        return this.rooms.filter( a => {
            return a.available !== true;
        })
    }

    
}

class Booking extends Room{
   

    constructor(){
        super(rooms)
    }
    set_info(name , adhar , age ){
            this.name = name;
            this.adhar = adhar;
            this.age = age;
    }
    get myInfo(){
        if( !this.name){
           
            return  "enter your details first";
        }

        return { Name : this.name , Adhar : this.adhar , Age : this.age}
    }
    book_room(loc){

        this.booked = true;

        if( !this.name){
            console.log("enter your details first, then we can books");
            return;
        }

        rooms.forEach( a =>{

            if( a.id == loc && a.available == true){
                a.available = false
                a.user = {
                    name : this.name,
                    adhar : this.adhar,
                    age : this.age
                }
            }
            else if( a.id == loc && a.available !== true ){
                this.booked = false;
                this.break;
            }
           
        });
         console.log( this.booked ? "Your order has been confirmed":"order can't be booked")
    }

    get checkOut(){
        if( !this.name){
           
            return  "enter your details first";
        }

        this.rooms.forEach( a =>{
            if(a.user !== undefined && a.user.adhar == this.adhar){
                    a.available = true;
                    delete a.user;
                
            }
        })

        return "bye bye user"

    }



}



const admin_start = new Room(rooms );

let customer_1 = new Booking();
customer_1.set_info("sarthak", "fw13_325" , 21);
// console.log( customer_1.myInfo )
customer_1.book_room(3)
// console.log( customer_1.all_room )


let customer_2 = new Booking();
customer_2.set_info("rohit", "fw13_011" , 21);
// console.log( customer_2.myInfo )
customer_2.book_room(7)
console.log( customer_2.checkOut )

// console.log( customer_2.all_room )


// console.log( "open to booked lots : ",  customer_2.open_lots   )
// console.log( "booked lotes ",  customer_2.booked_lots )


console.log("===================  global  ===================")
console.log( rooms )

