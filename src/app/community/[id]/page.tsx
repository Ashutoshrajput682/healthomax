'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { MessageSquare, Share2, Heart } from 'lucide-react';

const communities = [
  { 
    id: 1,
    name: 'General Physician', 
    members: '12,714', 
    img: '/img1.jpg',
    description: 'A community for general physicians to share knowledge and experiences.',
    posts: [
      {
        id: 1,
        author: 'Dr. Sarah Johnson',
        content: 'Important update on new treatment protocols for common cold.',
        likes: 234,
        comments: 45,
        time: '2 hours ago'
      },
      {
        id: 2,
        author: 'Dr. Michael Chen',
        content: 'Sharing my experience with telemedicine implementation.',
        likes: 156,
        comments: 23,
        time: '5 hours ago'
      }
    ]
  },
  // ... other communities
];

export default function CommunityPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const community = communities.find(c => c.id === Number(params.id));

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Community Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={community.img}
            alt={community.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{community.name}</h1>
            <p className="text-gray-500">{community.members} members</p>
          </div>
        </div>
        <p className="text-gray-600">{community.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab('posts')}
          className={`pb-2 px-4 ${
            activeTab === 'posts'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`pb-2 px-4 ${
            activeTab === 'about'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
        >
          About
        </button>
      </div>

      {/* Posts */}
      {activeTab === 'posts' && (
        <div className="space-y-4">
          {community.posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-medium text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <Heart size={18} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <MessageSquare size={18} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* About */}
      {activeTab === 'about' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About Community</h2>
          <p className="text-gray-600 mb-4">{community.description}</p>
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800">Community Guidelines</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Be respectful to all members</li>
              <li>Share evidence-based information</li>
              <li>No self-promotion without permission</li>
              <li>Maintain patient confidentiality</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 