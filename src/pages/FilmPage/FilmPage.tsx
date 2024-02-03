import { useEffect } from "react";
import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import AboutFilm from "../../components/Film/AboutFilm";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFilm } from "../../redux/slices/sliceMain";
import styles from "./FilmPage.module.scss";

const FilmPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { film, loadRandom } = useAppSelector((state) => state.sliceMain);
  console.log("test", id, film);
  useEffect(() => {
    dispatch(fetchFilm((id && typeof +id) === "number" ? Number(id) : 1));
  }, []);
  return (
    <div className={styles.film_page}>
      {loadRandom && <BeatLoader size={20} color="gray" />}
      {!loadRandom && <AboutFilm {...film} />}
    </div>
  );
};

export default FilmPage;
