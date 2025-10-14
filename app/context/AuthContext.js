"use client";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Clear auth state on logout
  const clearAuthState = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    router.push("/login");
  }, [router]);

  // Logout function
  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);

    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch (err) {
      console.error("Logout failed:", err);
    }

    clearAuthState();
    setIsLoggingOut(false);
  }, [clearAuthState]);

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/auth/profile", { method: "GET", credentials: "include" });
        const data = await res.json();

        if (res.ok && data.user) {
          setUser(data.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Profile fetch failed:", err);
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    fetchProfile();
  }, []);

  console.log(user, ": user details");

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoggingOut, handleLogout, setIsAuthenticated, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
