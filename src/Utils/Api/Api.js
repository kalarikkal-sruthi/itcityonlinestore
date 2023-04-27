
import axios from "axios";
import jsCookie from "js-cookie";

export const APIClient = axios.create({
  baseURL: "https://itcity.tectuz.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorizatoin: `Bearer ${jsCookie.get("token")}`,
  },
  withCredentials: true,
});
