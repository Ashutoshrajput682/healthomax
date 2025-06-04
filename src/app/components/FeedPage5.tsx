'use client';

import { PlusCircle } from 'lucide-react';

export default function HealthJournalCard() {
  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white border rounded-2xl shadow p-6 text-center space-y-4 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-xl md:text-lg font-semibold text-gray-800">
          Upload and Secure Your Health Journals
        </h2>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/Artboard.png"
            alt="Health Journal"
            className="w-[269px] sm:w-44 md:w-52 lg:w-60 h-[240px] object-cover"
          />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600">
          Access Anytime From Anywhere 
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-[#0033A4] rounded-full hover:bg-blue-50 transition text-sm sm:text-base mx-auto">
          <PlusCircle size={20} />
          Add Journal
        </button>
      </div>
    </div>
  );
}
