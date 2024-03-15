"use client";
import { useSearchParams } from "next/navigation";
import useAuthFormForm from "../../hooks/useAuthForm";
import { ERROR_ICON } from "@/app/shared/constants";
import ForgotResetPasswordPage from "../../components/templates/ForgotResetPasswordPage";

const ResetPasswordContainer = () => {
  const {
    handlePasswordChange,
    handleSubmit,
    passwordValue,
    errorMessage,
    loading,
  } = useAuthFormForm();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <ForgotResetPasswordPage
      title={"change password"}
      infoText={
        "Enter a new password below to complete the process and securely access your account once again."
      }
      onSubmit={(event: any) => handleSubmit(event, "reset-password", token)}
      id={"password"}
      label={"new password"}
      type={"password"}
      onChange={handlePasswordChange}
      value={passwordValue}
      btnText={loading ? "loading.." : "reset password"}
      btnOnClick={undefined!}
      errorIcon={ERROR_ICON}
      errorMessage={errorMessage}
    />
  );
};

export default ResetPasswordContainer;
