'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, X, Heart, MessageCircle, Send, Bookmark, Play } from 'lucide-react';

const reels = [
  {
    type: 'video',
    src: '/vidoe.mp4',
    username: 'Sumit Panday',
    avatar: '/reel6.jpg',
  },
  {
    type: 'video',
    src: '/vidoe.mp4',
    username: 'Sumit Panday',
    avatar: '/reel6.jpg',
  },
  {
    type: 'video',
    src: '/vidoe.mp4',
    username: 'Sumit Panday',
    avatar: '/reel6.jpg',
  },
  {
    type: 'video',
    src: '/vidoe.mp4',
    username: 'Sumit Panday',
    avatar: '/reel6.jpg',
  },
];

export default function SuggestedReels() {
  const [selectedReel, setSelectedReel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openReel = (reel, index) => {
    setSelectedReel(reel);
    setCurrentIndex(index);
  };

  const navigateReels = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % reels.length 
      : currentIndex === 0 ? reels.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    setSelectedReel(reels[newIndex]);
  };

  return (
    <>
      <div className="w-full h-[370px] px-3 mt-0">
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Suggested Reels
          </h2>
          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {reels.map((reel, index) => (
              <ReelCard key={index} reel={reel} onClick={() => openReel(reel, index)} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Popup Video Modal */}
      {selectedReel && (
        <InstagramReelModal 
          reel={selectedReel} 
          onClose={() => setSelectedReel(null)}
          onNext={() => navigateReels('next')}
          onPrev={() => navigateReels('prev')}
        />
      )}
    </>
  );
}

// Reel Card Component
function ReelCard({ reel, onClick }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  
  const handleToggleMute = (e) => {
    e.stopPropagation();
    setMuted(!muted);
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
  };
  
  return (
    <div
      className="snap-start flex-shrink-0 w-[85%] sm:w-[250px] h-[300px] rounded-xl relative overflow-hidden shadow-md cursor-pointer"
      onClick={onClick}
    >
      {reel.type === 'image' ? (
        <Image src={reel.src} alt="Reel" fill className="object-cover" />
      ) : (
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          loop
          muted={muted}
          className="w-full h-full object-cover"
        />
      )}
      {/* Mute/Unmute Button */}
      {reel.type === 'video' && (
        <button
          onClick={handleToggleMute}
          className="absolute top-2 right-2 bg-black/60 p-1 rounded-full text-white"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
      {/* User Info */}
      <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-black/60 px-3 py-1 rounded-full">
        <Image
          src={reel.avatar}
          alt="avatar"
          width={24}
          height={24}
          className="w-[24px] h-[24px] rounded-full object-cover"
        />
        <span className="text-white text-sm">{reel.username}</span>
      </div>
    </div>
  );
}

// Instagram-like Full Screen Reel Modal
function InstagramReelModal({ reel, onClose, onNext, onPrev }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Video progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    const handleEnded = () => {
      setTimeout(onNext, 500); // Auto move to next reel
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onNext]);

  // Auto-hide controls
  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]);

  // Reset on reel change
  useEffect(() => {
    setProgress(0);
    setIsPlaying(true);
    setLiked(false);
    setBookmarked(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [reel]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !muted;
      setMuted(!muted);
      setShowControls(true);
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    togglePlayPause();
  };

  const handleScreenTouch = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < width / 3) {
      onPrev();
    } else if (x > (width * 2) / 3) {
      onNext();
    } else {
      togglePlayPause();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[95%] sm:w-[80%] md:w-[400px] aspect-[9/16] bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gray-600 z-20 transition-opacity ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 z-10 bg-black/60 text-white p-1 rounded-full transition-opacity ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <X size={20} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          loop
          muted={muted}
          className="w-full h-full object-contain cursor-pointer"
          onClick={handleVideoClick}
          onMouseMove={() => setShowControls(true)}
        />

        {/* Touch Areas for Navigation */}
        <div 
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleScreenTouch}
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Play className="w-16 h-16 text-white opacity-80" />
          </div>
        )}

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className={`absolute top-2 left-2 z-20 bg-black/60 p-2 rounded-full text-white transition-opacity ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* User Info - Bottom Left */}
        <div className={`absolute bottom-4 left-4 text-white z-20 transition-opacity ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src={reel.avatar}
              alt="avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <span className="font-semibold">{reel.username}</span>
            <button className="text-xs bg-red-500 px-2 py-1 rounded-full font-medium">
              Follow
            </button>
          </div>
        </div>

        {/* Action Buttons - Bottom Right */}
        <div className={`absolute bottom-4 right-4 flex flex-col space-y-4 z-20 transition-opacity ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={() => setLiked(!liked)}
            className="flex flex-col items-center"
          >
            <div className={`p-2 rounded-full ${liked ? 'bg-red-500' : 'bg-black/60'}`}>
              <Heart 
                size={20} 
                className={`text-white ${liked ? 'fill-current' : ''}`} 
              />
            </div>
            <span className="text-white text-xs mt-1">1.2K</span>
          </button>

          <button className="flex flex-col items-center">
            <div className="p-2 bg-black/60 rounded-full">
              <MessageCircle size={20} className="text-white" />
            </div>
            <span className="text-white text-xs mt-1">89</span>
          </button>

          <button className="flex flex-col items-center">
            <div className="p-2 bg-black/60 rounded-full">
              <Send size={20} className="text-white" />
            </div>
          </button>

          <button 
            onClick={() => setBookmarked(!bookmarked)}
            className="flex flex-col items-center"
          >
            <div className={`p-2 rounded-full ${bookmarked ? 'bg-yellow-500' : 'bg-black/60'}`}>
              <Bookmark 
                size={20} 
                className={`text-white ${bookmarked ? 'fill-current' : ''}`} 
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}