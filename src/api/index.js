import axios from "axios";

const baseURL = "https://megabet-03ra.onrender.com";

export const apiUser = axios.create({
  baseURL: baseURL + "/api/users/",
});

export const apiBet = axios.create({
  baseURL: baseURL + "/api/bets/",
});
