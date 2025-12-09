"use client";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <span className="font-bold text-xl">Meu Kanban</span>
      <button
        onClick={logout}
        className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100"
      >
        Sair
      </button>
    </nav>
  );
}
