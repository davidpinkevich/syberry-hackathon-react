import axios from "axios";
import { Film, FilmSearchResponse, SimilarFilmsResponse } from "../types";

const month = new Date().toLocaleString("en", { month: "long" }).toUpperCase();
const year = new Date().getFullYear();
const apiKey = "311f6ed2-2da0-4a4e-bda9-3c31df66674a";
const axiosConfig = {
  headers: {
    "x-api-key": apiKey,
  },
};

axios.defaults.baseURL = "https://kinopoiskapiunofficial.tech";

class FilmsApi {
  async getFilmKeyword(
    keyword: string
  ): Promise<FilmSearchResponse | undefined> {
    try {
      const res = await axios.get(
        `/api/v2.1/films/search-by-keyword?keyword=${keyword}`,
        axiosConfig
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching keyword film:", error);
    }
  }

  async getTopFilms(): Promise<FilmSearchResponse | undefined> {
    try {
      const res = await axios.get(`/api/v2.2/films/collections`, axiosConfig);
      return res.data;
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  }

  async getFilm(id: number): Promise<{ data: Film } | undefined> {
    try {
      const res = await axios.get(`/api/v2.1/films/${id}`, axiosConfig);
      return res.data;
    } catch (error) {
      console.error("Error fetching film:", error);
    }
  }

  async getSimilarsFilm(id: number): Promise<SimilarFilmsResponse | undefined> {
    try {
      const res = await axios.get(
        `/api/v2.2/films/${id}/similars`,
        axiosConfig
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching similars film:", error);
    }
  }

  async getRandomFilm(): Promise<{ items: Film[] } | undefined> {
    try {
      const res = await axios.get(
        `/api/v2.2/films/premieres?year=${year}&month=${month}`,
        axiosConfig
      );
      console.log("res: ", res);
      return res.data;
    } catch (error) {
      console.error("Error fetching random film:", error);
    }
  }
}

export default new FilmsApi();
