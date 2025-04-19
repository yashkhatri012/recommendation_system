import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';

// Custom scrollbar styling
import './styles/scrollbar.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gray-900">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;