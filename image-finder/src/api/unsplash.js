import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID N7VzurypgIFNgc1A0iqD_6pJ8VuPV4e6uql2ITJbuWE"
  }
});
