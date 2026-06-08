import axios from "axios";

export const api = axios.create({
  // https://api.github.com/repos/user/repo/
  baseURL: "https://api.github.com",
});
