"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (user === "admin" && pass === "admin") {
      login();
    } else {
      setError("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#4CC8A3]">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6 text-black">Login</h1>

        <Input
          label="Usuário"
          value={user}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
        />

        <Input
          type="password"
          label="Senha"
          value={pass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPass(e.target.value)
          }
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <Button onClick={handleSubmit} className="w-full mt-4 bg-gray-600 hover:bg-gray-400">
          Entrar
        </Button>
      </div>
    </div>
  );
}
