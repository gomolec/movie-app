import { Movie } from "./movie";

export interface MovieFull extends Movie {
  original_title: string;
  original_language: string;
  backdrop_path: string | null;
  runtime: number;
  vote_average: number;
  genres: { id: number; name: string; }[];
  production_companies: { id: number; name: string; }[];
  spoken_languages: { name: string; }[];
  credits?: {
    cast: {
      id: number;
      name: string;
      character: string;
    }[];
    crew: {
      id: number;
      name: string;
      job: string;
    }[];
  };
}
