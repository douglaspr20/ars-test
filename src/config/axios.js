import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== ""
      ? "http://localhost:3002/"
      : "http://localhost:4000/",
});

export default instance;
