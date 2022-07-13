import axios from "axios";

export async function registerCust(data) {
  return await axios.post("/customer", data);
}
