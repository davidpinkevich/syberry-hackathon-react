import axios from "axios";

const apiKey = "311f6ed2-2da0-4a4e-bda9-3c31df66674a";
const axiosConfig = {
  headers: {
    "x-api-key": apiKey,
  },
};

axios.defaults.baseURL = "https://kinopoiskapiunofficial.tech";

class FimlsApi {
  async getFilmKeyword(keyword: string) {
    try {
      const res = await axios.get(`/api/v2.1/films/search-by-keyword?keyword=${keyword}`, axiosConfig);
      return res.data;
    } catch (error) {
      console.error("Error fetching keyword film:", error);
    }
  }

  async getTopFilms() {
    try {
      const res = await axios.get(`/api/v2.2/films/collections`, axiosConfig);
      return res.data;
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  }

  async getFilm(id: number) {
    try {
      const res = await axios.get(`/api/v2.2/films/${id}`, axiosConfig);
      return res.data;
    } catch (error) {
      console.error("Error fetching film:", error);
    }
  }

  async getSimilarsFilm(id: number) {
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

  async getRandomFilm() {
    try {
      const res = await axios.get(`/api/v2.2/films/premieres`, axiosConfig);
      return res;
    } catch (error) {
      console.error("Error fetching random film:", error);
    }
  }
}

export default new FimlsApi();
