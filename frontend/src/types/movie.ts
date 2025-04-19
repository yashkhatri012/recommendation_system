export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  releaseYear: number;
  rating: number;
  duration: string;
  genres: string[];
  description: string;
  trailer?: string;
  cast: {
    name: string;
    character: string;
    photoUrl: string;
  }[];
}

export interface MovieCategory {
  id: number;
  name: string;
  movies: Movie[];
}

export type GenreType = 
  | 'Action' 
  | 'Adventure' 
  | 'Animation' 
  | 'Comedy' 
  | 'Crime' 
  | 'Documentary' 
  | 'Drama' 
  | 'Family' 
  | 'Fantasy' 
  | 'History' 
  | 'Horror' 
  | 'Music' 
  | 'Mystery' 
  | 'Romance' 
  | 'Science Fiction' 
  | 'Thriller' 
  | 'War' 
  | 'Western';

export interface SearchFilters {
  query: string;
  genres: GenreType[];
  minRating: number;
  yearRange: [number, number];
}