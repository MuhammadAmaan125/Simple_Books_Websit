import React from 'react'
import Button from 'react-bootstrap/Button';
import img1 from "../Images/7492664-removebg-preview.png"
import { FaShippingFast } from 'react-icons/fa';
import {FaLock } from 'react-icons/fa';
import {BsArrowReturnRight } from 'react-icons/bs';
import {BsHeadset } from 'react-icons/bs';
import "./slider.css"
function Slider() {
  return (
   
    <>
  
  

   <div className="contaner mt-5 " id='home' style={{overflow:"hidden"}}>


   <div className='row' id='row1' style={{backgroundColor:"#ececec",width:"110%",height:"500px",display:"flex",justifyContent:"center"}}>
    
   <div className='heading_text col' style={{margin:"200px 90px 200px "}}>
  <div>
  <h1 >Upto 75% off</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt eos ratione expedita,</p>
  <Button variant="success">Shop Now</Button>
  
    </div>   
     </div>
     <div className='col' style={{margin:"130px 80px 130px "}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={img1} id='img' style={{width:"350px" }} alt="" />
    </div>
    </div>
    
  
    
    
    
     
     
   
   </div>


     <div className="row mt-5" id='row2' style={{paddingLeft:"70px"}} >


    
    <div className="col col-lg-3 col-md-6 col-sm-8 col-12 mt-4">


   
   <div className=' d-flex'><FaShippingFast className='icon' style={{fontSize:"35px", color:"#198754"}}/> <div className='div mx-3'><h5 className='icon_heading'>Free Shipping </h5>  <p className='icon_text' style={{lineHeight:"5px"}}>order over $100</p></div> </div>
   
   


    </div>
    
    
    <div  className="col col-lg-3 col-md-6 col-sm-8 col-12 mt-4">
    
   <div className='d-flex'><FaLock className='icon' style={{fontSize:"35px", color:"#198754" }}  /> <div className='div mx-3'><h5>Secure Payment</h5>  <p className='icon_text' style={{lineHeight:"5px"}}>order over $100</p></div></div>
   
   
    </div>
    
    <div  className="col col-lg-3 col-md-6 col-sm-8 col-12  mt-4">
   
   <div className='d-flex'><BsArrowReturnRight className='icon' style={{fontSize:"35px", color:"#198754" }}  /> <div className='div mx-3'><h5>Easy Returns</h5>  <p className='icon_text' style={{lineHeight:"5px"}}>order over $100</p></div></div>
   
   
    </div>
    
    <div  className="col col-lg-3 col-md-6 col-sm-8 col-12  mt-4">
   
   <div className='d-flex'><BsHeadset className='icon' id='fb' style={{fontSize:"40px", color:"#198754" }}  /> <div className='div mx-3'><h5>24/4 Support</h5>  <p className='icon_text' style={{lineHeight:"5px"}}>order over $100</p></div></div>
   
   

    </div>


       </div>   
   
   
   
     </div>
    </>
  )
}

export default Slider










