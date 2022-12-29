import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://s-alesocial-production.up.railway.app/api/",
  withCredentials: true,
});
