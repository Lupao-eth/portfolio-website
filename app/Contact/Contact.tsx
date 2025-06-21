"use client";
import { FaPhoneAlt, FaEnvelope, FaViber, FaRegCopy } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section
      id="contact1"
      className="w-full px-4 py-20 font-mono bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-center">
        Contact
      </h2>

      <div className="space-y-8 text-center">
        {/* Mobile */}
        <div className="flex items-center justify-center text-lg sm:text-xl gap-4">
          <FaPhoneAlt className="text-blue-600 dark:text-blue-400" size={24} />
          <span>0919 359 7428</span>
          <button
            onClick={() => handleCopy("09193597428", "mobile")}
            className="bg-transparent p-0 m-0 border-none outline-none"
          >
            <FaRegCopy className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400" size={20} />
          </button>
          {copied === "mobile" && <span className="text-sm text-green-600">Copied!</span>}
        </div>

        {/* Email */}
        <div className="flex items-center justify-center text-lg sm:text-xl gap-4">
          <FaEnvelope className="text-green-600 dark:text-green-400" size={24} />
          <span>poshiember@gmail.com</span>
          <button
            onClick={() => handleCopy("poshiember@gmail.com", "email")}
            className="bg-transparent p-0 m-0 border-none outline-none"
          >
            <FaRegCopy className="text-gray-500 hover:text-green-600 dark:hover:text-green-400" size={20} />
          </button>
          {copied === "email" && <span className="text-sm text-green-600">Copied!</span>}
        </div>

        {/* Viber */}
        <div className="flex items-center justify-center text-lg sm:text-xl gap-4">
          <FaViber className="text-purple-600 dark:text-purple-400" size={24} />
          <span>+63 919 359 7428</span>
          <button
            onClick={() => handleCopy("+639193597428", "viber")}
            className="bg-transparent p-0 m-0 border-none outline-none"
          >
            <FaRegCopy className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400" size={20} />
          </button>
          {copied === "viber" && <span className="text-sm text-green-600">Copied!</span>}
        </div>
      </div>
    </section>
  );
}
