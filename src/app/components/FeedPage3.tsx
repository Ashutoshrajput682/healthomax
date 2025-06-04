'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, RotateCcw, Send, MoreVertical } from 'lucide-react';

export default function PostCard() {
  const [following, setFollowing] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white rounded-xl shadow p-5 max-w-full mx-auto">
        {/* Header: User Info + Follow + Dots */}
        <div className="flex items-center gap-3">
          {/* User Image */}
          <Image
            src="/card-imd-1.jpg"
            alt="Dr. Priyanka Gupta"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          {/* User Name and Subtext */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font- text-gray-800 truncate">
              Dr. Priyanka Gupta
            </h4>
            <p className="text-xs text-gray-500 truncate">Ayurveda · 9 hours ago</p>
          </div>

          {/* Follow / Following Button */}
          <button
            onClick={() => setFollowing(!following)}
            className={`text-sm font-semibold px-3 py-1 rounded-full transition whitespace-nowrap ${
              following
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                : 'bg-[#0033A4] text-white hover:bg-[#002c8c]'
            }`}
          >
            {following ? 'Following' : 'Follow'}
          </button>

          {/* Dots Icon */}
          <div className="flex-shrink-0 flex items-center ml-2 cursor-pointer hover:text-gray-900 text-gray-600">
            <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Image Section */}
        <div className="my-4 rounded-lg overflow-hidden">
          <Image
            src="/cart1.png"
            alt="Healthy Food"
            width={1600}
            height={800}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Post Text */}
        <p className="text-sm text-gray-800 mt-3">
          Is excessive sleepiness as we age a warning sign of dementia?
        </p>

        {/* Post Stats */}
        <div className="flex flex-wrap text-sm text-gray-600 mt-4 gap-5 sm:gap-6 px-2">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition select-none"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{liked ? '29.1K' : '29K'}</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition select-none">
            <MessageCircle className="w-6 h-6" />
            <span>390</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition select-none">
            <Send className="w-6 h-6" />
            <span>39</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition select-none">
            <RotateCcw className="w-6 h-6" />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
