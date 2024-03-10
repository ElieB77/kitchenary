"use client";
import { ERROR_ICON } from "@/app/shared/constants";
import AuthPage from "../../components/templates/AuthPage";
import useAuthForm from "../../hooks/useAuthForm";

const LoginContainer = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    emailValue,
    passwordValue,
    handleSubmit,
    errorMessage,
  } = useAuthForm();

  return (
    <AuthPage
      title={"log in"}
      infoTitle={"already a member?"}
      isLogin={true}
      btnText={"login"}
      forgotPasswordLinkText={"forgot password?"}
      forgotPasswordLinkHref={"/auth/forgot-password"}
      bottomLinkText={"don't have an account? Join now"}
      bottomLinkHref={"/auth/register"}
      label={"remember me"}
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
      onSubmit={(event: any) => handleSubmit(event, "login")}
      errorMessage={errorMessage}
      errorIcon={ERROR_ICON}
    />
  );
};

export default LoginContainer;
