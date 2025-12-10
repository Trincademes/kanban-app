"use client";

import { Draggable } from "@hello-pangea/dnd";

export default function Card({ task, index }: any) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-gray-200 p-3 rounded-lg shadow-md flex justify-between items-center hover:shadow-xl transition"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{task.content}</span>
        </div>
      )}
    </Draggable>
  );
}
