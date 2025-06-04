'use client';

import { useState } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";

export default function FeedPage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white rounded-xl p-4 shadow max-w-6xl mx-auto space-y-4">

        {/* User Info */}
        <div className="flex items-start sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <Image
              src="/card-imd-1.jpg"
              alt="Dr. Priyanka Gupta"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font- text-sm sm:text-base text-gray-800">
                Dr. Priyanka Gupta
              </h3>
              <p className="text-xs text-gray-500">Ayurveda · 9 hours ago</p>
            </div>
          </div>

          {/* Follow + More */}
          <div className="flex items-center gap-2 flex-row">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-3 py-1 text-sm rounded-full font-medium transition ${
                isFollowing
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-[#0033A4] text-white hover:bg-[#002c8c]"
              }`}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
            <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Post Content */}
        <p className="text-sm sm:text-base text-gray-800">
          Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget
          faucibus ultrices fermentum tortor. Lectus eleifend diam nisi
          suspendisse tellus lectus.{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            ...see more
          </span>
        </p>

        {/* Post Image */}
        <div className="rounded-xl overflow-hidden max-h-[350px]">
          <Image
            src="/card-img-2.png"
            alt="Healthy food"
            width={1000}
            height={360}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Instagram Style Icons */}
        <div className="flex flex-wrap gap-8 text-base text-black mt-3 px-2">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5 text-red-500" />
            ) : (
              <AiOutlineHeart className="w-5 h-5" />
            )}
            <span>{liked ? "29.1K" : "29K"}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <BiMessageRounded className="w-5 h-5" />
            <span>390</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <FiSend className="w-5 h-5" />
            <span>39</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition">
            <HiOutlineRefresh className="w-5 h-5" />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
