import axios from "axios";

export const productRequest = async () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  console.log(BACKEND_URL);
  try {
    const data = await axios.get(`${BACKEND_URL}/products`);

    // console.log(response.data);
    return data;
  } catch (error) {
    throw error;
  }

  // http://api.openweathermap.org/data/2.5/weather?q=haridwar&units=metric&appid=20b954145f8652054ce6bcb04dfaba65
};

export const singleProductRequest = async (id) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  console.log(BACKEND_URL);
  try {
    const data = await axios.get(`${BACKEND_URL}/products/${id}`);

    // console.log(response.data);
    return data;
  } catch (error) {
    throw error;
  }

  // http://api.openweathermap.org/data/2.5/weather?q=haridwar&units=metric&appid=20b954145f8652054ce6bcb04dfaba65
};
