import React from 'react'
import { FaBook } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import {FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import "./slider.css"
function Header() {
  return (
    <>
<div className="fixed-top mb-5" >
  
  
<div className='d-flex justify-content-around' style={{backgroundColor:"white",height:"55px"}}>
  <div className='mt-2 mx-1'>
  <a className="navbar-brand" style={{color:"black"}} ><FaBook style={{color:"#198754",fontSize:"20px"}}/>  Bookly</a>

  </div>

<div style={{position:"relative"}}>
  <form className="d-flex" role="search"  >
  <input type="text" class="form-control mt-2" placeholder="Search" aria-label="Search" />
    <FaSearch  style={{position:"absolute",right:"15px",marginTop:"18px"}} /> 
      </form>
  </div>

<div  className="d-flex mt-2 mx-2"  style={{gap:"10px"}}>
    <h5 style={{height:"25px"}}><AiFillHeart/></h5>
    <h5 style={{height:"25px"}}><FaShoppingCart/></h5>
    <h5 style={{height:"25px"}}><FaUserAlt/></h5>
</div>
</div>


<nav class="navbar navbar-expand-lg navbar-light bg-success ">
  <div class="container">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav flex-wrap  me-auto mb-2 mb-lg-0 " style={{marginLeft:"25%"}}>
        <li class="nav-item mx-3 ">
       <a class="nav-link active text-light"  href="/#home">  Home</a>
        </li>
        <li class="nav-item mx-3  ">
          <a class="nav-link active text-light"  href="/#fb">Featured</a>
        </li>
        <li class="nav-item mx-3 ">
          <a class="nav-link active text-light" href="/#newarrival">Arrivals</a> 
                  </li>
        <li class="nav-item mx-3 ">
          <a class="nav-link active text-light" href="/#client">Reviews</a>
        </li>
        <li class="nav-item mx-3 ">
         <a class="nav-link active text-light" href="/#blog"> Blogs</a>
        </li>
          </ul>
     
    </div>
  </div>
</nav>


</div>

    </>
  )
}

export default Header
