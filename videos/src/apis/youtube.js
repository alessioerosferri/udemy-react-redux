const axios = require("axios");

const KEY = "AIzaSyDwV5Sc4VhfXQa2qbN3tigj0KmLU-mVwPw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
})