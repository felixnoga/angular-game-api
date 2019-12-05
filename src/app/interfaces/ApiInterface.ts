export interface ApiInterface {
  id: number;
  cover: {id: number; height: string; url: string}
  name: string;
  platforms: any[];
  previous?: string;
  genres: {id: number; name: string; slug: string; } [];
  summary: string;
  total_rating: number;
}

