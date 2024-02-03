import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import baseApi from "../../../services/baseApi";

import styles from "./styles.module.scss";
import { Film } from "../../../types";

const Search = () => {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState<Film[] | undefined>([]);

  const searchFilms = async () => {
    const searchFilms = await baseApi.getFilmKeyword(search);
    setFilms(searchFilms?.films);
  };

  useEffect(() => {
    searchFilms();
  }, [search]);
  return (
    <div className={styles.search}>
      <p>Поиск:</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите фильм"
      />
      {search && (
        <ul className={styles.list}>
          {films &&
            films.length > 0 &&
            films.map((film) => (
              <Link
                className={styles.link_film}
                key={film.filmId}
                to={`/film/${film.filmId}`}
              >
                {film.nameRu}
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
