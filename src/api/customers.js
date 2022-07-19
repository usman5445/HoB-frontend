import axios from "axios";

export async function registerCust(data) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  return await axios.post(`${BACKEND_URL}/customer`, data);
}

export async function loginCust(data) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  return await axios.post(`${BACKEND_URL}/login`, data);
}
