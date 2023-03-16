import { apiBet } from "../api";
import { AxiosError } from "axios";

export async function handleBet() {
  let betResponse = { data: {}, message: "" };
  try {
    const response = await apiBet.post("", _);
    betResponse.data = response.data.numbers;
    betResponse.message = "success";
    return betResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      betResponse.message = "error";
      return betResponse;
    }
  }
}
