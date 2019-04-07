import axios from "axios";

const instance = axios.create({
  baseURL: "https://media-search-cc1c0.firebaseio.com"
});

export default instance;
