import { useRef, useState } from "react";
import "./Calnender.css"

export const Calander = () =>{
    const [text,setText] = useState("");
    const [data,setdata] = useState([]);
    const [selected , setselected] = useState([])
    const [options , setOptions] = useState({one : 0 , two : 0})
    const ref = useRef()
    console.log("data" ,data )

    const changeHandler = (e) =>{
        let text = e.target.value.split("-")
        let [year, month , day] = text.map(Number)
         console.log(year, month );


        //  -----------------
        let no_of_days = 0

        if(year % 4 !== 0 ){
            if( month == 2){
                no_of_days = 28
            }
            else if( [4,6,9,11].includes(month)){
                no_of_days = 30
            }
            else  no_of_days = 31
        }
        else{
            if( month == 2){
                no_of_days = 29
            }
            else if( [4,6,9,11].includes(month)){
                no_of_days = 30
            }
            else  no_of_days = 31
        }
        cal_converter(no_of_days)

        setText(e.target.value);

    }

    const cal_converter = (days) =>{
      console.log(days)
      let cal = []

      for(let i = 1 ; i <= days ; i++){
           cal.push( { day : i , selected : false , hover: false} )
        }
        
     ref.current = cal
      setdata(cal)
    }
    // =============== events
    const moveOver = (val , arr = ref.current) =>{
         console.log("current" , val , arr)
        arr.map( a =>{
            if( options.one > 0 ){
                    if (a.day >= options.one && val >= a.day ){
                          a.selected = true
                     }
                     else{
                         a.selected = false
                     }

            } 
        })
        console.log(arr)
        setdata([...arr])

         
    }

    const clickHandler = (val) =>{
        console.log(options , val)
          if(options.one == 0 && options.two == 0){
              options.one = val
          }
          else if(options.one !== 0 && options.two == 0){
              options.two = val
          }
          else{
              options.two = val
          }
         setOptions({...options})
         colorChange_onClick()

    }
    
    const colorChange_onClick = () =>{
        let possible = []
        if( options.one > 0 && options.two>0){
            for( let i = options.one ; i<= options.two ; i++) possible.push(i)
        }
        else if( options.one > 0 && options.two == 0){
            setselected([options.one]);
            return;
        }
        possible.sort()
        setselected([...possible])
    }
    console.log(selected)

    return <div>
        search month 
        <input type="date" onChange={changeHandler} name="" id="" />
        
        <div className="calender">
            {
                data.map( date =>{
                    return <div key={date.day} 
                            className={
                                selected.includes(date.day)
                                ?"hover day":( date.selected?"demo day":"day")
                            }
                            onMouseMove={() =>{moveOver(date.day)}}
                            onClick={() =>{ clickHandler(date.day)}}
                            >
                             {date.day} 
                            </div>
                })
            }
        
        </div>
    </div>
}