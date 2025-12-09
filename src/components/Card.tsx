"use client";

export default function Card({ task }: any) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center hover:shadow-xl transition">
      <span>{task.content}</span>
      <button className="text-red-500 font-bold hover:text-red-700">X</button>
    </div>
  );
}
