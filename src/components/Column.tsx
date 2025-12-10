"use client";

import Card from "./Card";
import { Droppable } from "@hello-pangea/dnd";

export default function Column({ column }: any) {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          className={`rounded-xl p-3 w-80 flex-shrink-0 shadow-lg ${column.color}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="font-bold text-lg mb-4">{column.title}</h2>

          <div className="flex flex-col gap-3">
            {column.tasks.map((task: any, index: number) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
