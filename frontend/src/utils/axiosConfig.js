import axios from "axios";
// require('dotenv').config();

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";


export default instance;