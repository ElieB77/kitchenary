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
    loading,
    setEmailValue,
    setPasswordValue,
  } = useAuthForm();

  const authenticateWithDemoAccount = () => {
    setEmailValue("demo@kitchenary.com");
    setPasswordValue(process.env.NEXT_PUBLIC_DEMO_PASSWORD as string);
  };

  return (
    <AuthPage
      title={"log in"}
      infoTitle={"already a member?"}
      isLogin={true}
      btnText={loading ? "loading.." : "login"}
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
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event, "login")
      }
      errorMessage={errorMessage}
      errorIcon={ERROR_ICON}
      demoAccountClick={authenticateWithDemoAccount}
      demoAccountText="use demo account"
    />
  );
};

export default LoginContainer;
