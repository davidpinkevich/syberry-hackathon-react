import { FC } from "react";

import styles from "./film.module.scss";
import { Link } from "react-router-dom";

interface ICardFilmProps {
  image: string;
  descr: string;
  alt: string;
  id: number;
}

export const CardFilm: FC<ICardFilmProps> = ({ image, descr, alt, id }) => {
  return (
    <div className={styles.root}>
      <Link to={`/film/${id}`}>
        <div className={styles.wrapperImage}>
          <img src={image} alt={alt} className={styles.image} />
        </div>
        <p className={styles.descr}>{descr}</p>
      </Link>
    </div>
  );
};
