'use client'

export default function Button({ children }) {
  const scrollToConversation = () => {
    document.getElementById('conversation-starter').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <button 
      onClick={scrollToConversation}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl mt-24"
    >
      {children}
    </button>
  );
}