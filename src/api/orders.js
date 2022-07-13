import axios from "axios";
export default function orderRequest() {
    axios
      .get(`${process.env.BACKEND_URL}/orders`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }
