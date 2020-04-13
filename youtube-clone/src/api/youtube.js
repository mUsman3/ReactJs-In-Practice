import axios from "axios";

const KEY = "AIzaSyCb3IB5XRyzimsAm8O196iOVJEDYaRuBZ8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
