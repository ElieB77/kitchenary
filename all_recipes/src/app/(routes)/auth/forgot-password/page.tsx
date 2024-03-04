import ForgotPasswordPage from "@/app/features/authentication/components/templates/ForgotPasswordPage";

export default function ForgotPassword() {
  return (
    <ForgotPasswordPage
      title={"reset password"}
      infoText={
        "Please complete the form below, and we'll send you instructions via email."
      }
      inputId={"email"}
      inputLabel={"email"}
      inputType={"text"}
      btnText={"reset password"}
    />
  );
}
