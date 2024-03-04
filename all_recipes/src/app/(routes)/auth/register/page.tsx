import AuthPage from "@/app/features/authentication/components/templates/AuthPage";

export default function Register() {
  return (
    <AuthPage
      title={"register"}
      infoTitle={"new to our website?"}
      isLogin={false}
      text={"register"}
      bottomLinkText={"already have an account?"}
      bottomLinkHref={"/auth/login"}
      emailId={"email"}
      emailLabel={"email"}
      emailType={"text"}
      passwordId={"password"}
      passwordLabel={"password"}
      passwordType={"password"}
    />
  );
}
