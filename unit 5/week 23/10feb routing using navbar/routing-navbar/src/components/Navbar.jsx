import { Link } from "react-router-dom"

export const Navbar = () =>{
    // return ( <div style={{dispaly: "flex"}}>
    //             <a href="/">Home</a>
    //             <a href="/about">About</a>
    //             <a href="/contact">Contact</a>
    //         </div>)

      return ( <div style={{display: "flex", gap : "50px", justifyContent : "center"}}>
                       <div>
                             <Link to={"/"}>Home</Link>
                       </div>
                       <div>
                             <Link to={"/about"} >About</Link>
                       </div> 
                       <div>
                             <Link to={"/contact"} >Contact</Link>
                       </div>
                       <div>
                             <Link to={"/user"} >User List</Link>
                       </div>
                    
                    
                   
                </div>)
}