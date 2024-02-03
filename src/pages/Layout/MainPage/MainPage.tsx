import { fetchPhotos } from "../../../redux/slices/sliceMain";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { randomFilm } = useAppSelector((state) => state.sliceMain);
  console.log(randomFilm);
  useEffect(() => {
    (async function () {
      dispatch(fetchPhotos());
    })();
  }, []);
  return <div>MainPage</div>;
};

export default MainPage;
