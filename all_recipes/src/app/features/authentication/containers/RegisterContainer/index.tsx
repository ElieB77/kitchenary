"use client";
import { ERROR_ICON } from "@/app/shared/constants";
import AuthPage from "../../components/templates/AuthPage";
import useAuthForm from "../../hooks/useAuthForm";

const RegisterContainer = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    emailValue,
    passwordValue,
    handleSubmit,
    errorMessage,
    loading,
  } = useAuthForm();

  return (
    <AuthPage
      title={"register"}
      infoTitle={"new to our website?"}
      isLogin={false}
      btnText={loading ? "loading.." : "register"}
      bottomLinkText={"already have an account? Log in"}
      bottomLinkHref={"/auth/login"}
      emailId={"email"}
      emailLabel={"email"}
      emailType={"text"}
      passwordId={"password"}
      passwordLabel={"password"}
      passwordType={"password"}
      btnOnClick={undefined!}
      emailOnChange={handleEmailChange}
      emailValue={emailValue}
      passwordValue={passwordValue}
      passwordOnChange={handlePasswordChange}
      onSubmit={(event: any) => handleSubmit(event, "register")}
      errorMessage={errorMessage}
      errorIcon={ERROR_ICON}
    />
  );
};

export default RegisterContainer;
