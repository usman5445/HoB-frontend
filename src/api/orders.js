import axios from "axios";
export default function orderRequest() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  axios
    .get(`${BACKEND_URL}/orders`)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
}
