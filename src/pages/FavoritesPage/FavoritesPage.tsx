import AboutfFilm from "../../components/Film/AboutfFilm";
import { useAppSelector } from "../../hooks";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.sliceFavorites);
  return (
    <div className={styles.favorites}>
      {!favorites.length ? (
        <h1>Нет фильмов в избранном</h1>
      ) : (
        favorites.map((film) => <AboutfFilm key={film.filmId} {...film} />)
      )}
    </div>
  );
};

export default FavoritesPage;
