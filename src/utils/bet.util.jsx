import { apiBet } from "../api";
import { AxiosError } from "axios";

export async function handleBet() {
  let betResponse = { data: {}, message: "" };
  try {
    const token = localStorage.getItem("$TOKEN");
    if (token) {
      apiBet.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await apiBet.post(``, {});
    betResponse.data = response.data;
    betResponse.message = "success";
    return betResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      betResponse.message = "error";
      return betResponse;
    }
  }
}
