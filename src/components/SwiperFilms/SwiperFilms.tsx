import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import { CardFilm } from "../Cards/CardFilm/CardFilm";

import { Film } from "../../types";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import styles from "./swiper.module.scss";

interface ISwiperFilmsProps {
  topFilms: Film[] | undefined;
}

export const SwiperFilms: FC<ISwiperFilmsProps> = ({ topFilms = [] }) => {
  return (
    <Swiper
      navigation={true}
      mousewheel={true} 
      modules={[Navigation, Mousewheel]}
      slidesPerView={4}
      spaceBetween={30}
      className={`${styles.swiper} mySwiper`}
    >
      {topFilms.length !== 0 &&
        topFilms.map((film, index) => (
          <SwiperSlide key={`${film.nameRu}${index}`}>
            <CardFilm image={film.posterUrl} alt={film.nameRu} descr={film.nameRu} id={film.kinopoiskId}/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
