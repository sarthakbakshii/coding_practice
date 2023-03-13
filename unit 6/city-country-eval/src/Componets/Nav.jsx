import "./Nav.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = ()=>{
    return <div className="nav">
                  <div className="left">
                       <FaCanadianMapleLeaf/> logo
                  </div>
                  <div className="right">
                        <Link className="Link" to="/">Home</Link>
                        <Link className="Link" to="/add-city">Add city</Link>
                        <Link className="Link" to="/add-country">Add country</Link>
                  </div>
           </div>
}