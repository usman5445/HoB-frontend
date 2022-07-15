import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Carousel2 from "../Carousel2/Carousel2";
import { productRequest, singleProductRequest } from "../../api/products";
import { useEffect, useState } from "react";
import smilelogo from "../../assests/smilelogo.svg";
import smilegreylogo from "../../assests/smilegreylogo.svg";
import smileblacklogo from "../../assests/smileblacklogo.svg";
import Sharebtn from "../../assests/Share Rounded.svg";
import "../ProductDetails/productDetails.css";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  let [count, setCount] = useState(0);
  const [product, setProduct] = useState();
  const bodyRef = useRef();
  const [price, setPrice] = useState({
    compare_at_price: null,
    price: null,
  });
  const { id } = useParams();
  let parcer = new DOMParser();
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  const getproducts = async () => {
    console.log(id);
    try {
      const response = await singleProductRequest(id);
      console.log(response.data);
      setProduct(response.data.product);
      setPrice({
        ...price,
        compare_at_price: product.variants[0].compare_at_price,
        price: product.variants[0].price,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setPrice({
      compare_at_price: product?.variants[0].compare_at_price,
      price: product?.variants[0].price,
    });
    bodyRef.current.innerHTML = product?.body_html;
  }, [product]);
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div className="product-container">
      <div className="product-detailHead text-center">
        House of Babas / T-shirts / Pop
      </div>
      <div className="products">
        <div className="row">
          <div className="">
            <div class="card">
              <Carousel showThumbs={false}>
                {product?.images?.map((image) => (
                  <div>
                    <img
                      src={image.src}
                      className="d-block w-100 "
                      alt={image.alt}
                    />
                  </div>
                ))}
              </Carousel>

              <div className="card-body">
                {/* {console.log(product.variants[0].price)} */}
                {/* <p className="card-text collectionName"></p> */}
                <p className="product-card card-text">
                  <span className="company-title">House of Baba</span>
                  <span className="share-btn">
                    <img src={Sharebtn} alt="share-btn" className="share" />
                    Share
                  </span>
                </p>
                <p className=" productName">{product?.title}</p>
                <p className=" productcomparePrice">
                  &#8377;
                  {price.compare_at_price}
                </p>
                <p className="card-text productPrice">
                  &#8377;
                  {price.price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="col d-flex justify-content-center">
            <button className=" addcart-btn ">Add to Cart</button>
          </div>
          <div className="col d-flex justify-content-center">
            <button className=" buynow-btn">Buy Now</button>
          </div>
        </div>

        <div className="row size-box">
          {product?.variants?.map((variant, index) => {
            return (
              <>
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id={variant.title}
                  key={index}
                  defaultChecked={
                    !price.compare_at_price && index == 0 ? true : false
                  }
                  onChange={(e) => {
                    e.target.checked == true &&
                      setPrice({
                        compare_at_price: variant.compare_at_price,
                        price: variant.price,
                      });
                  }}
                />
                <label
                  class="btn btn-outline-dark size-btn"
                  htmlFor={variant.title}
                >
                  {variant.title}
                </label>
              </>
            );
          })}
        </div>
      </div>
      <div className="row product-quality-text">
        {/* <p className="quality-text">
          <strong>
            Crafted in Cotton and having a funky pattern, with Pull On closure,
            this T-shirt has Half Sleeve and a Round Collar and is definitely a
            must-have in your wardrobe
          </strong>
        </p>
        <p className="quality-list">
          <ul>
            <li>
              <p className="quality-list-item">
                <strong>Fit Type:</strong> Loose Fit
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Pattern Name:</strong> Funky
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Closure Type:</strong> Pull On
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Sleeve Type:</strong> Half Sleeve
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Collar Style:</strong> Round Collar
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Care Instructions:</strong> Do Not Bleach. Wash with
                similar colors. Machine wash cold
              </p>
            </li>
          </ul>
        </p>*/}
        <div ref={bodyRef}></div>
        <p className="color-disclaimer">
          <strong> Disclaimer:</strong> Due To The Different Monitor And Light
          Effect, The Actual Color Of The Item Might Be Slightly Different From
          The Color Showed On The Pictures.
        </p>
      </div>
      <div className=" row shipping-disclaimertext">
        Free shipping on orders above ₹5000 Delivery in 5-7 business days.
      </div>
      <Carousel2 />
      Add to Cart
      <div
        className="smilelogoContainer d-flex  justify-content-center align-items-center flex-row my-4"
        style={{ overflow: "hidden" }}
      >
        <img src={smilegreylogo} className="mx-2 my-2" alt="..." />
        <img
          src={smileblacklogo}
          className="mx-2 my-2"
          style={{ colore: "black" }}
          alt="..."
        />
        <img src={smilegreylogo} className="mx-2 my-2" alt="..." />
      </div>
      <Footer />
    </div>
  );
};
