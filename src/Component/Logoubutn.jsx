import React from 'react'
import "./Component.css"
import {useHistory,NavLink} from 'react-router-dom'
const Logoubutn = () => {
  return (
    <div className='container-fluid '>
    <nav class="navbar navbar-expand-lg" id='nav'>
    <div className='container'>
  <a class="navbar-brand" href="#">DEEPDIVE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
     
      <NavLink className="nav-link " to="/logout" exact={true} activeClassName='homenavlink'>Logout </NavLink>
      </li>
    
      
     
    </ul>
    
  </div>
  </div>
</nav></div>
  )
}

export default Logoubutn