"use client";

import Card from "./Card";

export default function Column({ column }: any) {
  return (
    <div className={`rounded-lg p-4 w-72 flex-shrink-0 ${column.color}`}>
      <h2 className="font-bold text-lg mb-4">{column.title}</h2>
      <div className="flex flex-col gap-3">
        {column.tasks.map((task: any) => (
          <Card key={task.id} task={task} />
        ))}
        
      </div>
    </div>
  );
}
