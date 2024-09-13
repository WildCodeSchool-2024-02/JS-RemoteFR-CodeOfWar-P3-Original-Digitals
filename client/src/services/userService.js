import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

export async function signUpUserAction({ request }) {
  try {
    const formData = await request.formData();
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
    };

    const response = await myAxios.post("api/sign", user);

    if (response.status === 201) {
      return redirect("/");
    }
  } catch (error) {
    console.error("Error during sign up:", error);
  }
  return null;
}

export async function loginUserAction({ request }) {
  try {
    const formData = await request.formData();
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await myAxios.post("api/login", user);

    if (response.status === 200) {
      return redirect("/");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
  return null;
}