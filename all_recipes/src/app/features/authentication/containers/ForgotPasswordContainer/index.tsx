"use client";
import { ERROR_ICON } from "@/app/shared/constants";
import useAuthFormForm from "../../hooks/useAuthForm";
import ForgotResetPasswordPage from "../../components/templates/ForgotResetPasswordPage";

const ForgotPasswordContainer = () => {
  const { handleEmailChange, emailValue, handleSubmit, errorMessage, loading } =
    useAuthFormForm();

  return (
    <ForgotResetPasswordPage
      title={"reset password"}
      infoText={
        "Please complete the form below, and we'll send you instructions via email."
      }
      id={"email"}
      label={"email"}
      type={"text"}
      btnText={loading ? "loading.." : "reset password"}
      onChange={handleEmailChange}
      value={emailValue}
      btnOnClick={undefined!}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event, "forgot-password")
      }
      errorMessage={errorMessage}
      errorIcon={ERROR_ICON}
    />
  );
};

export default ForgotPasswordContainer;
