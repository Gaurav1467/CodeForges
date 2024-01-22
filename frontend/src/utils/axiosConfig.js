import axios from "axios";
require('dotenv').config();
// require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";


export default instance;