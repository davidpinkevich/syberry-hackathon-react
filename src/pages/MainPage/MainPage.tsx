import { fetchRandom, fetchTopFilms } from "../../redux/slices/sliceMain";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";


const MainPage = () => {
  const dispatch = useAppDispatch();
  const { randomFilm, topFilms } = useAppSelector((state) => state.sliceMain);
  console.log("randomFilm: ", randomFilm);
  console.log("topFilms: ", topFilms);
  useEffect(() => {
    (async function () {
      dispatch(fetchRandom());
      dispatch(fetchTopFilms());
    })();
  }, []);
  return <div>
   
  </div>;
};

export default MainPage;
