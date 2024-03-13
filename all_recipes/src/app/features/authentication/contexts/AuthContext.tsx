"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

interface AuthContextState {
  handleSuccesfulResponse: (
    endpoint: string,
    status: number,
    token: string
  ) => void;
  handleErrorResponse: (
    endpoint: string,
    status: number,
    email: string,
    errorMessage: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleVerificationEmailToken: (
    token: string | null,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  resendVerificationEmailLink: (email: string | null) => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
  userEmail: string;
  sendResetPasswordLink: (email: string) => void;
}

const AuthContext = createContext<AuthContextState>({
  handleSuccesfulResponse: () => {},
  handleErrorResponse: () => {},
  handleVerificationEmailToken: () => {},
  resendVerificationEmailLink: () => {},
  isLoggedIn: false,
  handleLogout: () => {},
  userEmail: "",
  sendResetPasswordLink: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<any>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const handleSuccesfulResponse = (
    endpoint: string,
    status: number,
    token: string
  ) => {
    switch (endpoint) {
      case "register":
        if (status === 200) {
          toast.success("Check your email to activate your account. Thanks!", {
            autoClose: false,
          });
          router.push("/auth/login");
        }
        break;
      case "login":
        if (status === 200) {
          Cookies.set("token", token, { expires: 1 });
          setAuthToken(token);
          router.push("/");
        }
        break;
      case "forgot-password":
        if (status === 200) {
          toast.success("An email has been sent to reset your password", {
            autoClose: false,
          });
          router.push("/auth/login");
        }
        break;
      case "reset-password":
        if (status === 200) {
          toast.success("Password updated successfully!", { autoClose: false });
          router.push("/auth/login");
        }
    }
  };

  const handleErrorResponse = (
    endpoint: string,
    status: number,
    email: string,
    errorMessage: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (status === 403 && endpoint === "login") {
      return router.push(`/auth/verify-email?email=${email}`);
    }

    if (status === 401 && endpoint === "reset-password") {
      toast.error("Action expired.");
      return router.push("/auth/login");
    }

    return setter(errorMessage);
  };

  const handleVerificationEmailToken = async (
    token: string | null,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const response = await axios.post("/api/auth/verify-email", {
        verifToken: token,
      });
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 409) {
        router.push("/");
      }
      setter(true);
    }
  };

  const resendVerificationEmailLink = async (email: string | null) => {
    try {
      await axios.post("/api/auth/resend-link", {
        email: email,
      });
      toast.success("Verification email sent. Please check your inbox.", {
        autoClose: false,
      });
      router.push("/auth/login");
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const sendResetPasswordLink = async (email: string) => {
    try {
      await axios.post("/api/auth/forgot-password", {
        email: email,
      });
      router.push("/");
      toast.success(
        "Password reset instructions have been sent to your email. Check your inbox!",
        { autoClose: false }
      );
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove("token");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token) as { email: string };
      setUserEmail(decodedToken.email);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authToken, isLoggedIn, userEmail]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        handleSuccesfulResponse,
        handleErrorResponse,
        handleVerificationEmailToken,
        resendVerificationEmailLink,
        isLoggedIn,
        handleLogout,
        userEmail,
        sendResetPasswordLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
