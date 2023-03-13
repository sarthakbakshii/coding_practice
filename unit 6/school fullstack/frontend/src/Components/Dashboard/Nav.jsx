import "./Nav.css"
import { AiFillFire } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFontAwesomeFlag ,
FaPagelines ,
FaCodepen} from "react-icons/fa";
import { MdDashboard ,MdGrid4X4} from "react-icons/md";

export const Nav = () =>{
    const [activeClass , setActiveClass ] = useState("OverView")

    const navigate = new useNavigate()

    const changeHandler = (e) =>{
        const innerText = e.target.innerText
        
        if( innerText == "OverView"){
            setActiveClass(innerText)
             navigate("/dashboard") 
        }
        else if( innerText == "Add Teacher"){
            setActiveClass(innerText)
            navigate("/dashboard/add-teacher") 
        }
        else if( innerText == "Add class information"){
            setActiveClass(innerText) 
            navigate("/dashboard/add-class") 
        }
    }
    return <div className="Navbar">
                        <div className="logo"> <FaCodepen/> LOGO </div>

                        <div className="liList">

                                <div className={ activeClass == "OverView" ? "li active":"li"}
                                onClick={changeHandler}>
                                   <FaFontAwesomeFlag/> OverView
                                </div>
                                <div className={ activeClass == "Add Teacher" ? "li active":"li"}
                                onClick={changeHandler}>
                                  <MdDashboard/>  Add Teacher
                                </div>
                                <div className={ activeClass == "Add class information" ? "li active":"li"}
                                onClick={changeHandler}>
                                   <MdGrid4X4/> Add class information
                                </div>

                        </div>
    
    </div>
}