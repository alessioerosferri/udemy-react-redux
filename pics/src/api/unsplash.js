import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers:{
    "Authorization": "Client-ID DdV_lp6CBkMMC4BFxve7-EZD8xakzPxNmtl6QYwO9hs"
  }
});