import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import Rating from './ui/Rating';

interface MovieCardProps {
  movie: Movie;
  layout?: 'grid' | 'horizontal';
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  movie,
  layout = 'grid'
}) => {
  const isGrid = layout === 'grid';
  
  return (
    <Link 
      to={`/movie/${movie.id}`}
      className={`
        group relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300
        ${isGrid ? 'aspect-[2/3]' : 'flex h-32 md:h-40'}
        hover:scale-[1.02] hover:shadow-xl
      `}
    >
      {/* Poster */}
      <div className={`${isGrid ? 'h-full w-full' : 'h-full w-1/3 md:w-1/4'}`}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className={`
        absolute flex flex-col justify-end p-3 md:p-4
        ${isGrid ? 'inset-0' : 'bottom-0 right-0 top-0 w-2/3 md:w-3/4'}
      `}>
        <div className="transform space-y-1 transition-transform duration-300">
          <h3 className="text-sm font-bold text-white md:text-base lg:text-lg">
            {movie.title}
          </h3>
          
          <div className="flex items-center space-x-2">
            <Rating value={movie.rating} size="sm" />
            <span className="text-xs text-gray-300">
              {movie.releaseYear} • {movie.duration}
            </span>
          </div>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1">
            {movie.genres.slice(0, isGrid ? 2 : 3).map((genre) => (
              <span 
                key={genre} 
                className="rounded bg-gray-800/80 px-1.5 py-0.5 text-[10px] text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>
          
          {/* Play button (only visible on hover for grid layout) */}
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/90
            text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100
            ${isGrid ? '' : 'hidden'}
          `}>
            <Play size={20} fill="white" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;