import React from "react";
import img from "../img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

  <a className="navbar-brand js-scroll-trigger " href="#"><img className='img' 
   src={img} alt="img..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon ={faBars }style={{ color:'#fff'}} />
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link js-scroll-trigger " href="#" >
            Home <span className="sr-only"></span></a>
      </li>
     
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger " href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#">Contact</a>
      </li>
      </ul>
  </div>

  </div>
</nav>)
}

export default Navbar