export default function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl mt-24"
    >
      {children}
    </button>
  );
}