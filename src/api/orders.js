import axios from "axios";
export default function orderRequest() {
    axios
      .get("/orders")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }