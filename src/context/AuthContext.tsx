"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextData {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLogged, setLogged] = useState(false);

  function login() {
    setLogged(true);
    router.push("/kanban");
  }

  function logout() {
    setLogged(false);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      "useAuth deve ser usado dentro de <AuthProvider>. Verifique seu layout.tsx."
    );
  }

  return ctx;
}
