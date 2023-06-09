import { AxiosError } from "axios";
import { apiUser } from "../api";

export async function getSpecificUserToken() {
  let responseSpecificGet = { data: {}, message: "" };
  try {
    const token = localStorage.getItem("$TOKEN");
    const userData = localStorage.getItem("$DATA");

    const response = await apiUser.get(``, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const listUsers = response.data.results;
    const user = listUsers.filter((user) => user.username == userData);

    responseSpecificGet.data = user;
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

export async function userRegister(data) {
  let responseRegister = { data: {}, message: "" };
  try {
    const response = await apiUser.post("", data);
    responseRegister.data = response.data;
    responseRegister.message = "success";
    return responseRegister;
  } catch (error) {
    if (error instanceof AxiosError) {
      responseRegister.message = "error";
      return responseRegister;
    }
  }
}
