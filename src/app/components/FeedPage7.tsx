'use client';

import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Share2,
  Send,
  RotateCcw
} from 'lucide-react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function DoctorPostCard() {
  const [liked, setLiked] = useState(false); // ✅ State added

  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white border rounded-xl shadow p-4 space-y-3 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Overlapping Circular Avatars */}
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-1 border-white">
                <img
                  src="/logo1.png"
                  alt="Avatar 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 mt-1 border-white">
                <img
                  src="/img1.jpg"
                  alt="Avatar 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Name + Time */}
            <div>
              <p className="font-semibold text-sm text-gray-800">
                General Physician
              </p>
              <p className="text-xs text-gray-500">
                Dr. Neha Kumari · 9 hours ago
              </p>
            </div>
          </div>

          {/* Dots Menu */}
          <BsThreeDotsVertical className="text-gray-500 cursor-pointer w-5 h-5" />
        </div>

        {/* Post Text */}
        <p className="text-sm text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget
          faucibus ultricies fermentum tortor. Lectus eleifend diam nisi
          suspendisse tellus lectus.{' '}
          <span className="text-gray-500">...see more</span>
        </p>

        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="/img10.png"
            alt="Doctors Meeting"
            className="w-full h-auto object-cover"
          />
        </div>

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
