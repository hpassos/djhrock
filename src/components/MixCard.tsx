import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface MixCardProps {
  title: string;
  genre: string;
  duration: string;
  image: string;
}

export const MixCard: React.FC<MixCardProps> = ({ title, genre, duration, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {isPlaying ? (
            <Pause size={48} className="text-white" />
          ) : (
            <Play size={48} className="text-white" />
          )}
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{genre}</p>
        <p className="text-gray-400">{duration}</p>
      </div>
    </div>
  );
};