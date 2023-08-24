import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <section className='footer'>
    <div className='container-fluid p-5'>
    <div className='row p-5'>
    <div className='col-lg-3'><h1 className='greenlivehead'>DEEPDIVE</h1></div>
    <div className='col-lg-3'>
    <h2 className='greenlivehead2'> Address</h2>
    <p className='greenlivepara2'>H.NO. 34-A,Sector-78c,Mohali</p>
<div className='row justify-content-center'></div>

    </div>
    <div className='col-lg-4'>
    <div className='row'>
    <div className='col-lg-3'>
    <NavLink to="/" id='navnavnav' >Home</NavLink>
    </div>
    <div className='col-lg-3'>
    <NavLink to="/Signup" id='navnavnav' >SIGNUP</NavLink>
    </div>
    <div className='col-lg-3'>
   <span><hr className='hr'></hr></span> <NavLink to="/Login"  id='navnavnav' >LOGIN </NavLink>
    </div>
   
    </div>
    
    </div>
    </div>
    <hr style={{background:"white"}}></hr>
   <div className='row'>
   
   </div>
    </div>
    </section>
    </>
  )
}

export default Footer