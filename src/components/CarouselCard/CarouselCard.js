import React from 'react'
import "./CarouselCard.css"
import star from '../../assests/star.svg'
import halfstar from '../../assests/halfstar.svg'
import commas from "../../assests/commas.svg"
import carousel2img from '../../assests/carousel2img.svg'
const CarouselCard = () => {
  return (
    <div className='CarouselCardContainer  d-flex  justify-content-center align-items-center flex-row  border border-1 border-dark 'style={{width:"100vw",height:"23rem"}}>
        <div className='CarouselCardleft  d-flex  justify-content-center align-items-center flex-column' style={{background:"#FFDF05",width:"40%",height:"100%"}}>
            <div className='imgCont  border border-1 border-dark  d-flex  justify-content-center align-items-center'style={{width:"100%",height:"65%"}}>
                <div className='imgwhitecont d-flex  justify-content-center align-items-center  border border-4 border-dark'style={{width:"8.5rem",height:"8.5rem"}}>
            <img src={carousel2img} className="carousel2img  " alt="..."/>
            </div>
            </div>
            <div className='namecont  border border-3 border-dark d-flex  justify-content-center align-items-center flex-column'style={{width:"100%",height:"35%"}}>
                <div className='fullname ' >FULL NAME</div>
                <div className='Designation'>Designation</div>
            </div>
        </div>
        <div className='CarouselCardright ' style={{background:"blue",width:"60%",height:"100%",color:"white"}}>

            <div className='symbol container my-4'>
            <span className='starcont mx-1'>
                <img src={star} alt="..." style={{width:"1.3rem"}}/>
                <img src={star} alt="..."style={{width:"1.3rem"}}/>
                <img src={star} alt="..."style={{width:"1.3rem"}}/>
                <img src={star} alt="..."style={{width:"1.3rem"}}/>
                <img src={halfstar} alt="..."style={{width:"0.8rem"}}/>
            </span>
            <span className='commascont   '>
                <img src={commas} alt="..." style={{width:"1.5rem"}}/>
                <img src={commas} alt="..."style={{width:"1.5rem"}}/>
            </span>
            </div>
            <div className='text mx-3 ' style={{textAlign:"start"}}>Extremely versatile t-shirts which can be paired with anything and will make any outfit instantly better! Definitely need more of such quality products! Investing in slow fashion and making my closet more environment-friendly is definitely my new agenda these days. Keep up the good work.</div>
        </div>
      
    </div>
  )
}

export default CarouselCard
