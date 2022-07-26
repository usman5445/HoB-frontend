import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../404 page/404.css";

export const NotFound = () => {
  return (
    <div className="error-page-container">
      <div className="row">
        <div className="main-heading">
          Sorry but even our BABA seems to be lost here!
        </div>
      </div>

      <div className="row ">
        <div className="error-text">Page Not Found</div>
      </div>

      <div className=" row pro-tip-container ">
        <div className="pro-tip-heading">
          Pro tip: Guess whose internet is not working
        </div>
      </div>

      <div className="row">
        <div className="">
          <button className="home-btn">
            <Link to="/" className="home-btn-text">
              Back To Home
            </Link>
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
