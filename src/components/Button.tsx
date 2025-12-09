export default function Button({ children, ...rest }: any) {
  return (
    <button
      {...rest}
      className={`bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition ${rest.className}`}
    >
      {children}
    </button>
  );
}
