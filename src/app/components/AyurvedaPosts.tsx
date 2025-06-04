// Make sure you run: npm install react-icons

import React from 'react';
import { FaHeart, FaComment, FaRetweet, FaShare } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    user: {
      name: 'Dr. Priyanka Gupta',
      field: 'Ayurveda',
      time: '9 hour ago',
      avatar: '/card-imd-1.jpg',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur. Non commodo nunc ut nunc. Eget faucibus ultricies fermentum tortor. Lectus eleifend diam nisi suspendisse tellus lectus.',
    images: ['/img9.png', '/img7.png'],
    stats: {
      likes: '29K',
      comments: '390',
      shares: '39',
      retweets: '3',
    },
  },
  {
    id: 2,
    user: {
      name: 'Dr. Priyanka Gupta',
      field: 'Ayurveda',
      time: '9 hour ago',
      avatar: '/card-imd-1.jpg',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur. Consectetur convallis urna et elementum fames. Sed adipiscing diam ultricies amet ultrices massa pellentesque feugiat quam. Sed nibh ipsum lacus id. Ultrices adipiscing lacus nulla quam vitae ultricies molestie vitae vitae. Tellus lectus faucibus nullam pellentesque leo orci ipsum. Posuere sed nunc convallis sem. Pellentesque semper consectetur pretium arcu urna potenti ac. Nunc condimentum lorem sit turpis nisi eget sollicitudin. Urna posuere ac egestas pretium. Tincidunt massa egestas euismod leo enim purus varius etiam odio. Feugiat faucibus erat id erat diam massa aliquet commodo odio. Elit dolor purus volutpat vivamus feugiat varius vivamus aliquam. Nibh tincidunt egestas quis tincidunt varius velit. Vestibulum libero ullamcorper gravida porttitor lacinia sit nulla. Adipiscing morbi placerat facilisi elit viverra mattis. Platea neque felis sapien integer pulvinar eleifend posuere. Pellentesque quis orci sed risus ornare. Iaculis et nunc eu euismod massa condimentum nisi risus. Ac et viverra nisi facilisis diam sollicitudin dictumst.',
    images: [],
    stats: {
      likes: '29K',
      comments: '390',
      shares: '39',
      retweets: '3',
    },
  },
];

const Post = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border mb-4   ">
      <div className="flex items-start mb-4">
        <img
          src={post.user.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold  text-gray-500">{post.user.name}</p>
              <p className="text-xs text-gray-500">
                {post.user.field} • {post.user.time}
              </p>
            </div>
            <button className="text-blue-600 text-sm font-semibold">Follow</button>
          </div>
          <p className="text-sm text-gray-800 mt-2">{post.content}</p>
        </div>
      </div>
      {post.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-3">
          {post.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`post-img-${idx}`}
              className="rounded object-cover w-full h-56"
            />
          ))}
        </div>
      )}
      <div className="flex justify-around text-gray-600 border-t pt-2 text-sm">
        <div className="flex items-center gap-2">
          <FaHeart /> {post.stats.likes}
        </div>
        <div className="flex items-center gap-2">
          <FaComment /> {post.stats.comments}
        </div>
        <div className="flex items-center gap-2">
          <FaShare /> {post.stats.shares}
        </div>
        <div className="flex items-center gap-2">
          <FaRetweet /> {post.stats.retweets}
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="max-w-2xl mx-auto py-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;