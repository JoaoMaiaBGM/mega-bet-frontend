import axios from "axios";

const baseURL = "https://mega-bet.onrender.com";

export const apiUser = axios.create({
  baseURL: baseURL + "/api/users/",
});

export const apiBet = axios.create({
  baseURL: baseURL + "/api/bets/",
});
