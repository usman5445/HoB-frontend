import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export async function newCart(accessToken) {
  return await axios.post(`${BACKEND_URL}/newcart`, {
    accessToken: accessToken,
  });
}

export async function getCart(cartId) {
  return await axios.post(`${BACKEND_URL}/getcart`, {
    cartId: cartId,
  });
}

export async function addToCart(cartId, productId, quantity) {
  return await axios.post(`${BACKEND_URL}/addtocart`, {
    cartId: cartId,
    productId: productId,
    quantity: quantity,
  });
}

export async function removeFromCart(cartId, productLineId) {
  return await axios.post(`${BACKEND_URL}/removefromcart`, {
    cartId: cartId,
    productLineId: productLineId,
  });
}

export async function updateQuantity(cartId, productLineId, quantity) {
  return await axios.post(`${BACKEND_URL}/updateQuantity`, {
    cartId: cartId,
    productLineId: productLineId,
    quantity: quantity,
  });
}
