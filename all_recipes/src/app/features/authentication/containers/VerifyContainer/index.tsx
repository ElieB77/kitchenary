"use client";
import { useContext, useEffect, useState } from "react";
import VerifyPage from "../../components/templates/VerifyPage";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "@/app/shared/context/AuthContext";

const VerifyContainer = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const userEmail = searchParams.get("email");
  const { handleVerificationEmailToken, resendVerificationEmailLink } =
    useContext(AuthContext);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    handleVerificationEmailToken(token, setIsExpired);
  }, []);

  return (
    <VerifyPage
      firstWord={"email"}
      secondWord={"verification"}
      isExpired={isExpired}
      errorMessage={
        "Oops! It looks like your account is not yet verified or the verification link has expired. Please check your inbox for the verification email or request a new one to continue."
      }
      loaderSize={50}
      btnText={"resend link"}
      btnOnClick={() => resendVerificationEmailLink(userEmail)}
    />
  );
};

export default VerifyContainer;
