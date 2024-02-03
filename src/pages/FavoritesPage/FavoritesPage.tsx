import AboutFilm from "../../components/Film/AboutFilm"
import { useAppSelector } from "../../hooks"


const FavoritesPage = () => {
    const { favorites } = useAppSelector((state) => state.sliceFavorites)
    return (
        <div>
            {
                !favorites.length
                    ? <h1>Нет фильмов в избранном</h1>
                    : favorites.map(film => (
                        <AboutFilm key={film.kinopoiskId} {...film} />
                    ))
            }
        </div>

    )
}

export default FavoritesPage