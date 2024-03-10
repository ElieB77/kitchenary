import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/app/shared/context/AuthContext";

const useAuthForm = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { handleSuccesfulResponse, handleErrorResponse } =
    useContext(AuthContext);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setPasswordValue(event.target.value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    endpoint: string,
    token?: string | null
  ) => {
    event.preventDefault();

    let data;

    if (endpoint === "login" || endpoint === "register") {
      data = { email: emailValue, password: passwordValue };
    } else if (endpoint === "forgot-password") {
      data = { email: emailValue };
    } else if (endpoint === "reset-password") {
      data = { newPassword: passwordValue, token: token };
    }

    try {
      const response = await axios[
        endpoint === "reset-password" ? "patch" : "post"
      ](`/api/auth/${endpoint}`, data);

      handleSuccesfulResponse(endpoint, response.status);
    } catch (error: any) {
      handleErrorResponse(
        endpoint,
        error.response.status,
        emailValue,
        error.response.data.message,
        setErrorMessage
      );
    }
  };

  return {
    emailValue,
    passwordValue,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    errorMessage,
  };
};

export default useAuthForm;
