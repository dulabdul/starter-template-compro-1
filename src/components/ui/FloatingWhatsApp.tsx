import React from 'react';
import { MessageCircle } from 'lucide-react'; // shadcn uses lucide-react by default

export default function FloatingWhatsApp() {
  const phoneNumber = "1234567890"; // In production, fetch this from Sanity props
  const message = "Hello! I am interested in your services.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}