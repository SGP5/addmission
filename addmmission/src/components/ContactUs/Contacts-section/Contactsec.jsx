import React from 'react'
import Form from './Form'
import './Contactsec.css'
import Disclaimer from './Disclaimer'
import Info from './Info'
import Footer from './Footer'
import Intro from './Intro'
export const Contactsec = () => {
  return (
  <>
  <div className="contectsection">
  <Intro/>
    <Form/>
    <Info/>
    <Disclaimer/>
    <Footer/>
   
  </div>
  
  
  </>
  )
}
