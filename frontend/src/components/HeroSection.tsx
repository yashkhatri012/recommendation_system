import React, { useState, useEffect } from 'react';
import { Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import Button from './ui/Button';
import Rating from './ui/Rating';

interface HeroSectionProps {
  movies: Movie[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = movies[currentIndex];

  // Auto-rotate featured movies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={currentMovie.backdropUrl}
          alt={currentMovie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
      </div>
      
      {/* Movie Info Content */}
      <div className="container relative mx-auto flex min-h-[70vh] items-center px-4">
        <div className="w-full max-w-2xl py-20 md:py-24 lg:py-32">
          <div className="animate-fadeIn">
            <div className="mb-4 flex items-center space-x-2">
              <Rating value={currentMovie.rating} />
              <span className="text-sm text-gray-300">
                {currentMovie.releaseYear}
              </span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">
                {currentMovie.duration}
              </span>
            </div>
            
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {currentMovie.title}
            </h1>
            
            <div className="mb-2 flex flex-wrap gap-2">
              {currentMovie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-gray-800/60 px-3 py-1 text-sm text-gray-200"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="mb-6 text-gray-300 md:text-lg">
              {currentMovie.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link to={`/movie/${currentMovie.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Play size={18} />}
                >
                  Watch Now
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                icon={<Plus size={18} />}
              >
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Movie Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-500' : 'w-3 bg-gray-500/50'
                }`}
                aria-label={`Show movie ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;