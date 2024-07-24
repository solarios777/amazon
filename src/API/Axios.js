import axios from "axios";

export const axiosInstance = axios.create({
  // localinstance of firebase function
  // baseURL: "http://127.0.0.1:5001/amaclone-8c100/us-central1/api",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-bhpi.onrender.com",
});