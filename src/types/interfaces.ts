export interface PersonDetails {
  biography: string;
  birthday: string;
  id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

export interface MovieDetails {
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
}
