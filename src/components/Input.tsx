export default function Input({ label, ...rest }: any) {
  return (
    <div className="mb-3">
      <label className="block text-black font-medium mb-1">{label}</label>
      <input
        {...rest}
        className="w-full p-2 border rounded-xl focus:outline-blue-600 bg-gray-100 text-black"
      />
    </div>
  );
}
