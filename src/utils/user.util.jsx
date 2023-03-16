import { AxiosError } from "axios";
import { apiUser } from "../api";

export async function getSpecificUserToken() {
  let responseSpecificGet = { data: {}, message: "" };
  try {
    const token = localStorage.getItem("$TOKEN");
    const response = await apiUser.get(``, {
      headers: { Authorization: `Bearer ${token}` },
    });
    responseSpecificGet.data = response.data;
    responseSpecificGet.message = "success";
    return responseSpecificGet;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseSpecificGet.message = "error";
      responseSpecificGet.data = err.response?.data;
      return responseSpecificGet;
    }
  }
}
