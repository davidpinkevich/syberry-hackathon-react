export type Film = {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  premiereRu: string;
  duration: number;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
};

export type TopFilmsResponse = {
  total: number;
  totalPages: number;
  items: Film[];
};

export type SimilarFilmsResponse = {
  total: number;
  totalPages: number;
  items: Film[];
};

export type FilmSearchResponse = {
  keyword: string;
  pagesCount: number;
  searchFilmsCountResult: number;
  films: Film[];
};

export type Genre = {
  genre: string;
};

export type Country = {
  country: string;
};


export type User = {
  login: string;
  password: string;
}