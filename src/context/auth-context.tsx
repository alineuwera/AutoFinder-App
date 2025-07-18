"use client";
// src/context/auth-context.tsx
import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  profilePic?: string;
}

const AuthContext = createContext<{
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}>({ user: null, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;