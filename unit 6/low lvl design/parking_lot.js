/*
Design a Parking Lot System
 
A parking lot is an area where cars can be parked for a certain amount of time.
A parking lot can have multiple floors with each floor having a different number 
of slots and each slot being suitable for different types of vehicles.
 
Write code making LLD decisions.

*/

const lots  = new Array(10).fill(-1).map( (a,i) => a = {id : i , available : true })

class Lots{

    constructor(lots){
        this.lots = lots
    }
    
    get allLots(){
         console.log("  to book lot : booklot")
         console.log("  to see your lot : myCAr")
          return this.lots
       
    }

   booklot(loc){
            
           this.exp_time = this.expDurationFinder()
           this.booked = true
           this.loc    = loc

            this.lots.forEach( a => {
                    
                    if(a.id == this.loc && a.available == true){
                                    a.available = "to you only" ; 
                                    a.car_no = this.carNo;
                                    a.parking_time = this.reg_time;
                                    a.exp_time = this.exp_time ;
                    }
                   else if( a.id == loc && a.available !== true){
                         this.booked = false;
                         this.break;
                    }
            });
             
             return this.booked ? " slot booked , check by typing : allLots " :"slot not availble , check for diffrent slot "
            

    }
     
}

class Parking extends Lots{
    
    // scope

     cHr                    = new Date().getHours();
     cMin                   = new Date().getMinutes()
     ctime                  = this.cHr + ":" + this.cMin;
     expiry_duration        =  5
     loc                    =  "na"
  
    constructor(){
           super(lots);

        //  super();
        //  this.lots = lots
    }

     setCarInfo(carNo){
            this.carNo = carNo;
            this.reg_time = this.ctime;

            console.log("welcome user :) ")
            console.log("to check slots type : allLots")
     }

    expDurationFinder(){
            this.exp_min = this.cMin + this.expiry_duration;

            if(this.exp_min - 60 > 0){
                this.exp_min = this.exp_min - 60;
                this.cHr     = this.cHr + 1;
            }

            this.exp_Time_D    =  this.cHr + ":" + this.exp_min;

            return this.exp_Time_D 
    }

    expiry_now(){

        this.newArr = []
        lots.forEach( a => {
                    
                    if(a.id == this.loc){
                        a = JSON.parse( JSON.stringify( { id : a.id, available : true} ) )                           
                    }
                    this.newArr.push(a)
            });
            lots = this.newArr  
    }

   get myCAr(){
        console.log("your car info :) ")
        return { car : this.carNo , time : this.reg_time}
    }

}


const start = new Lots(lots)

let c1 = new Parking()
c1.setCarInfo(21)
console.log("---------------------------------------")
console.log( c1.allLots )
console.log("---------------------------------------")
console.log( c1.myCAr )
console.log("---------------------------------------")
console.log( c1.booklot(5) );
console.log("---------------------------------------")
console.log( c1.allLots )

let c2 = new Parking()
c2.setCarInfo(22)
console.log( c2.booklot(3) );
console.log("---------------------------------------")
console.log( c2.allLots )
// c1.expiry_now()

console.log()
console.log("|======================================|")
console.log("|============| global data |===========|")
console.log("|======================================|")
console.log()

console.log( lots )
