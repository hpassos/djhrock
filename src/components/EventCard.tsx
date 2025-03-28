import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  date: string;
  title: string;
  venue: string;
  city: string;
  image: string;
}

export const EventCard: React.FC<EventCardProps> = ({ date, title, venue, city, image }) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-purple-500 mb-4">
          <Calendar size={20} className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{venue}</p>
        <p className="text-gray-400">{city}</p>
      </div>
    </div>
  );
};