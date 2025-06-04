"use client";

import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TextPostCard() {
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full px-3 mt-3">
      <div className="bg-white rounded-xl p-4 shadow text-gray-800 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative flex-shrink-0">
              <img
                src="/card-imd-1.jpg"
                alt="Dr. Priyanka Gupta"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold">
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
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-[#0033A4] text-white hover:bg-[#002c8c]"
              }`}
            >
              {following ? "Unfollow" : "Follow"}
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer w-5 h-5 self-center" />
          </div>
        </div>

        {/* Post Text */}
        <div className="mb-4">
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Consectetur convallis urna
            et elementum fames. Sed adipiscing diam ultrices amet ultrices massa
            pellentesque feugiat quam. Sed nibh ipsum lacus Lorem ipsum dolor
            sit amet consectetur. Consectetur convallis urna et elementum fames.
            Sed adipiscing diam ultrices amet ultrices massa pellentesque
            feugiat quam. Sed nibh ipsum lacus id...
          </p>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-2 border-t border-gray-100">
          {/* Like */}
          <div
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
          >
            {liked ? (
              <AiFillHeart className="w-6 h-6 text-red-500" />
            ) : (
              <AiOutlineHeart className="w-6 h-6" />
            )}
            <span>{liked ? "29.1K" : "29K"}</span>
          </div>

          {/* Comment */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <BiMessageRounded className="w-6 h-6" />
            <span>390</span>
          </div>

          {/* Share */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition">
            <FiSend className="w-6 h-6" />
            <span>3</span>
          </div>

          {/* Repost */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <HiOutlineRefresh className="w-6 h-6" />
            <span>39</span>
          </div>
        </div>
      </div>
    </div>
  );
}
