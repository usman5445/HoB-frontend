import React from 'react'
import "./FeaturedProducts.css"
import FP from '../../assests/FEATUREDPRODUCTS.svg'
import product from "../../assests/product.svg"
import tshirt from "../../assests/tshirt.svg"
import drop from "../../assests/drop.svg"
import polygon from "../../assests/polygon.svg"
import smilelogo from "../../assests/smilelogo.svg"
import smilegreylogo from "../../assests/smilegreylogo.svg"
import smileblacklogo from "../../assests/smileblacklogo.svg"
import cv from "../../assests/cv.svg"
import mazagine from "../../assests/mazagine.svg"
import Carousel2 from '../Carousel2/Carousel2'
import hanger from '../../assests/hanger.svg'
import and from '../../assests/&.svg'
const FeaturedProducts = () => {
  return (
   <>
    <div className='FPcontainer d-flex  justify-content-center align-items-center flex-column'style={{width:"100vw",overflowX:"hidden"}} >
        <div className='FPheading d-flex  justify-content-center align-items-center flex-row mx-2 ' style={{height:"15vh",width:"100vw"}}>
            <div className='verticalline'></div>
            <img  className='FPtext' src={FP} alt="..."/>
            <div className='verticalline'></div>
        </div>
      <div className="products" style={{width:"90%"}}>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card"style={{height:"15rem"}}>
              <img src={product} className="" alt={"product"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={product} className="" alt={"product"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={product} className="" alt={"product"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={product} className="" alt={"product"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <button type="button" className="btn btn-primary VIEWALl " style={{background:"black",marginTop:"1.3rem",borderColor:"white",borderWidth:"3px",width:"9rem",height:"3.7rem",fontSize:"1.1rem"}}>View All</button>

{/* FOR HUSTLER */}

<div className='hustlerContainer my-5'>
  <div className='hangerimg'>
    <img src={hanger} style={{height:"60vh",width:"100%"}} alt="..."/>
    <div className='hustlerblackcont d-flex   align-items-center' style={{height:"8vh",width:"100vw",background:"black",color:"white",fontSize:"2rem",fontWeight:"800"}}>
    <div className='texthustler mx-3'> for HUSTLERS </div>
    </div> 
    <div className='andcont'>
    <div className='hustleryellowcont my-2 d-flex  justify-content-center align-items-center' style={{height:"8vh",background:"#FFDF05",color:"#005CFF",fontSize:"2rem",fontWeight:"800"}}>
    <div className='textdreamer'> for DREAMERS</div>
    
      <img className="and" src={and} alt="..."></img>
   
    </div> 
    <div className='hustlerredcont my-2 d-flex  align-items-center' style={{height:"8vh",background:"#F90000",color:"white",fontSize:"2rem",fontWeight:"800"}}>
    <div className='textbabas mx-3'>for BABAS</div>
    </div>
    </div>
  </div>
</div>




{/* RECYLED */}
        <div className='recycledContainer  d-flex  justify-content-center align-items-center flex-row' >
            <div className='leftrecycledContainer d-flex  justify-content-center align-items-center flex-column 'style={{height:"100%",width:"40vw"}} >
            <div className='cardrecycled d-flex  justify-content-center align-items-center flex-column'>
                <img src={tshirt} alt="..."/>
                <div className='recycleddetails ' >
                <span className='quantity ml-5'id='quantity'>500</span>
                <span className='unit'>Kg</span>
                <div className='recycledname'>Fashion Waste  Recycled</div>
                </div>
                </div>
            </div>
             <div className='rightrecycledContainer  d-flex  justify-content-center align-items-center flex-column mx-5'style={{height:"100%",width:"40vw"}}>
             <div className='cardrecycled my-5'>
                <img src={drop} alt="..."/>
                <div className='recycleddetails '>
                <span className='quantity'>20</span>
                <span className='unit'>Lt</span>
                <div className='recycledname'>Water Saved</div>
                </div>
                </div>
                <div className='cardrecycled my-5'>
                <img src={polygon} alt="..."/>
                <div className='recycleddetails '>
                <span className='quantity'>2000</span>
                <div className='recycledname'>Happy Babas</div>
                </div>
                </div>
            </div>
        </div>
            <button type="button" className="btn btn-primary knowmore " style={{background:"black",marginTop:"1.3rem",borderColor:"white",borderWidth:"3px",width:"9rem",height:"3.7rem",fontSize:"1.1rem"}}>Know More</button>
            <div className="position-relative marquee-container d-none d-sm-block mt-5">
            <div className='perfectdrip  d-flex  justify-content-center align-items-center mt-2'>
               
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/>&nbsp; </span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/>&nbsp; </span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/> &nbsp;</span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/> &nbsp;</span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/>&nbsp; </span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/>&nbsp; </span>
                <span >the perfect DRIP &nbsp; <img src={smilelogo} alt="..."/>&nbsp; </span>
            </div>
            
            
           
                
        </div>


{/* CV CONTAINER PART */}


     <div className='cvContainer'>
        <div className='tagUsContainer my-5 d-flex  justify-content-center align-items-center flex-column'>
            <div className='tagus'>Tag Us With</div>
            <div className='hashtag'>#HOUSEOFBABAS</div>
            <div className='tagus'>To Get Featured</div>
        </div>

        <div className='cvimg' style={{background:"url{}"}}>

        <img src={cv} alt="..."style={{width:"100vw",height:"50vh"}}/>
        </div>
        </div>


{/* SHOP UNBOX PLANT */}

    <div className='shopUnboxContainer d-flex  justify-content-center align-items-center flex-column my-3'>
        <div className='shopUnboxheading my-5'>
            <div >SHOP</div>
            <div >-UNBOX-</div>
            <div >PLANT</div>
        </div>
        <div className='shopUnboxDescription-1'>
        Your awaited HOB shipment arrives in <br></br> <b>100 % ENVIRONMENTAL FRIENDLY PACKETS with PLANTABLE SEED TAGS.</b>
         
        <div className='my-3'>
        Yes, you got it right, <b> just tear &gt;  sow &gt;  water &gt; & let it grow.</b>
        </div>
        </div>
    </div>


{/* HOB MAGAZINE CONTAINER */}
<div className='magazineContainer  d-flex  justify-content-center align-items-center flex-column' style={{height:"53rem" ,width:"100vw",overflow:"hidden"}} >
    <div className='magazinecont'>
        <div className='magazineHeading'>HOB MAGAZINE</div>
        <div className='magazineHeading p2' style={{color:"white"}}>HOB MAGAZINE</div>
        <div className='magazineHeading'>HOB MAGAZINE</div>
    
     <div className="card magazinecard " >
  <img src={mazagine} className="card-img-top" alt="..."/>
  <div className="card-body d-flex  justify-content-center align-items-center flex-column">
    <h5 className="card-title" style={{textAlign:"center",fontWeight:"bold"}}>More clothes in landfills than on the body. Why?</h5>
    <p className="card-text"style={{textAlign:"center"}}>The more garments we purchase, the less we utilise them, resulting in rising fashion waste. As a result, the apparel and textile sector has risen to third spot on the list of the world's worst...</p>
    <button type="button" className="btn btn-primary knowmore " style={{background:"black",marginTop:"1.3rem",borderColor:"white",borderWidth:"3px",width:"9rem",height:"3.7rem",fontSize:"1.1rem"}}>Know More</button>
  </div>
  </div>
</div> 

<div className='smilelogoContainer d-flex  justify-content-center align-items-center flex-row '>
    <img src={smilegreylogo} className="mx-2 my-2" alt="..."/>
    <img src={smileblacklogo} className="mx-2 my-2" alt="..." style={{colore:"black"}}/>
    <img src={smilegreylogo} className="mx-2 my-2" alt="..."/>
</div>


    </div>

    {/* CAROUSEL2 */}

    <Carousel2/>
    <div className='smilelogoContainer d-flex  justify-content-center align-items-center flex-row my-4'style={{overflow:"hidden"}}>
    <img src={smilegreylogo} className="mx-2 my-2" alt="..."/>
    <img src={smileblacklogo} className="mx-2 my-2" style={{colore:"black"}} alt="..."/>
    <img src={smilegreylogo} className="mx-2 my-2" alt="..."/>
</div>




    </div>

   </>
  )
}

export default FeaturedProducts
