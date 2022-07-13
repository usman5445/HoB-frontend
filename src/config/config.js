const API_HOSTNAME=process.env.REACT_APP_API_HOSTNAME;
const API_PATH=process.env.REACT_APP_API_PATH;
const API_TOKEN=process.env.REACT_APP_API_ACCESS_TOKEN;

if (!API_HOSTNAME) {

    throw new Error(".env is missing the definition for REACT_APP_API_HOSTNAME environment variable")
  }

  if (!API_PATH) {

    throw new Error(".env is missing the definition for REACT_APP_API_PATH environment variable")
    
  }
  
  