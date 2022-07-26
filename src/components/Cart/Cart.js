import React from "react";
import Footer from "../Footer/Footer";
import NavSide from "../NavSide/NavSide";
import "./Cart.css";
import blacktshirt from "../../assests/blacktshirt.svg";
import Deleteicon from "../../assests/Deleteicon.svg";
import hearticon from "../../assests/hearticon.svg";
import add from "../../assests/plus.svg";
import airtel from "../../assests/airtel.svg";
import freecharge from "../../assests/freecharge.svg";
import jiomoney from "../../assests/jiomoney.svg";
import mastercard from "../../assests/mastercard.svg";
import mobikwik from "../../assests/mobikwik.svg";
import payZapp from "../../assests/payZapp.svg";
import phonepe from "../../assests/phonepe.svg";
import rupay from "../../assests/rupay.svg";
import visa from "../../assests/visa.svg";
import olamoney from "../../assests/olamoney.svg";
import minus from "../../assests/minus.svg";
import { useEffect, useState } from "react";
import {
  getCart,
  newCart,
  removeFromCart,
  updateQuantity,
} from "../../api/cart";
import { Loader } from "../Loader";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  function fetchCartItems() {
    setIsLoading(true);
    const cartId = JSON.parse(localStorage.getItem("cart"))?.id;
    getCart(cartId)
      .then((resp) => {
        setCartItems(resp.data.data?.cart?.lines?.edges);
        setCartData(resp.data.data?.cart);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  function handleQuantity(opration, productLineId, previousQuantity) {
    setIsLoading(true);
    let quantity = previousQuantity;
    switch (opration) {
      case "decrement": {
        quantity > 1 && quantity--;
        break;
      }
      case "increment": {
        quantity++;
        break;
      }
    }
    console.log(quantity);
    updateQuantity(
      JSON.parse(localStorage.getItem("cart")).id,
      productLineId,
      quantity
    )
      .then((resp) => {
        console.log(resp);
        setCartData(resp.data.data?.cartLinesUpdate.cart);
        setCartItems(resp.data.data?.cartLinesUpdate.cart.lines.edges);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  function handleDelete(productLineId) {
    setIsLoading(true);
    removeFromCart(JSON.parse(localStorage.getItem("cart")).id, productLineId)
      .then((resp) => {
        setCartData(resp.data.data?.cartLinesRemove.cart);
        setCartItems(resp.data.data?.cartLinesRemove.cart.lines.edges);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("cart"))?.id) {
      const accessToken = JSON.parse(
        localStorage.getItem("customer")
      ).accessToken;
      newCart(accessToken).then((resp) => {
        localStorage.setItem("cart", JSON.stringify(resp.data.cartCreate.cart));
      });
    }

    fetchCartItems();
  }, []);
  return (
    <>
      <NavSide />
      <Loader isTrue={isLoading} />
      <div className="CartContainer ">
        <div className="CartHeading">MY CART</div>
        <div className="items">{cartItems.length} Items</div>
        {cartItems.length ? (
          <>
            {cartItems.map((item, index) => {
              return (
                <div
                  className="card Cartcard d-flex  align-items-center flex-row"
                  style={{ width: "100vw" }}
                  key={index}
                >
                  <div className="CartImgCont ">
                    <img src={item.node.merchandise.image.url} alt="..." />
                  </div>
                  <div className="CartDetailsCont">
                    <div className="TshirtsName">
                      {item.node.merchandise.product.title}
                    </div>
                    <div className="price">
                      Rs. {item.node.merchandise.priceV2.amount}
                    </div>
                    <div className="size">
                      Size: {item.node.merchandise.title}
                    </div>
                    <div className="colour">Colour: Black</div>
                    <div
                      onClick={() => handleDelete(item.node?.id)}
                      className="deleteimg"
                    >
                      <img src={Deleteicon} alt="..."></img>
                    </div>
                    <div className="heartimg">
                      <img src={hearticon} alt="..."></img>
                    </div>
                    <div className="quantitycard d-flex justify-content-around align-items-center flex-row">
                      <div
                        onClick={() =>
                          handleQuantity(
                            "decrement",
                            item.node?.id,
                            item.node.quantity
                          )
                        }
                        className="minusbutton"
                      >
                        <img src={minus} alt="..."></img>
                      </div>
                      <div className="quantityno ">{item.node.quantity}</div>

                      <div
                        onClick={() =>
                          handleQuantity(
                            "increment",
                            item.node?.id,
                            item.node.quantity
                          )
                        }
                        className="plusbutton"
                      >
                        <img src={add} alt="..."></img>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h2>no items here</h2>
        )}

        <div className="discountCont my-2">
          <div className="discountText mx-3">Add a discount code</div>
          <div className="discount wrapper d-flex  justify-content-center align-items-center flex-row mx-3 my-2">
            <input
              type="text"
              className="form-control mx-1"
              style={{ height: "3.7rem" }}
            />
            <button
              type="button"
              className="btn btn-primary knowmore mx-1"
              style={{
                background: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "3px",
                width: "9rem",
                height: "3.7rem",
                fontSize: "1.1rem",
              }}
            >
              Add
            </button>
          </div>
        </div>
        {!localStorage.getItem("customer") && (
          <div className="CArtloginCont my-2 mx-3 d-flex  justify-content-center align-items-center flex-column">
            <div className="discountText my-3">
              Login to use your personal offers!
            </div>
            <button
              type="button"
              className="btn btn-primary knowmore  "
              style={{
                background: "black",
                borderColor: "yellow",
                borderWidth: "3px",
                width: "23rem",
                height: "3.7rem",
                fontSize: "1.1rem",
              }}
            >
              LOG IN
            </button>
          </div>
        )}
        <div className="totalValueCont my-4 mx-3">
          <div className="CartValueWrapper d-flex justify-content-between my-2">
            <div className="CartValueWrapperFieldName">Order Value</div>
            <div className="CartValueWrapperPrice">
              Rs. {cartData.cost?.subtotalAmount?.amount || 0}
            </div>
          </div>
          <div className="CartValueWrapper d-flex justify-content-between my-2">
            <div className="CartValueWrapperFieldName">GST</div>
            <div className="CartValueWrapperPrice">
              Rs. {cartData.cost?.totalTaxAmount || 0}
            </div>
          </div>
          <div className="CartValueWrapper d-flex justify-content-between my-2">
            <div className="CartValueWrapperFieldName">Shipping Charges</div>
            <div className="CartValueWrapperPrice">
              Rs. {cartData.cost?.totalDutyAmount || 0}
            </div>
          </div>
          <hr></hr>
          <div className="CartValueWrapper d-flex justify-content-between my-2 totalvalue">
            <div className="CartValueWrapperFieldName">Total</div>
            <div className="CartValueWrapperPrice">
              Rs. {cartData.cost?.totalAmount?.amount}
            </div>
          </div>
        </div>
        <div className="CartPaymentCont mx-3 my-4">
          <div className="discountText my-2">We accept:</div>
          <div className="Paymentmoethodcont  my-2 ">
            <span className="cash">Cash on Delivery</span>
            <img src={visa} alt="..."></img>
            <img src={mastercard} alt="..."></img>
            <img src={rupay} alt="..."></img>
            <img src={airtel} alt="..."></img>
            <img src={payZapp} alt="..."></img>
            <img src={phonepe} alt="..."></img>
            <img src={freecharge} alt="..."></img>
            <img src={olamoney} alt="..."></img>
            <img src={mobikwik} alt="..."></img>
            <img src={jiomoney} alt="..."></img>
          </div>
          <div className="discountText my-3 " style={{ textAlign: "start" }}>
            Prices and delivery costs are not confirmed until you’ve reached the
            checkout
          </div>
          <div className="discountText my-3" style={{ textAlign: "start" }}>
            30 days withdrawal and free returns. Read more about{" "}
            <b>
              <u>return and refund policy.</u>
            </b>
          </div>
        </div>

        <div className="YoumayalsolikeCont" style={{ marginTop: "2rem" }}>
          <div className="CartHeading">YOU MAY ALSO LIKE</div>
          <div
            className="products  d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <div
              className="row d-flex justify-content-evenly"
              style={{ width: "100%" }}
            >
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 ">
                <div className="card" style={{ height: "15rem" }}>
                  <img src={blacktshirt} className="" alt="..."></img>
                  <div className="card-body">
                    <p className="card-text collectionName">Collection Name</p>
                    <p className="card-text productName">Product Name</p>
                    <p className="card-text productPrice">Price</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card">
                  <img src={blacktshirt} className="" alt={"product"}></img>
                  <div className="card-body">
                    <p className="card-text collectionName">Collection Name</p>
                    <p className="card-text productName">Product Name</p>
                    <p className="card-text productPrice">Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recentlyviewed" style={{ marginTop: "2rem" }}>
          <div className="CartHeading">RECENTLY VIEWED</div>
          <div
            className="products  d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <div
              className="row d-flex justify-content-evenly"
              style={{ width: "100%" }}
            >
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 ">
                <div className="card" style={{ height: "15rem" }}>
                  <img src={blacktshirt} className="" alt="..."></img>
                  <div className="card-body">
                    <p className="card-text collectionName">Collection Name</p>
                    <p className="card-text productName">Product Name</p>
                    <p className="card-text productPrice">Price</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card">
                  <img src={blacktshirt} className="" alt={"product"}></img>
                  <div className="card-body">
                    <p className="card-text collectionName">Collection Name</p>
                    <p className="card-text productName">Product Name</p>
                    <p className="card-text productPrice">Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        className="paymentfooter  d-flex justify-content-between align-items-center"
        style={{ height: "5rem" }}
      >
        <div className="Totalpaymentdetails  d-flex  justify-content-center align-items-center flex-column mx-4">
          <div className="TotalPayment">Total Amount</div>
          <div className="TotalPrice">
            Rs. {cartData.cost?.totalAmount?.amount}
          </div>
        </div>
        <a
          target={"_blank"}
          href={JSON.parse(localStorage.getItem("cart"))?.checkoutUrl}
        >
          <button
            type="button"
            className="btn btn-primary knowmore mx-4"
            style={{
              background: "#FFDF05",
              color: "black",
              borderColor: "black",
              borderWidth: "3px",
              width: "9rem",
              height: "3.3rem",
              fontSize: "1.1rem",
            }}
          >
            CONTINUE
          </button>
        </a>
      </div>
    </>
  );
};

export default Cart;
