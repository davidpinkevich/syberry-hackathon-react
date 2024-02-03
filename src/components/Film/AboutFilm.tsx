import styles from "./Aboutffilm.module.scss";
import { Film } from "../../types";
import ButtonPlay from "../ButtonPlay/ButtonPlay";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/slices/sliceFavorites";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

type Props = {
  film: Film | undefined;
};
const AboutFilm = ({ film }: Props) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.sliceFavorites);

  // const { genres, countries, duration, year, premiereRu } = film;

  function addFavorites(props: Film) {
    dispatch(addToFavorites(props));
  }
  function removeFavorites(id: number) {
    dispatch(removeFromFavorites(id));
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <img src={film?.posterUrlPreview} />
      </div>
      <div className={styles.infoFilm}>
        <div className={styles.title}>
          <h3>{film?.nameRu}</h3>
        </div>
        <div className={styles.detailFilm}>
          <ButtonPlay />
          <div className={styles.info}>
            {<span>Страна:</span>}
            <div className={styles.block}>
              {film?.countries?.map((item, i) => (
                <div key={i}>
                  <p>{item.country}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.info}>
            {<span>Жанр:</span>}
            <div className={styles.block}>
              {film?.genres?.map((item, i) => (
                <div key={i}>
                  <p>{item.genre} </p>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.info}>
            {<span>Продолжительность:</span>} {film?.duration}
          </p>
          <p className={styles.info}>
            {<span>Год:</span>} {film?.year} г.
          </p>
          <p className={styles.info}>
            {<span>Премьера:</span>} {film?.premiereRu}
          </p>
          <div style={{ display: "flex" }}>
            {/* <AiOutlineLike
              size={40}
              onClick={() => {
                if (film) addFavorites(film);
              }}
            />
            <AiOutlineDislike
              size={40}
              onClick={() => {
                if (film) removeFavorites(film?.kinopoiskId);
              }}
            /> */}
            <AiOutlineLike
              style={{
                cursor: "pointer",
              }}
              className={` ${
                favorites.find((item) => item.kinopoiskId === film?.kinopoiskId)
                  ? styles.active
                  : ""
              } `}
              size={40}
              onClick={() => {
                if (film) addFavorites(film);
              }}
            />
            <AiOutlineDislike
              size={40}
              onClick={() => {
                if (film) removeFavorites(film.kinopoiskId);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
