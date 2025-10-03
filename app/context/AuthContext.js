"use client";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const clearAuthState = useCallback(() => {
    setIsAuthenticated(false);
    router.push("/login");
  }, [router]);

  //Logout Function

  const handleLogout = useCallback(async () => {
    console.log("Starting logout process...");
    setIsLoggingOut(true);

    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include", 
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }

    clearAuthState();

    const timer = setTimeout(() => {
      setIsLoggingOut(false);
      router.push("/login");
    }, 100);

    return () => clearTimeout(timer);
  }, [clearAuthState, router]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoggingOut, handleLogout, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
