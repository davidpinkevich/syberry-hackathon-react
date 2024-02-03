import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styles from './styles.module.scss'

const arr = [
    {
        "filmId": 263531,
        "nameRu": "Мстители",
        "nameEn": "The Avengers",
        "type": "FILM",
        "year": "2012",
        "description": "США, Джосс Уидон(фантастика)",
        "filmLength": "2:17",
        "countries": [
            {
                "country": "США"
            }
        ],
        "genres": [
            {
                "genre": "фантастика"
            }
        ],
        "rating": "NOTE!!! 7.9 for released film or 99% if film have not released yet",
        "ratingVoteCount": 284245,
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
    },
    {
        "filmId": 263532,
        "nameRu": "Мстители 2",
        "nameEn": "The Avengers 2",
        "type": "FILM",
        "year": "2012",
        "description": "США, Джосс Уидон(фантастика)",
        "filmLength": "2:17",
        "countries": [
            {
                "country": "США"
            }
        ],
        "genres": [
            {
                "genre": "фантастика"
            }
        ],
        "rating": "NOTE!!! 7.9 for released film or 99% if film have not released yet",
        "ratingVoteCount": 284245,
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
    },

]

const Search = () => {
    const [search, setSearch] = useState('')
    const [films, setFilms] = useState(arr)

    const searchFilms = async () => {
        const searchFilms = await fetch('').then(res => res.json())
        setFilms(searchFilms)
    }

    useEffect(() => {
        searchFilms()
    }, [search])
    return (
        <div className={styles.search}>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Введите фильм" />
            {
                search && (<ul className={styles.list}>
                    {

                        films.map(film => (
                            <Link key={film.filmId} to={`/film/${film.filmId}`}>{film.nameRu}</Link>
                        ))
                    }
                </ul>)
            }
        </div>
    )
}

export default Search