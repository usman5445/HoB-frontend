import React from "react";
import image1 from "../../assests/image-1.svg";
import image2 from "../../assests/image-2.svg";
import image3 from "../../assests/image-3.svg";
import image4 from "../../assests/image-4.svg";
import group from "../../assests/Group.svg";

const Carousel = () => {
  return (
    <>
      <div className="carouselContainer" style={{ overflowX: "hidden" }}>
        <div
          className="carouselWrapper d-flex  justify-content-center align-items-center flex-column"
          style={{ height: "70vh", weight: "100vw" }}
        >
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "100vw", height: "70vh" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner" style={{ height: "100%" }}>
              <div className="carousel-item active" data-bs-interval="2000">
                <img className="d-block w-90 h-100" src={image1} alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img className="d-block w-90 h-100" src={image2} alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img className="d-block w-90 h-100" src={image3} alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img className="d-block w-90 h-100" src={image4} alt="..." />
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{height:"80vh",width:"100vw"}} >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner " style={{height:"100%"}}>
    <div className="carousel-item active" data-bs-interval="2000" >
      <img src={image1} className="d-block w-100" alt="..."  />
    </div>
    <div className="carousel-item" data-mdb-interval="2000"style={{height:"90%"}}> 
      <img src={image2} className="d-block w-100" alt="..."style={{height:"100%"}}/>
    </div>
    <div className="carousel-item" data-mdb-interval="2000"style={{height:"90%"}}>
      <img src={image3} className="d-block w-100" alt="..."style={{height:"100%"}} />
    </div>
     <div className="carousel-item"style={{height:"90%"}}>
      <img src={image4} className="d-block w-100" alt="..." style={{height:"100%"}}/>
    </div>
  </div>
  </div> */}
        </div>
        <div
          className="whiteCont d-flex align-items-center justify-content-center"
          style={{ height: "25vh" }}
        >
          <button
            type="button"
            className="btn btn-primary knowmore "
            style={{
              background: "#FFDF05",
              color: "black",
              border: "3px solid #000000",
              width: "9rem",
              height: "3.7rem",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Shop Now
          </button>
        </div>

        <div
          className="intro d-flex  justify-content-center align-items-center flex-column"
          style={{ height: "100vh", background: "black" }}
        >
          <img src={group} alt="..." />
          <div
            className="intro heading mx-5"
            style={{
              fontSize: "1.8rem",
              color: "white",
              fontWeight: "700",
              textAlign: "start",
            }}
          >
            “INDIA’S FIRST SUSTAINABLE FASHION AND LIFESTYLE COMMUNITY FOR THE
            YOUTH”{" "}
          </div>
          <button
            type="button"
            className="btn btn-primary knowmore "
            style={{
              background: "black",
              marginTop: "1.3rem",
              borderColor: "white",
              borderWidth: "3px",
              width: "9rem",
              height: "3.7rem",
              fontSize: "1.1rem",
            }}
          >
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
