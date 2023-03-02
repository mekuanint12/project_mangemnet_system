import React from 'react';
import { Link } from "react-router-dom";
import Temple from "../assets/tasks.svg";


const Navbar = () => {
  return (
                <div className="nav_bar">
                <div className="logo"> <Link to="/">
                    <div className="logo-flex">
                    <img style={{width: "25px"}} src={Temple} alt="logo" />
                    <span style={{"margin": "0 0  -10px 10px"}}>Project Management System</span>
                    </div>
                </Link>
                </div>
                
                <div className="auth-div">                      
                    <Link className="btn" to="/login">Login</Link>  
                    <Link className="btn" to="/signup">Sign Up</Link>                      
                </div>                  
            </div>
  )
}

export default Navbar