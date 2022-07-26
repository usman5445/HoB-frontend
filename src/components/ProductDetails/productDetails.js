import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Carousel2 from "../Carousel2/Carousel2";
import NavSide from "../NavSide/NavSide";
import { productRequest, singleProductRequest } from "../../api/products";
import { useEffect, useState, Share } from "react";
import smilelogo from "../../assests/smilelogo.svg";
import smilegreylogo from "../../assests/smilegreylogo.svg";
import smileblacklogo from "../../assests/smileblacklogo.svg";
import Sharebtn from "../../assests/Share Rounded.svg";
import "../ProductDetails/productDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, newCart } from "../../api/cart";
import { Modal } from "react-bootstrap";
import Login from "../login/login";
import { Loader } from "../Loader";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  );
}

export const ProductDetails = () => {
  const shareData = async () => {
    try {
      await Share.share({
        message: "This is the demo text",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  let [count, setCount] = useState(0);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedVarient, setSelectedVarient] = useState({});
  const bodyRef = useRef();
  const navigate = useNavigate();
  const [price, setPrice] = useState({
    compare_at_price: null,
    price: null,
  });

  function handleAddToCart() {
    setIsLoading(true);
    if (!JSON.parse(localStorage.getItem("customer"))?.accessToken) {
      setModalShow(true);
      return;
    }
    if (!JSON.parse(localStorage.getItem("cart"))?.id) {
      const accessToken = JSON.parse(
        localStorage.getItem("customer")
      ).accessToken;
      newCart(accessToken).then((resp) => {
        localStorage.setItem("cart", JSON.stringify(resp.data.cartCreate.cart));
        const cartId = JSON.parse(localStorage.getItem("cart")).id;

        addToCart(cartId, selectedVarient?.admin_graphql_api_id, 1)
          .then((resp) => {
            console.log(resp.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      });
    } else {
      const cartId = JSON.parse(localStorage.getItem("cart")).id;

      addToCart(cartId, selectedVarient?.admin_graphql_api_id, 1)
        .then((resp) => {
          console.log(resp.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }

  const { id } = useParams();
  let parcer = new DOMParser();
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
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
    setSelectedVarient(product?.variants[0]);
    // bodyRef.current.innerHTML = product?.body_html;
  }, [product, modalShow]);
  useEffect(() => {
    getproducts();
  }, [modalShow]);
  return (
    <div className="product-container">
      <NavSide />
      <Loader isTrue={isLoading} />
      <div className="product-detailHead text-center">
        House of Babas / T-shirts / Pop
      </div>
      <div className="products">
        <div className="row product-card">
          {/* <div className=""> */}
          <Carousel showThumbs={false} className="product_image_carousel">
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
          <div class="card">
            <div className="card-body">
              {/* {console.log(product.variants[0].price)} */}
              {/* <p className="card-text collectionName"></p> */}
              <p className="product-card card-text">
                <span className="company-title">House of Baba</span>
                <span className="share-btn" onPress={shareData} title="Share">
                  <img src={Sharebtn} alt="share-btn" className="share" />
                  Share
                </span>
              </p>
              <p className=" product_Name">{product?.title}</p>
              <p className=" productcomparePrice">
                &#8377;
                {price.compare_at_price}
              </p>
              <p className="card-text product_Price">
                &#8377;
                {price.price}
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="col d-flex justify-content-center">
            <button onClick={handleAddToCart} className=" addcart-btn ">
              Add to Cart
            </button>
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
                    setSelectedVarient(variant);
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

        <div className="row color-box">
          <div className="color-box-heading">Colour</div>
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="black"
            autocomplete="off"
          />
          <label class="color-btn btn-dark" for="black"></label>

          <input
            type="radio"
            class="btn-check"
            name="options"
            id="blue"
            autocomplete="off"
          />
          <label class="color-btn btn-primary" for="blue"></label>
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="red"
            autocomplete="off"
          />
          <label class="color-btn btn-danger" for="red"></label>
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="yellow"
            autocomplete="off"
          />
          <label class="color-btn btn-warning" for="yellow"></label>
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="grey"
            autocomplete="off"
          />
          <label class="color-btn btn-secondary" for="grey"></label>
        </div>

        <div className="row ">
          <div className="quantity-box-heading">Quantity</div>

          <div className="row quantity-box">
            <button
              className="quantity-decrement-btn"
              onClick={() => decrementCount()}
            >
              -
            </button>
            <input
              type="number"
              className="quantity-input-box"
              name="quantity-value"
              placeholder={count}
              min="1"
            ></input>
            <button
              className="quantity-increment-btn"
              onClick={() => incrementCount()}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row product-quality-text">
        <p className="quality-text">
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
        </p>

        <p className="color-disclaimer">
          <strong> Disclaimer:</strong> Due To The Different Monitor And Light
          Effect, The Actual Color Of The Item Might Be Slightly Different From
          The Color Showed On The Pictures.
        </p>
      </div>
      <div className=" row shipping-disclaimertext text-center">
        Free shipping on orders above ₹5000 Delivery in 5-7 business days.
      </div>

      <div className="row ">
        <div className=" pair-with-heading text-center">
          YOU CAN PAIR IT WITH
        </div>
        <div className="row "></div>
      </div>

      <div className="row ">
        <div className=" simlair-heading text-center">SIMILAIR PRODUCTS</div>
        <div className="row "></div>
      </div>

      <div className="review-heading text-center">CUSTOMER REVIEWS</div>
      <Carousel2 />

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
      <hr className="footer_divider"></hr>
      <Footer />
      <hr className="footer_divider"></hr>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
