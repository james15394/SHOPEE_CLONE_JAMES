import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5001/shoppee-clone/us-central1/api",
});
