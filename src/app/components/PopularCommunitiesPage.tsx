'use client';

import Image from 'next/image';

const communities = [
  { name: 'General Physician', members: '12,714', img: '/img1.jpg' },
  { name: 'Dentist World', members: '10,512', img: '/img2.png' },
  { name: 'Healthy Diet', members: '6,787', img: '/img3.png' },
  { name: 'Self Motivate', members: '714', img: '/img4.png' },
  { name: 'Noida Dental', members: '1,214', img: '/img5.png' },
  { name: 'Healthy Clinic', members: '314', img: '/img6.png' },
];

export default function PopularCommunitiesPage() {
  return (
    <div className="w-full lg:px-0 lg:w-[295px] lg:fixed lg:top-17 lg:right-0 lg:ml-6 lg:mr-">
      <aside className="bg-[#F6F8F9] p-6 rounded-xl  w-full">
        <h3 className="font-bold text-lg text-gray-800">Popular Communities</h3>
        <p className="text-sm text-gray-500 mb-4">Suggested for you</p>

        {communities.map((comm, i) => (
          <div key={i} className="flex items-center gap-3 mb-4">
            <Image
              src={comm.img}
              alt={comm.name}
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium text-gray-700">{comm.name}</h4>
              <p className="text-xs text-gray-500">{comm.members} members</p>
            </div>
          </div>
        ))}
        <button className="text-blue-600 text-sm font-medium mt-2 hover:underline">
          See more
        </button>
      </aside>
    </div>
  
  );
}
