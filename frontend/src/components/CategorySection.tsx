import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MovieCategory } from '../types/movie';
import MovieCard from './MovieCard';

interface CategorySectionProps {
  category: MovieCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.75;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="my-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          {category.name}
        </h2>
        
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="rounded-full bg-gray-800 p-1.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="rounded-full bg-gray-800 p-1.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {category.movies.map((movie) => (
          <div key={movie.id} className="w-48 flex-none md:w-60">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;