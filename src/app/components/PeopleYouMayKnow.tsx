'use client';

import Image from 'next/image';
import { useRef } from 'react';

const people = [
  {
    name: 'Dr. Divya Ghalawat',
    role: 'General Physician',
    image: '/img1.jpg',
    bg: 'bg-orange-50',
    // border: 'border-orange-200',
  },
  {
    name: 'Dr. Amit Sharma',
    role: 'Dentist',
    image: '/img1.jpg',
    bg: 'bg-blue-50',
    // border: 'border-blue-200',
  },
  {
    name: 'Dr. Amit Sharma',
    role: 'Dentist',
    image: '/img1.jpg',
    bg: 'bg-green-50',
    // border: 'border-green-200',
  },
  {
    name: 'Dr. Divya Ghalawat',
    role: 'General Physician',
    image: '/img1.jpg',
    bg: 'bg-orange-50',
    // border: 'border-orange-200',
  },
  {
    name: 'Dr. Arun Kumar',
    role: 'Dermatologist',
    image: '/img1.jpg',
    bg: 'bg-purple-50',
    // border: 'border-purple-200',
  },
];

export default function PeopleYouMayKnow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 260;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full  max-w-screen-lg mx-auto mt- py-4 -ml-2 ">
      <h2 className="text-lg font-semibold mb-4 ml-8 text-gray-800">People You May Know</h2>

      <div className="flex items-center space-x-2 -ml-5 relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 px-8 md:px-12 scroll-smooth scrollbar-hide w-full"
        >
          {people.map((person, index) => (
            <div
              key={index}
              className={`relative w-48 shrink-0 rounded-lg border ${person.bg} shadow-sm snap-start bg-white`}
            >
              {/* Top colored section */}
              <div className={`h-20 ${person.bg} rounded-t-lg`}></div>

              {/* Profile Image - absolute positioned */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full overflow-hidden  ">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Main content section */}
              <div className="flex flex-col items-center pt-16 pb-5 px-3">
                <h3 className="text-sm font-semibold text-center text-gray-900 mb-1">{person.name}</h3>
                <p className="text-xs text-gray-600 text-center mb-4">{person.role}</p>

                <button className="bg-[#0033A4] hover:bg-[#0033A4] text-white text-sm font-medium px-6 py-2 rounded-full transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
