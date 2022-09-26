import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expend-lg">
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand text-white">
                <h4>React Movie App</h4>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar