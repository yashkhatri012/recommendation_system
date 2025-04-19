import React from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import { movieCategories, mockMovies } from '../data/mockMovies';

const HomePage: React.FC = () => {
  // Select featured movies for the hero section
  const featuredMovies = mockMovies.slice(0, 3);
  
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <HeroSection movies={featuredMovies} />
      
      {/* Movie Categories */}
      <div className="container mx-auto px-4 pb-16 pt-8">
        {movieCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;