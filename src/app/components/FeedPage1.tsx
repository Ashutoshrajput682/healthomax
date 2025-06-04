'use client';

import React, { useState } from 'react';
import {
  MoreVertical,
  Heart,
  MessageCircle,
  Send,
  RotateCcw,
} from 'lucide-react';

const images = [
  '/img9.png',
  '/card-img-2.png',
  '/card-img-2.png',
  '/card-img-2.png',
  '/card-img-2.png',
  '/img9.png',
  '/img9.png',
  '/img9.png',
];

export default function PostCard() {
  const [liked, setLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    imagePairs.push(images.slice(i, i + 2));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imagePairs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white rounded-xl p-4 shadow max-w-6xl mx-auto space-y-4">

        {/* User Info */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/card-imd-1.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
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
              onClick={() => setIsFollowing((prev) => !prev)}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium transition whitespace-nowrap ${
                isFollowing
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-[#0033A4] text-white hover:bg-[#002c8c] hover:shadow-lg'
              }`}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
            <MoreVertical size={20} className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Post Text */}
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget
          faucibus ultrices fermentum tortor. Lectus eleifend diam nisi
          suspendisse tellus lectus.{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">...see more</span>
        </p>

        {/* Image Slider Container */}
        <div className="relative w-full h-80 mt-4 overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imagePairs.map((pair, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex gap-2 h-full">
                {pair.map((img, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className={`relative rounded-xl overflow-hidden ${
                      pair.length === 1 ? 'w-full' : 
                      imgIndex === 0 ? 'w-2/3' : 'w-1/3'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Image ${slideIndex * 2 + imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {imagePairs.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {imagePairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Post Stats */}
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
