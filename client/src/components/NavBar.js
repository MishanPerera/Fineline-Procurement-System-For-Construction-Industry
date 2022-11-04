import React from  "react";
import '../NavBar.css';
import {Link} from 'react-router-dom';
import logo from "../assets/logo.png";

function Navbar() {
    return(
     <>
    
        <ul class="nav flex-column"  className="sticky-top"><b>

        <li>
          <h2>fineline</h2>
        </li>
        
        <li className="nav-item">
        <img src={logo} width="250" height="200"/>
        </li>
      
                    <li className="nav-item">
                    <Link to="/order" className="nav-link active" aria-current="page"  >Purchase Order</Link>
                    </li>
            
                    <li className="nav-item">
                      <Link to = "/" className="nav-link" > Purchase History</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/" className="nav-link" > View Invoice</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/" className="nav-link" > Create Credit Note</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/" className="nav-link" > Procedure and Policy</Link>
                    </li>
                    
            
            <li>
                <h4 className="text-white">Copyright 2022 @ DevX </h4>
                <h4 className="text-white"> All Rights Reserved</h4>
            </li>
            </b>
        </ul>
     </>
  )
}

export default Navbar;