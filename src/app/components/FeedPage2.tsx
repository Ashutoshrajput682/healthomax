'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function PostCard() {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full px-4 mt-0">
      <div className="bg-white rounded-xl p-4 shadow max-w-6xl mx-auto space-y-4">

        {/* User Info */}
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/card-imd-1.jpg"
              alt="Dr. Priyanka Gupta"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm sm:text-base font- text-gray-800">
                Dr. Priyanka Gupta
              </h4>
              <p className="text-xs text-gray-500">Ayurveda · 9 hours ago</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setFollowing(!following)}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium transition whitespace-nowrap ${
                following
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-[#0033A4] text-white hover:bg-[#002c8c]'
              }`}
            >
              {following ? 'Unfollow' : 'Follow'}
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer w-5 h-5" />
          </div>
        </div>

        {/* Post Text */}
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          {expanded
            ? 'Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget faucibus ultrices fermentum tortor. Lectus eleifend diam nisi suspendisse tellus lectus. Integer in pellentesque sit amet.'
            : 'Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget faucibus ultrices fermentum tortor...'}
          <span
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'see less' : '...see more'}
          </span>
        </p>

        {/* YouTube Video Embed */}
        <div className="rounded-xl overflow-hidden aspect-video border">
          <iframe
            src="https://www.youtube.com/embed/2ieXKHHPYcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Post Stats with Instagram-style Icons */}
        <div className="flex flex-wrap text-sm text-gray-600 mt-3 px-2 gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5 text-red-500" />
            ) : (
              <AiOutlineHeart className="w-5 h-5" />
            )}
            <span>{liked ? '29.1K' : '29K'}</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <BiMessageRounded className="w-5 h-5" />
            <span>390</span>
          </div>


           <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition">
            <FiSend className="w-5 h-5" />
            <span>3</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <HiOutlineRefresh className="w-5 h-5" />
            <span>39</span>
          </div>

         
        </div>
      </div>
    </div>
  );
}
