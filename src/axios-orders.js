import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-project-1558250927226.firebaseio.com/"
});

export default instance;
