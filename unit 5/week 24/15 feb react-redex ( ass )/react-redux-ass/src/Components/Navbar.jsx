import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    
    return (
        <div className="navbar">
            <div className="logo"> React redux Assigiment </div>
            <div className="list">
                <div > <Link to={"/"} className="li"> Home </Link>  </div>
                <div > <Link to={"/todo"} className="li" > Todos</Link>  </div>
            </div>
        </div>   
    )
}