import React from 'react'
import {Carousel,Container}from 'react-bootstrap'



const Second=()=>{
    return(
       <div className='these imagess' >
<Carousel className="picture" >
  <Carousel.Item>
    <img
      
      src="https://www.sumitomocorp.com/jp/-/media/Images/hq/sustainability/iso-management/mainVisual_iso-management.jpg?h=1080&la=en&w=1920 "
      alt="First slide"className="im"
    />
    <Carousel.Caption>
      <h3  style={{color:'gold'}}>A productivity platform </h3>
      <p style={{color:'gold'}} >Integrate the apps your team already uses directly into your workflow. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      src="http://www.netersontech.com/images/benefits/Banner.jpg"
      alt="Third slide" className="im"
    />

    <Carousel.Caption>
      <h3 style={{color:'gold'}}> Every where you are !</h3>
      <p style={{color:'gold'}}>No matter , Track Manager stays in sync across all of your devices.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    
      src="http://study.com/cimages/course-image/principles-of-management-textbook_138089_large.jpg"
      alt="Third slide" className="im"
    />

    <Carousel.Caption>
      <h3  style={{color:'gold'}}>The Team Playbook</h3>
      <p  style={{color:'gold'}}>It’s easy to get your team up and running with Track Manager.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
           
    )
}
export default Second;