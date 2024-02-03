import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
import { fetchRandom, fetchTopFilms } from "../../redux/slices/sliceMain";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AboutfFilm from "../../components/Film/AboutFilm";
import { SwiperFilms } from "../../components/SwiperFilms/SwiperFilms";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { randomFilm, topFilms, loadRandom } = useAppSelector(
    (state) => state.sliceMain
  );

  useEffect(() => {
    dispatch(fetchRandom());
    dispatch(fetchTopFilms());
  }, []);

  return (
    <div className={styles.main}>
      {loadRandom && <BeatLoader size={20} color="gray" />}
      {!loadRandom && <AboutfFilm {...randomFilm} />}
      <div className={styles.text}>Фильмы для вас:</div>
      {<SwiperFilms topFilms={topFilms ? topFilms : []} />}
    </div>
  );
};

export default MainPage;
