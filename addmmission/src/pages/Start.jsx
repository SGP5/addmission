import React, { Fragment } from 'react'
import Header from "../components/Header/Header"; 

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inquriy from '../components/Inquiry/Inquiry' 
import Addmission from '../components/Addmission/Addmission';
import Contact from '../components/ContactUs/Contact';
import './Start.css'
import Login from '../components/Login/Login'
 import Abc from './Abc';
import NewAddmission from './NewAddmission';
import SignUp from '../components/Login/Singup';

const Start = () => {



  return (
    <>
  
    <Header/>
    
    <Routes>
        <Route  path ='/' element={<Abc />} />
        <Route path='/inqury' element={<Inquriy />} /> 
        <Route  path ='/addmission' element={<Addmission />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/sing-up' element={<SignUp />} /> 
        <Route path='/contactus' element={<Contact />} />
        <Route path='/NewAddmisssion' element={<NewAddmission />} />
    </Routes>






    </> 

    
  )
}

export default Start;