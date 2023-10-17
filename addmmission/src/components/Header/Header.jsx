import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <>
     
 <div className="navbar"> 
 <div className="container">
 
  <div className="logo">

  ADDMISSION
  <div className="items">
   
  <ul>
    
   <li> 
<Link to='/'>Home</Link>
        </li>  
    <li><Link to='/inqury'>Inqury</Link></li>
    <li><Link to='/addmission'>Addmission</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/ContactUs'>ContactUs</Link></li> 

    </ul>
  
  
  
  
  </div>
   

  
  
  </div>
  

  </div>
 
 
 </div>
   

    
    </>
  )
}

export default Header