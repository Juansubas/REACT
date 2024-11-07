import { Movie } from "./Movie";

export interface ApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
  }