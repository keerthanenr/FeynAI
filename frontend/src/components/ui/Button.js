// src/components/ui/Button.js
'use client';

export default function Button({ children, className = '' }) {
  const scrollToConversation = () => {
    document.getElementById('conversation-starter').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <button 
      onClick={scrollToConversation}
      className={`bg-[#e5e2df] hover:bg-[#d8d5d2]text-black py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl ${className}`} // Removed mt-24 from here
    >
      {children}
    </button>
  );
}