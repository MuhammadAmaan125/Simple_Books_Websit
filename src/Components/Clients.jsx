import React from 'react'
import img1 from "../Images/Best-Reviewed-Books-June-23.jpg"
import {AiFillStar} from'react-icons/ai'
import {RiStarHalfLine} from'react-icons/ri'
import "./slider.css"

function Clients() {
  return (
    
    <>
    <div className='container mt-5'>
    <div className='heading_line mt-5' style={{borderTop:"1px solid #eee",width:"82%",position:"absolute"}}></div>

       <div className='d-flex justify-content-center mt-5 mb-5'style={{position:"relative",top:"20px"}}>
       <h3 style={{border:"1px solid #eee",padding:"10px",backgroundColor:"white"}}>Client's Reviews</h3>
       </div>
        <div class="row mt-5" >
      <div class="col-md-4">
      <div class="card mb-3" style={{textAlign:"center"}}>
          <img src={img1} class="card-img-top" alt="Client 3" style={{borderRadius:"50%",width:"70px",height:"70px",objectFit:"cover",marginLeft:"38%",marginTop:"15px"}}/>
          <div class="card-body mt-2">
            <h5 class="card-title">Mike Johnson</h5>
            <p class="card-text">Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt. Sed et tristique lorem.</p>
            <ul className='list-unstyled d-flex justify-content-center'>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                 <li><RiStarHalfLine style={{color:"#198754"}}/> </li>   
            </ul>
          </div>
        </div>
 </div>

      <div class="col-md-4">
      <div class="card mb-3" style={{textAlign:"center"}}>
          <img src={img1} class="card-img-top" alt="Client 3" style={{borderRadius:"50%",width:"70px",height:"70px",objectFit:"cover",marginLeft:"38%",marginTop:"15px"}}/>
          <div class="card-body mt-2">
            <h5 class="card-title">Mike Johnson</h5>
            <p class="card-text">Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt. Sed et tristique lorem.</p>
            <ul className='list-unstyled d-flex justify-content-center'>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><RiStarHalfLine style={{color:"#198754"}}/> </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-4">
      <div class="card mb-3" style={{textAlign:"center"}}>
          <img src={img1} class="card-img-top" alt="Client 3" style={{borderRadius:"50%",width:"70px",height:"70px",objectFit:"cover",marginLeft:"38%",marginTop:"15px"}}/>
          <div class="card-body mt-2">
            <h5 class="card-title">Mike Johnson</h5>
            
            <p class="card-text" id='blog'>Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt. Sed et tristique lorem.</p>
            <ul className='list-unstyled d-flex justify-content-center'>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><RiStarHalfLine style={{color:"#198754"}}/> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    </>
  
  )
}

export default Clients
