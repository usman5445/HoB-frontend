import React from "react";
import "./products.css";
import "bootstrap/dist/css/bootstrap.css";
// import Carousel from 'react-gallery-carousel';
import "react-gallery-carousel/dist/index.css";
import NavSide from "../NavSide/NavSide";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { productRequest } from "../../api/products";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import slider from "../../assests/Slider.svg";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  const getproducts = async () => {
    try {
      const response = await productRequest();
      // console.log(response.data);
      console.log(response.data.products);
      setproducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleProductClick(id) {
    console.log(id);
    id && navigate(`/productDetails/${id}`);
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <NavSide />
      <div className="headers">
        <p id="resultsForhead">Showing Results for “T-shirts”</p>
        <p id="collectionHead">House of Babas / T-shirts</p>
      </div>
      <div className="productsFilter">
        <div id="fliter">FILTER & SORT</div>
        <div id="slider">
          <img src={slider} alt=".."></img>
        </div>
        <div id="box"></div>
      </div>
      <div className="products">
        <div className="row productCard">
          {products.map((product) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 productCard">
              <div class="card">
                <Carousel showThumbs={false}>
                  {product.images.map((image) => (
                    <div>
                      <img
                        src={image.src}
                        className="d-block w-100 "
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </Carousel>

                <div
                  onClick={() => handleProductClick(product.id)}
                  className="card-body"
                  key={product.id}
                >
                  <p className="card-text collectionName">T Shirts</p>
                  <p className="card-text productName">{product.title}</p>
                  <p className="card-text productPrice">
                    {"\u20B9"}
                    {product.variants[0].price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
