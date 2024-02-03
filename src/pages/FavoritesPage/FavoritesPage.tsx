import AboutFilm from "../../components/Film/AboutFilm";
import { useAppSelector } from "../../hooks";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.sliceFavorites);
  return (
    <div className={styles.favorites}>
      {!favorites.length ? (
        <h1>Нет фильмов в избранном</h1>
      ) : (
        favorites.map((film) => (
          <AboutFilm key={film.kinopoiskId} film={film} />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
