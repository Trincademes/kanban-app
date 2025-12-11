"use client";

import { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";

const initialColumns = [
  {
    id: "1",
    title: "Backlog",
    color: "bg-white text-black text-center",
    tasks: [
      { id: "t1", content: "Planejar arquitetura do projeto" },
      { id: "t2", content: "Criar layout inicial do Kanban" },
      { id: "t3", content: "Definir estrutura de componentes" },
      { id: "t4", content: "Criar mock de autenticação" },
      { id: "t5", content: "Mapear endpoints necessários" },
      { id: "t6", content: "Criar design responsivo" },
      { id: "t7", content: "Integrar Iconify nos componentes" },
      { id: "t8", content: "Configurar cores personalizadas no Tailwind" }
    ]
  },
    {
    id: "2",
    title: "To Do",
    color: "bg-white text-black text-center",
    tasks: [
      { id: "t9", content: "Criação da tela do ADM" },
      { id: "t10", content: "Teste de responsividade" },
      { id: "t11", content: "Identação do código" },
      { id: "t12", content: "Fluxograma da api" }
    ]
  },
  {
    id: "3",
    title: "Doing",
    color: "bg-white text-black text-center",
    tasks: [
      { id: "t13", content: "Implementar Navbar com ícone de logout" },
      { id: "t14", content: "Criar componente Board principal" },
      { id: "t15", content: "Estilizar colunas com Tailwind" },
      { id: "t16", content: "Centralizar título no header" }
    ]
  },
  {
    id: "4",
    title: "Done",
    color: "bg-white text-black text-center",
    tasks: [
      { id: "t17", content: "Configurar projeto Next.js" },
      { id: "t18", content: "Criar sistema de login básico" },
      { id: "t19", content: "Criar contexto de autenticação (AuthContext)" },
      { id: "t20", content: "Adicionar proteção de rota no /kanban" },
      { id: "t21", content: "Criar estrutura inicial das colunas" }
    ]
  }
];

export default function Board() {
  const [columns, setColumns] = useState(initialColumns);

  function onDragEnd(result: any) {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColIndex = columns.findIndex((col) => col.id === source.droppableId);
    const destColIndex = columns.findIndex((col) => col.id === destination.droppableId);

    const sourceCol = columns[sourceColIndex];
    const destCol = columns[destColIndex];

    const sourceTasks = Array.from(sourceCol.tasks);
    const destTasks = Array.from(destCol.tasks);

    const [movedTask] = sourceTasks.splice(source.index, 1);

   
    if (destination.droppableId === "trash") {
      return setColumns((prev) => {
        const updated = [...prev];
        updated[sourceColIndex].tasks = sourceTasks;
        return updated;
      });
    }

  
    if (source.droppableId !== destination.droppableId) {
      destTasks.splice(destination.index, 0, movedTask);
    } 
    
    else {
      sourceTasks.splice(destination.index, 0, movedTask);
    }

    const updatedColumns = [...columns];
    updatedColumns[sourceColIndex].tasks = sourceTasks;
    updatedColumns[destColIndex].tasks = destTasks;

    setColumns(updatedColumns);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col items-center w-full">

    
        <div className="flex gap-6 min-w-max justify-center mx-auto py-6">
          {columns.map((col) => (
            <Column key={col.id} column={col} />
          ))}
        </div>

        
      </div>
    </DragDropContext>
  );
}
