'use client';
import Image from "next/image";

const challenges = [
  {
    id: 1,
    title: "December Running 5 km Challenge",
    distance: "5 km",
    image: "/Group 1000002713.png",
    participants: 150,
  },
  {
    id: 2,
    title: "December Running 5 km Challenge",
    distance: "5 km",
    image: "/Group 1000002713.png",
    participants: 150,
  },
  {
    id: 3,
    title: "December Running 5 km Challenge",
    distance: "5 km",
    image: "/Group 1000002713.png",
    participants: 150,
  },
];

export default function ChallengeSlider() {
  return (
    <div className="w-full px-4 mt-6">
      {/* Main container with gradient background */}
      <div 
        className="text-white p-6 rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #4A90B8 0%, #2E7AAD 100%)'
        }}
      >
        {/* Header section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Explore the New Challenge Feature
          </h2>
          <p className="text-white/90 text-base">
            Join Now and Take on the Adventure!
          </p>
        </div>
        
        {/* Scrollable cards container */}
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="min-w-[300px] bg-white rounded-2xl p-0 shadow-lg flex-shrink-0 overflow-hidden"
            >
              {/* Challenge image with light blue background */}
              <div className="relative mb-0 h-48 px-4 pt-4" style={{ backgroundColor: '#CCE7F3' }}>
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  width={280}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover"
                />
              </div>
              
              {/* White content section */}
              <div className="px-4 pb-4">
                {/* Challenge title */}
                <h3 className="font-bold text-lg mb-3 text-gray-900 leading-tight">
                  {challenge.title}
                </h3>
                
                {/* Distance with running icon - right after title */}
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 mr-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
                      <path d="M13.5 5.5c-.75 0-1.5-.75-1.5-1.5s.75-1.5 1.5-1.5 1.5.75 1.5 1.5-.75 1.5-1.5 1.5zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1.3-4.3-2.4l-1-1.6c-.4-.6-1-1-.7-1-.3 0-.5.1-.8.1L2 8.4l.9 1.9 2.9-1.4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-700">
                    {challenge.distance}
                  </span>
                </div>
                
                {/* Participants section - after distance */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm text-gray-500 font-medium">Participants</span>
                  <div className="flex items-center">
                    {/* User avatars */}
                    <div className="flex -space-x-2 mr-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm bg-orange-200">
                        <Image
                          src="/img2.png"
                          alt="user1"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm bg-blue-200">
                        <Image
                          src="/img3.png"
                          alt="user2"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm bg-green-200">
                        <Image
                          src="/img4.png"
                          alt="user3"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Participant count */}
                    <span className="text-sm font-semibold text-gray-700 mr-2">
                      {challenge.participants}+
                    </span>
                    {/* Arrow icon */}
                    <div className="transform rotate-45 border-r-2 border-t-2 border-gray-400 w-2 h-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Join challenge button */}
              <div className="px-4 pb-4">
                <button 
                  className="w-full py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom scrollbar hiding styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}