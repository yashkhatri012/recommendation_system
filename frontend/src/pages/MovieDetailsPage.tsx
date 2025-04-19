import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, Heart, ArrowLeft, Share2 } from 'lucide-react';
import { getMovieById, getRelatedMovies } from '../data/mockMovies';
import { Movie } from '../types/movie';
import Button from '../components/ui/Button';
import Rating from '../components/ui/Rating';
import CastSection from '../components/CastSection';
import MovieGrid from '../components/MovieGrid';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate API fetch
      const movieId = parseInt(id, 10);
      const foundMovie = getMovieById(movieId);
      
      if (foundMovie) {
        setMovie(foundMovie);
        setRelatedMovies(getRelatedMovies(foundMovie));
      }
      
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">Movie Not Found</h1>
        <p className="mb-6 text-gray-400">The movie you're looking for doesn't exist.</p>
        <Link to="/">
          <Button variant="primary" icon={<ArrowLeft size={18} />}>
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 pt-16">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Browse</span>
        </Link>
      </div>
      
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full md:h-[70vh]">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>
      
      {/* Movie Details */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-40 md:-mt-64 lg:-mt-80">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Movie Poster */}
            <div className="w-48 flex-none self-center overflow-hidden rounded-lg shadow-lg md:self-start lg:w-64">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Movie Info */}
            <div className="mt-6 md:mt-0">
              <div className="mb-2 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {movie.title}
              </h1>
              
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-300">
                <Rating value={movie.rating} />
                <span>{movie.releaseYear}</span>
                <span>•</span>
                <span>{movie.duration}</span>
              </div>
              
              <p className="mb-6 text-gray-300 md:text-lg">
                {movie.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Play size={18} fill="white" />}
                >
                  Watch Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Plus size={18} />}
                >
                  Add to Watchlist
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={<Heart size={18} />}
                >
                  Favorite
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={<Share2 size={18} />}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
          
          {/* Movie Trailer */}
          {movie.trailer && (
            <div className="my-12">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">Trailer</h2>
              <div className="relative overflow-hidden rounded-xl pb-[56.25%]">
                <iframe
                  src={movie.trailer}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute left-0 top-0 h-full w-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          
          {/* Cast */}
          <CastSection movie={movie} />
          
          {/* Related Movies */}
          {relatedMovies.length > 0 && (
            <MovieGrid title="You May Also Like" movies={relatedMovies} />
          )}
        </div>
      </div>
    </main>
  );
};

export default MovieDetailsPage;