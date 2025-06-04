'use client';

import { Search, MessageSquare, Bell } from 'lucide-react';

export default function MobileTopNavbar() {
  return (
    <div className="md:hidden fixed top-0 left-0 z-50 w-full bg-white border-b px-4 py-2">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-3">
        {/* Left: Logo */}
        <img src="/Group (1).png" alt="Logo" className="h-6 w-6" />

        {/* Center: Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-full mx-4">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-2 outline-none text-sm text-gray-700 w-full"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3">
          <MessageSquare size={20} className="text-gray-700" />
          <Bell size={20} className="text-gray-700" />
        </div>
      </div>

      {/* Share your thoughts box */}
      <div className="flex items-center gap-2">
        <img
          src="/logo2.jpg"
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="flex-1 bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm">
          Share your thoughts..
        </div>
      </div>
    </div>
  );
}
