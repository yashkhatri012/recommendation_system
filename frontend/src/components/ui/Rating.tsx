import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  max = 10, 
  size = 'md',
  showValue = true 
}) => {
  // Normalize to a 0-5 scale for stars
  const normalizedValue = (value / max) * 5;
  const fullStars = Math.floor(normalizedValue);
  const hasHalfStar = normalizedValue - fullStars >= 0.5;

  // Calculate style based on size
  const getStarSize = () => {
    switch (size) {
      case 'sm': return 'w-3 h-3';
      case 'lg': return 'w-5 h-5';
      default: return 'w-4 h-4';
    }
  };
  
  const starSize = getStarSize();
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${starSize} ${
              i < fullStars
                ? 'text-yellow-400 fill-yellow-400'
                : i === fullStars && hasHalfStar
                ? 'text-yellow-400 fill-yellow-400 opacity-60'
                : 'text-gray-300'
            } transition-colors`}
          />
        ))}
      </div>
      {showValue && (
        <span className={`ml-1 font-medium ${textSize}`}>
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;