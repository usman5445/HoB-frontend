import axios from "axios";

    export const productRequest = async () => {

     
    
      try {
    
        const data = await axios.get("/products")
          
        // console.log(response.data);
        return data;
    
      } catch (error) {
    
        throw error;
    
      }
    
      // http://api.openweathermap.org/data/2.5/weather?q=haridwar&units=metric&appid=20b954145f8652054ce6bcb04dfaba65
    
    
    }

   
// export const productRequest = async () => {
//   try {
//     const data = await axios.get("/products");
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
