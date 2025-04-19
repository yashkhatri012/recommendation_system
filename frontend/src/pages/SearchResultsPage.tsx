import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { searchMovies } from '../data/mockMovies';
import { Movie, GenreType } from '../types/movie';
import MovieGrid from '../components/MovieGrid';
import Button from '../components/ui/Button';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedGenres, setSelectedGenres] = useState<GenreType[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [yearRange, setYearRange] = useState<[number, number]>([1900, 2023]);
  
  const allGenres: GenreType[] = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 
    'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller'
  ];

  useEffect(() => {
    if (searchQuery) {
      // Simulate API call
      setLoading(true);
      setTimeout(() => {
        const foundMovies = searchMovies(searchQuery);
        setResults(foundMovies);
        setLoading(false);
      }, 500);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [searchQuery]);

  const toggleGenre = (genre: GenreType) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  // Apply filters
  const filteredResults = results.filter(movie => {
    // Filter by genre if any selected
    if (selectedGenres.length > 0 && !movie.genres.some(g => selectedGenres.includes(g as GenreType))) {
      return false;
    }
    
    // Filter by rating
    if (movie.rating < minRating) {
      return false;
    }
    
    // Filter by year
    if (movie.releaseYear < yearRange[0] || movie.releaseYear > yearRange[1]) {
      return false;
    }
    
    return true;
  });

  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link to="/" className="mb-6 inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Browse</span>
        </Link>
        
        {/* Search Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              {searchQuery ? `Search results for "${searchQuery}"` : 'All Movies'}
            </h1>
            <p className="mt-1 text-gray-400">
              Found {filteredResults.length} {filteredResults.length === 1 ? 'movie' : 'movies'}
            </p>
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            icon={<SlidersHorizontal size={18} />}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="mb-8 rounded-lg bg-gray-800 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">Filters</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* Genres */}
              <div>
                <h3 className="mb-2 font-medium text-gray-300">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {allGenres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`
                        rounded-full px-3 py-1 text-sm transition-colors
                        ${selectedGenres.includes(genre)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                      `}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Rating */}
              <div>
                <h3 className="mb-2 font-medium text-gray-300">Minimum Rating</h3>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="mt-1 flex justify-between text-sm text-gray-400">
                  <span>0</span>
                  <span>{minRating.toFixed(1)}</span>
                  <span>10</span>
                </div>
              </div>
              
              {/* Year Range */}
              <div>
                <h3 className="mb-2 font-medium text-gray-300">Release Year</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1900"
                    max="2023"
                    value={yearRange[0]}
                    onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                    className="w-24 rounded bg-gray-700 px-3 py-1 text-white"
                  />
                  <span className="text-gray-400">to</span>
                  <input
                    type="number"
                    min="1900"
                    max="2023"
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                    className="w-24 rounded bg-gray-700 px-3 py-1 text-white"
                  />
                </div>
              </div>
            </div>
            
            {/* Filter Actions */}
            <div className="mt-6 flex justify-end gap-2">
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedGenres([]);
                  setMinRating(0);
                  setYearRange([1900, 2023]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
        
        {/* Results */}
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <MovieGrid movies={filteredResults} layout="list" />
        )}
      </div>
    </main>
  );
};

export default SearchResultsPage;