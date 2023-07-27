import React from 'react'
import img1 from "../Images/img3.jpg"
import "./slider.css"
function Our_blogs() {
  return (
    <>
    
    <div className='container mt-5' >
      
    <div className='heading_line mt-5' style={{borderTop:"1px solid #eee",width:"82%",position:"absolute"}}></div>

       <div className='d-flex justify-content-center mt-5 mb-5'style={{position:"relative",top:"20px"}}>
       <h3 style={{border:"1px solid #eee",padding:"10px",display:"block",backgroundColor:"white"}}> Our Blogs</h3>
       </div>
        <div class="row mt-5" >
      <div class="col-md-4">
      <div class="card mb-5 ">
          
      <div class="geeks w-100">
      <img src={img1} class="card-img-top" alt="Client 3" />
</div>
       
          <div class="card-body" >
            <h5 class="card-title">Mike Johnson</h5>
            <p class="card-text">Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt.  </p>
            <button type="button" class="btn btn-success">Read More</button>
          </div>
        </div>
 </div>

      <div class="col-md-4">
      <div class="card mb-5">
      <div class="geeks w-100">
      <img src={img1} class="card-img-top" alt="Client 3" />
</div>
          <div class="card-body" >
            <h5 class="card-title">Mike Johnson</h5>
            <p class="card-text">Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt.</p>
            <button type="button" class="btn btn-success">Read More</button>
          </div>
        </div>

      </div>

      <div class="col-md-4">
        <div class="card mb-5">
        <div class="geeks w-100">
      <img src={img1} class="card-img-top" alt="Client 3" />
</div>
          <div class="card-body">
            <h5 class="card-title">Mike Johnson</h5>
            <p class="card-text">Suspendisse eleifend erat ut est finibus, quis gravida magna tincidunt.</p>
            <button type="button" class="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    
    </>
  )
}

export default Our_blogs
