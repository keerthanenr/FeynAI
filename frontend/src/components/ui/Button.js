'use client';
import { useRouter } from 'next/navigation';

// Reusable component button.
export default function Button({ children, className = '', action = 'scroll' }) {
  const router = useRouter();

  const handleClick = () => {
    if (action === 'scroll') {
      document.getElementById('conversation-starter').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (action === 'chat') {
      router.push('/chat');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`bg-[#e5e2df] hover:bg-[#d8d5d2] text-black font-normal py-2 px-4 rounded-lg transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}