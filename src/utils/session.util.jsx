import { AxiosError } from "axios";
import { apiUser } from "../api";

export async function loginUser(data) {
  let responseLogin = { token: "", message: "" };
  try {
    const response = await apiUser.post("login/", data);
    responseLogin.token = response.data;
    responseLogin.message = "success";
    apiUser.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return responseLogin;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseLogin.message = "error";
      return responseLogin;
    }
  }
}
