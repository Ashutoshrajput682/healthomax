'use client';

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Heart,
  MessageCircle,
  Send,
  RotateCcw
} from 'lucide-react'; // ✅ Lucide icons imported

export default function FortisAd() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full px-4 mt-3">
      <div className="max-w-6xl mx-auto border rounded-xl  p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3 ">
          <img
            src="/logo.png"
            alt="Fortis Logo"
            className="w-10 h-10 border-2 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font- text-sm text-gray-800">Fortis Hospital</p>
            <p className="text-xs text-gray-500">Sponsored</p>
          </div>
          <BsThreeDotsVertical className="text-gray-500 cursor-pointer w-5 h-5" />
        </div>

        {/* Main Image */}
        <div className="rounded-lg overflow-hidden mb-3">
          <img
            src="/img8.png"
            alt="Fortis Ad"
            className="w-full h-[310px] object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-800 mb-4 leading-relaxed">
          Experience advanced medical care with expert doctors, cutting-edge
          technology, and compassionate service. Trust Fortis Hospital for a
          healthier tomorrow.
        </p>

        {/* Reactions */}
        <div className="flex flex-wrap text-sm text-gray-600 mt-4 gap-5 sm:gap-6 px-2">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{liked ? '29.1K' : '29K'}</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <MessageCircle className="w-6 h-6" />
            <span>390</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <Send className="w-6 h-6" />
            <span>39</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition">
            <RotateCcw className="w-6 h-6" />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
