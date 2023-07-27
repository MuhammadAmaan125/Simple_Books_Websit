import React from 'react'
import img from "../Images/6deb5ad430c03362ff86159f5ff372a8.webp"
import Button from 'react-bootstrap/Button';
import img1 from "../Images/Featured-Image-64.png"
import Slider from "react-slick";
import { AiFillHeart } from 'react-icons/ai';
import {FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import "./slider.css"

 class Featured_Books extends React.Component{

  
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
     
      <>
     
     <div className='container mt-5 mb-5' style={{overflow:"hidden"}}>
     
     <div className='heading_line mt-5' style={{borderTop:"1px solid #eee",width:"83%",position:"absolute"}}></div>

       <div className='d-flex justify-content-center  mt-5'style={{position:"relative",bottom:"30px"}}>
       <h2 style={{border:"1px solid #eee",padding:"10px",backgroundColor:"white"}}> Featured Books </h2>
       </div>
             <Slider {...settings}>
          
        
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
          
          
      
    
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
            
          
          
     
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
             
          
          
     
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
             
          
          
    
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
              
          
     
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
             
          
          
    
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
          
     
     <div className='slider_card mx-2'>
     <div class="card mx-2" style={{width:"17rem",height:"450px",cursor:"pointer"}}>
<img src={img} class="card-img-top" alt="..."/>
<div class="card-body" style={{textAlign:"center"}}>
  <h4>Featured Books</h4>
  <p>$15.99 <del>$20.99</del></p>
  <Button  variant="success">Add to Cart</Button>

</div>
<div className='card_effect'>
  
<ul className="sci mt-3 mx-5" >
  <li><a href=""><AiFillHeart style={{color:"white", fontSize:"20px"}} /></a></li>
  <li><a href=""><FaShoppingCart style={{ color:"white",fontSize:"20px"}} /></a></li>
  <li><a href=""><FaSearch style={{ color:"white",fontSize:"20px"}} /></a></li>
</ul>


</div>
</div> 
     </div>
             
          

          
          </Slider>
      </div>
     <div className='mt-5' style={{position:"relative"}}>
            <img src={img1} style={{width:"100%",height:"300px"}} />
            <div style={{position:"absolute" ,top:"28%",right:"10%",textAlign:"center"}}>
                <h3 style={{color:"black"}}>Subscribe For Latest Updates</h3>
                <div class="mb-3 ">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
</div>
      <Button id='newarrival' variant="success">Subscribe</Button>
                            </div>
         
        </div> 
     </>
    );
  }
  }

export default Featured_Books

