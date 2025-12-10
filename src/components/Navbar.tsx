"use client";

import { useAuth } from "@/context/AuthContext";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative shadow-md">
  
  <span className="font-bold text-xl absolute left-1/2 transform -translate-x-1/2">
    Kanban
  </span>


<button
  onClick={logout}
  className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-2"
>
  <Icon icon="mdi:logout" width="20" height="20" />
</button>

    </nav>
  );
}
