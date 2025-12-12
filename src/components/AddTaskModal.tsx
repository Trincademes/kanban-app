"use client";

import { useState } from "react";

export default function AddTaskModal({ close, columnName }: any) {
  const [value, setValue] = useState("");

  function handleAdd() {
    alert(`Tarefa adicionada com sucesso na coluna: ${columnName}!`);
    close(); 
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-80 shadow-2xl">
        <h2 className="text-lg font-bold mb-4">Adicionar Tarefa</h2>

        <input
          className="w-full border p-2 rounded-md mb-4"
          placeholder="Nome da tarefa..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={close}
            className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Cancelar
          </button>

          <button
            onClick={handleAdd}
            className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
