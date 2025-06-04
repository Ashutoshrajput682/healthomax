'use client';
import {
  Home,
  Flame,
  MessageSquare,
  Notebook,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function BottomNavbar() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { label: 'Home', icon: <Home size={20} />, key: 'home' },
    { label: 'Popular', icon: <Flame size={20} />, key: 'popular' },
    { label: 'Q&A', icon: <MessageSquare size={20} />, key: 'qa' },
    { label: 'Diary', icon: <Notebook size={20} />, key: 'diary' },
    { label: 'Community', icon: <Users size={20} />, key: 'community' },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 shadow md:hidden">
      <div className="flex justify-between px-4 py-2">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`flex flex-col items-center text-xs ${
              activeTab === item.key ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
