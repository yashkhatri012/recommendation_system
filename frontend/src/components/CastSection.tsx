import React from 'react';
import { Movie } from '../types/movie';

interface CastSectionProps {
  movie: Movie;
}

const CastSection: React.FC<CastSectionProps> = ({ movie }) => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">Cast</h2>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movie.cast.map((actor) => (
          <div key={actor.name} className="flex flex-col items-center">
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <img
                src={actor.photoUrl}
                alt={actor.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="font-medium text-white">{actor.name}</p>
              <p className="text-sm text-gray-400">{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CastSection;