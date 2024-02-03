import { BeatLoader } from "react-spinners";
import { fetchRandom, fetchTopFilms } from "../../redux/slices/sliceMain";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AboutfFilm from "../../components/Film/AboutfFilm";
import { useEffect } from "react";
import styles from "./MainPage.module.scss";


const MainPage = () => {
  const dispatch = useAppDispatch();
  const { randomFilm, loadRandom } = useAppSelector(
    (state) => state.sliceMain
  );

  useEffect(() => {
    (async function () {
      dispatch(fetchRandom());
      dispatch(fetchTopFilms());
    })();
  }, []);
  return (
    <div className={styles.main}>
      {loadRandom && <BeatLoader size={20} color="gray" />}
      {!loadRandom && <AboutfFilm {...randomFilm} />}
    </div>
  );
};

export default MainPage;
