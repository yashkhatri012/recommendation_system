import React from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  layout?: 'grid' | 'list';
}

const MovieGrid: React.FC<MovieGridProps> = ({ 
  movies, 
  title, 
  layout = 'grid'
}) => {
  if (movies.length === 0) {
    return (
      <div className="my-8 text-center">
        <h3 className="text-xl font-semibold text-gray-400">No movies found</h3>
      </div>
    );
  }

  return (
    <section className="my-8">
      {title && (
        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">{title}</h2>
      )}
      
      {layout === 'grid' ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} layout="horizontal" />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieGrid;