import React from "react";
import Carousel from "../components/Carousel/Carousel";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import NavSide from "../components/NavSide/NavSide";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavSide />
      <Carousel />
      <div>
        <p>Click to route to "/oops" which isn't a registered route:</p>
        <Link to="/oops">Let's go</Link>
      </div>

      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
