"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918122347028"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_24px_rgba(37,211,102,0.4)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
