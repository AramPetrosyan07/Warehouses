import axios from "axios";
import { baseApiUrl } from "../config";

// !Dont pay attention to the hard coded url, becouse after pulling github repo you wouldnt have .env
export const api = axios.create({
  baseURL: baseApiUrl || "https://jsonplaceholder.typicode.com",
});
