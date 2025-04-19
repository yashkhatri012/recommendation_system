import React, { useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsExpanded(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsExpanded(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setIsExpanded(true);
  };

  return (
    <div className="relative">
      <form 
        onSubmit={handleSearch}
        className={`
          flex items-center transition-all duration-300
          ${isExpanded ? 'w-full md:w-96' : 'w-10 md:w-40'}
        `}
      >
        <div className="relative flex w-full items-center">
          <div 
            className={`
              absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3 text-gray-400
              ${isExpanded ? '' : 'pr-3'}
            `}
            onClick={() => setIsExpanded(true)}
          >
            <Search size={18} />
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Search movies..."
            className={`
              h-10 rounded-lg bg-gray-800 pl-10 text-white placeholder-gray-400
              focus:outline-none focus:ring-1 focus:ring-blue-500
              ${isExpanded ? 'pr-10 w-full' : 'w-10 md:w-40 pr-0 md:pr-4'}
              transition-all duration-300
            `}
          />
          
          {isExpanded && query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 text-gray-400 hover:text-gray-200"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        {isExpanded && (
          <Button
            type="button"
            variant="ghost"
            className="ml-2"
            onClick={toggleFilters}
            icon={<SlidersHorizontal size={18} />}
          >
            Filters
          </Button>
        )}
      </form>
      
      {showFilters && isExpanded && (
        <div className="absolute mt-2 w-full rounded-lg bg-gray-800 p-4 shadow-lg">
          <h3 className="mb-2 font-medium text-white">Filter by:</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-300">Genre</label>
              <select className="mt-1 w-full rounded bg-gray-700 px-2 py-1 text-sm text-white">
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="sci-fi">Sci-Fi</option>
              </select>
            </div>
            
            
            
            
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={handleSearch}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;