import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import {AiOutlineArrowRight} from'react-icons/ai'
import {AiOutlinePhone} from'react-icons/ai'
import {AiOutlineMail} from'react-icons/ai'
import {FaFacebook} from'react-icons/fa'
import {FaTwitter} from'react-icons/fa'
import {FaInstagram} from'react-icons/fa'
import {FaLinkedin} from'react-icons/fa'
import {BsPinterest} from'react-icons/bs'
function Footer() {
  return (
   <>
   <footer class="bg-light text-dark mt-5">
  <div class="container mt-5">
    <div class="row pt-4">
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 " >
        <h5>Our Locations</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'><MdLocationPin style={{color:"#198754"}} /> India</li>
          <li className='py-2'><MdLocationPin style={{color:"#198754"}} /> USA</li>
          <li className='py-2'><MdLocationPin style={{color:"#198754"}} /> Russia</li>
          <li className='py-2'><MdLocationPin style={{color:"#198754"}} /> France</li>
          <li className='py-2'><MdLocationPin style={{color:"#198754"}} /> Japan</li>
          <li className='py-2'> <MdLocationPin style={{color:"#198754"}} /> Africa</li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5>Quick Links</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Home</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Featured</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Arrivals</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Reviews</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Blogs</li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5>Extra Links</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Account info</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Ordered items</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Privacy Policy</li>
          <li className='py-2'><AiOutlineArrowRight style={{color:"#198754"}} /> Payment Method</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Our Services</li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5>Contact Info</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'> <AiOutlinePhone style={{color:"#198754"}}/> +123-456-7890</li>
          <li className='py-2'> <AiOutlinePhone style={{color:"#198754"}}/> +111-222-3333</li>
          <li className='py-2'> <AiOutlineMail style={{color:"#198754"}}/>  Shaikhanas@gmail.com</li>
        </ul>
      
      </div>
    </div>
    <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-lg-3 col-md-4 col-sm-6 col-12 ">
        <div className="social-icons ">
            <ul class="list-unstyled d-flex justify-content-center" >
                <li className='mx-3'><FaFacebook style={{color:"#198754", fontSize:"35px"}} /></li>
                <li className='mx-3'><FaTwitter style={{ color:"#198754",fontSize:"35px"}} /></li>
                <li className='mx-3'><FaInstagram style={{ color:"#198754",fontSize:"35px"}} /></li>
                <li className='mx-3'><FaLinkedin style={{ color:"#198754",fontSize:"35px"}} /></li>
                <li className='mx-3'><BsPinterest style={{ color:"#198754",fontSize:"35px"}}/> </li>
            </ul>
            </div>
        </div>
    </div>
    <div className="row mt-3 mb-3">
      <div className="col col-sm-12">
        <div className='d-flex justify-content-center'>
          <p>Created by <span style={{color:"#198754"}}>Muhammad Aman</span> | All Rights Reserved! </p>
        </div>
      </div>
    </div>
  </div>
</footer>

   
   </>
  )
}

export default Footer



