import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    // const currentUser = {displayName:"Onarman"}
    const currentUser = false
  return (
    <nav className="navbar navbar-expend-lg">
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand text-light">
                <h4>React Movie App</h4>
            </Link>

            <div className="d-flex text-light align-item-center">
                
            {currentUser ? (
                <>
                <h5 className='mb-0 text-capitalize'>{currentUser.displayName}</h5>
            <button className='ms-2 btn btn-outline-light'>Logout</button>
                </>
            
            ): (
                <>
                <button className='ms-2 btn btn-outline-light' onClick={()=> navigate("/login")}>Login</button>
                <button className='ms-2 btn btn-outline-light' onClick={()=> navigate("/register")}>Register</button>
                </>
            )} 
            </div>
        </div>
    </nav>
  )
}

export default Navbar