import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Products from "./components/products/products";
import { ProductDetails } from "./components/ProductDetails/productDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
