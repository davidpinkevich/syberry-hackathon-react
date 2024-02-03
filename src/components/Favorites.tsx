import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.sliceFavorites);
  return (
    <div>
      <Link to={"/favorites"}>Избранное ({favorites.length})</Link>
    </div>
  );
};

export default Favorites;
