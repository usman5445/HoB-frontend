import axios from "axios";

export async function registerCust(data) {
  return await axios.post(`${process.env.BACKEND_URL}/customer`, data);
}
