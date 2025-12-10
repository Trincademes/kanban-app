export default function Button({ children, ...rest }: any) {
  return (
    <button
      {...rest}
      className={`bg-white-700 text-white px-4 py-2 rounded-xl hover:bg-white-800 transition ${rest.className}`}
    >
      {children}
    </button>
  );
}
