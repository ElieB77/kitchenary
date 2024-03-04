import AuthPage from "@/app/features/authentication/components/templates/AuthPage";

export default function Login() {
  return (
    <AuthPage
      title={"log in"}
      infoTitle={"already a member?"}
      isLogin={true}
      text={"login"}
      forgotPasswordLinkText={"forgot password?"}
      forgotPasswordLinkHref={"/auth/forgot-password"}
      bottomLinkText={"don't have an account?"}
      bottomLinkHref={"/auth/register"}
      label={"remember me"}
      emailId={"email"}
      emailLabel={"email"}
      emailType={"text"}
      passwordId={"password"}
      passwordLabel={"password"}
      passwordType={"password"}
    />
  );
}
