import { Movie, MovieCategory } from '../types/movie';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2010,
    rating: 8.8,
    duration: "2h 28m",
    genres: ["Science Fiction", "Action", "Adventure"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    cast: [
      {
        name: "Leonardo DiCaprio",
        character: "Dom Cobb",
        photoUrl: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Joseph Gordon-Levitt",
        character: "Arthur",
        photoUrl: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Ellen Page",
        character: "Ariadne",
        photoUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1994,
    rating: 9.3,
    duration: "2h 22m",
    genres: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    cast: [
      {
        name: "Tim Robbins",
        character: "Andy Dufresne",
        photoUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Morgan Freeman",
        character: "Ellis Boyd 'Red' Redding",
        photoUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2008,
    rating: 9.0,
    duration: "2h 32m",
    genres: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    cast: [
      {
        name: "Christian Bale",
        character: "Bruce Wayne",
        photoUrl: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Heath Ledger",
        character: "Joker",
        photoUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://images.pexels.com/photos/9888466/pexels-photo-9888466.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1994,
    rating: 8.9,
    duration: "2h 34m",
    genres: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    cast: [
      {
        name: "John Travolta",
        character: "Vincent Vega",
        photoUrl: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Samuel L. Jackson",
        character: "Jules Winnfield",
        photoUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 5,
    title: "The Godfather",
    posterUrl: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/2347662/pexels-photo-2347662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1972,
    rating: 9.2,
    duration: "2h 55m",
    genres: ["Crime", "Drama"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    cast: [
      {
        name: "Marlon Brando",
        character: "Vito Corleone",
        photoUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Al Pacino",
        character: "Michael Corleone",
        photoUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 6,
    title: "Forrest Gump",
    posterUrl: "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/215630/pexels-photo-215630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1994,
    rating: 8.8,
    duration: "2h 22m",
    genres: ["Drama", "Romance"],
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    cast: [
      {
        name: "Tom Hanks",
        character: "Forrest Gump",
        photoUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Robin Wright",
        character: "Jenny Curran",
        photoUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 7,
    title: "Fight Club",
    posterUrl: "https://images.pexels.com/photos/844443/pexels-photo-844443.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/2383434/pexels-photo-2383434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1999,
    rating: 8.8,
    duration: "2h 19m",
    genres: ["Drama"],
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    cast: [
      {
        name: "Brad Pitt",
        character: "Tyler Durden",
        photoUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Edward Norton",
        character: "Narrator",
        photoUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 8,
    title: "Matrix",
    posterUrl: "https://images.pexels.com/photos/4257728/pexels-photo-4257728.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1999,
    rating: 8.7,
    duration: "2h 16m",
    genres: ["Action", "Science Fiction"],
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    cast: [
      {
        name: "Keanu Reeves",
        character: "Neo",
        photoUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Laurence Fishburne",
        character: "Morpheus",
        photoUrl: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  }
];

export const movieCategories: MovieCategory[] = [
  {
    id: 1,
    name: "Trending Now",
    movies: mockMovies.filter(movie => [1, 3, 8].includes(movie.id))
  },
  {
    id: 2,
    name: "Top Rated",
    movies: mockMovies.filter(movie => [2, 5, 3].includes(movie.id))
  },
  {
    id: 3,
    name: "Classic Films",
    movies: mockMovies.filter(movie => [5, 2, 6].includes(movie.id))
  },
  {
    id: 4,
    name: "Recommended For You",
    movies: mockMovies.filter(movie => [7, 4, 1].includes(movie.id))
  }
];

export const getMovieById = (id: number): Movie | undefined => {
  return mockMovies.find(movie => movie.id === id);
};

export const searchMovies = (query: string): Movie[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) || 
    movie.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery)) ||
    movie.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedMovies = (movie: Movie): Movie[] => {
  // Get movies with similar genres
  const similarGenreMovies = mockMovies.filter(
    m => m.id !== movie.id && m.genres.some(genre => movie.genres.includes(genre))
  );
  
  return similarGenreMovies.slice(0, 3);
};