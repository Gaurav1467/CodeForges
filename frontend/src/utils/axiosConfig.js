import axios from "axios";
// require('dotenv').config();
// require('dotenv').config();

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://codeforges-backend-q21kk2kg5-gaurav-sharmas-projects.vercel.app/",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";


export default instance;