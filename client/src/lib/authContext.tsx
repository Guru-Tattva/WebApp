import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  joinedDate: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  verifyEmail: (otp: string) => Promise<boolean>;
  verifyPhone: (otp: string) => Promise<boolean>;
  sendEmailOtp: () => Promise<boolean>;
  sendPhoneOtp: () => Promise<boolean>;
}

const sampleUser: User = {
  id: "1",
  name: "Sadhak Kumar",
  email: "sadhak@example.com",
  phone: "+91 98765 43210",
  avatar: undefined,
  isEmailVerified: true,
  isPhoneVerified: false,
  joinedDate: "January 2024",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (email && password) {
      setUser(sampleUser);
      return true;
    }
    return false;
  };

  const signup = async (
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (name && email && phone && password) {
      setUser({
        ...sampleUser,
        name,
        email,
        phone,
        isEmailVerified: false,
        isPhoneVerified: false,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const verifyEmail = async (otp: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (otp === "123456" && user) {
      setUser({ ...user, isEmailVerified: true });
      return true;
    }
    return false;
  };

  const verifyPhone = async (otp: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (otp === "123456" && user) {
      setUser({ ...user, isPhoneVerified: true });
      return true;
    }
    return false;
  };

  const sendEmailOtp = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  };

  const sendPhoneOtp = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
        verifyEmail,
        verifyPhone,
        sendEmailOtp,
        sendPhoneOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
