"use client";

import Navbar from "@/components/Navbar";
import Board from "@/components/Board";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { isLogged } = useAuth();
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  }, [isLogged, router]);

  function handleAddTask() {
    alert("Tarefa adicionada com sucesso!");
    setTaskName("");
    setOpenModal(false);
  }

  return (
    <div className="h-screen flex flex-col bg-[#4CC8A3] relative">
      <Navbar />
      <div className="flex-1 p-6 overflow-x-auto">
        <Board />
      </div>

      <button
        onClick={() => setOpenModal(true)}
        className="
          fixed bottom-6 right-6 
          bg-gray-600 text-white 
          w-14 h-14 rounded-full 
          flex items-center justify-center 
          text-3xl shadow-xl hover:bg-gray-700
        "
      >
        +
      </button>

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4">Adicionar Tarefa</h2>

            <input
              type="text"
              placeholder="Digite o nome da tarefa"
              className="w-full p-2 border rounded mb-4 text-black"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
