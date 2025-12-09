"use client";

import { useState } from "react";
import Column from "./Column";

const initialColumns = [
  {
    id: "1",
    title: "Backlog",
    color: "bg-purple-200",
    tasks: [
      { id: "t1", content: "Planejar projeto" },
      { id: "t2", content: "Definir tecnologias" }
    ]
  },
  {
    id: "2",
    title: "Em andamento",
    color: "bg-yellow-200",
    tasks: [
      { id: "t3", content: "Criar layout do Kanban" }
    ]
  },
  {
    id: "3",
    title: "Concluído",
    color: "bg-green-200",
    tasks: [
      { id: "t4", content: "Configurar ambiente" }
    ]
  }
];

export default function Board() {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <div className="flex gap-6 min-w-max">
      {columns.map((col) => (
        <Column key={col.id} column={col} />
      ))}
    </div>
  );
}
