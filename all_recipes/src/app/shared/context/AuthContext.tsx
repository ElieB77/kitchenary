"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext } from "react";
import { toast } from "react-toastify";

interface AuthContextState {
  handleSuccesfulResponse: (endpoint: string, status: number) => void;
  handleErrorResponse: (
    endpoint: string,
    status: number,
    email: string,
    errorMessage: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleVerificationEmailToken: (
    token: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  resendVerificationEmailLink: (email: string) => void;
}

const AuthContext = createContext<AuthContextState>({
  handleSuccesfulResponse: () => {},
  handleErrorResponse: () => {},
  handleVerificationEmailToken: () => {},
  resendVerificationEmailLink: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSuccesfulResponse = (endpoint: string, status: number) => {
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
    token: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const response = await axios.post("/api/auth/verify-email", {
        verifToken: token,
      });
      router.push("/");
    } catch (error: any) {
      if (error.response.status === 409) {
        router.push("/");
      }
      setter(true);
    }
  };

  const resendVerificationEmailLink = async (email: string) => {
    try {
      await axios.post("/api/auth/resend-link", {
        email: email,
      });
      console.log("Email sent!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleSuccesfulResponse,
        handleErrorResponse,
        handleVerificationEmailToken,
        resendVerificationEmailLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
