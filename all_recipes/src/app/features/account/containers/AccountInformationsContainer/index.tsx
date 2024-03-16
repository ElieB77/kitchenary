"use client";
import { AuthContext } from "@/app/features/authentication/contexts/AuthContext";
import { useContext } from "react";
import AccountInformationsPage from "../../components/templates/AccountInformationsPage";

const AccountInformationsContainer = () => {
  const { userEmail, sendResetPasswordLink } = useContext(AuthContext);

  return (
    <AccountInformationsPage
      subtitle={"my basic info"}
      firstWord={"personal"}
      secondWord={"info"}
      btnText={"reset password"}
      btnOnClick={() => sendResetPasswordLink(userEmail)}
      id={"email"}
      label={"email address"}
      type={"text"}
      onChange={undefined!}
      value={userEmail}
      changePasswordTitle={"change password"}
      changePasswordDescription={
        "If you want to change your password, click the button below, and we will send password reset instructions to your email address."
      }
      disabled={true}
    />
  );
};

export default AccountInformationsContainer;
