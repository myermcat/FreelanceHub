import React, { useEffect } from 'react';

export default function Toast({ message, onClose, duration = 2500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-green-600 text-white px-6 py-3 rounded shadow-lg flex items-center animate-fade-in">
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
