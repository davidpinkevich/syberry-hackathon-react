import AboutfFilm from "../../components/Film/AboutfFilm"
import { Film } from "../../types"

const arr = [
    {
        "kinopoiskId": 1115471,
        "imdbId": "tt14536120",
        "nameRu": "Мастер и Маргарита",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "драма"
            },
            {
                "genre": "фэнтези"
            }
        ],
        "ratingKinopoisk": null,
        "ratingImdb": null,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1115471.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1115471.jpg"
    },
    {
        "kinopoiskId": 5368058,
        "imdbId": null,
        "nameRu": "Иные",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "приключения"
            },
            {
                "genre": "фэнтези"
            }
        ],
        "ratingKinopoisk": 7.5,
        "ratingImdb": null,
        "year": 2023,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5368058.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5368058.jpg"
    },
    {
        "kinopoiskId": 5267249,
        "imdbId": null,
        "nameRu": "Золотое дно",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "драма"
            }
        ],
        "ratingKinopoisk": 7.7,
        "ratingImdb": null,
        "year": 2024,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5267249.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5267249.jpg"
    },
    {
        "kinopoiskId": 1311936,
        "imdbId": "tt11859946",
        "nameRu": "Трудные подростки",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "драма"
            },
            {
                "genre": "комедия"
            },
            {
                "genre": "спорт"
            }
        ],
        "ratingKinopoisk": 8.1,
        "ratingImdb": 6.9,
        "year": 2019,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1311936.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1311936.jpg"
    },
    {
        "kinopoiskId": 5304403,
        "imdbId": "tt28429213",
        "nameRu": "Слово пацана. Кровь на асфальте",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "драма"
            },
            {
                "genre": "криминал"
            }
        ],
        "ratingKinopoisk": 8.4,
        "ratingImdb": 7.6,
        "year": 2023,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5304403.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5304403.jpg"
    },
    {
        "kinopoiskId": 4626783,
        "imdbId": "tt15314262",
        "nameRu": "Пчеловод",
        "nameEn": null,
        "nameOriginal": "The Beekeeper",
        "countries": [
            {
                "country": "США"
            },
            {
                "country": "Великобритания"
            }
        ],
        "genres": [
            {
                "genre": "триллер"
            },
            {
                "genre": "боевик"
            }
        ],
        "ratingKinopoisk": 6.7,
        "ratingImdb": 6.7,
        "year": 2024,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4626783.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4626783.jpg"
    },
    {
        "kinopoiskId": 5089024,
        "imdbId": null,
        "nameRu": "Конец славы",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "комедия"
            }
        ],
        "ratingKinopoisk": null,
        "ratingImdb": null,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5089024.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5089024.jpg"
    },
    {
        "kinopoiskId": 1395460,
        "imdbId": "tt14675430",
        "nameRu": "Медиатор",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "триллер"
            },
            {
                "genre": "драма"
            }
        ],
        "ratingKinopoisk": 8.1,
        "ratingImdb": null,
        "year": 2021,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1395460.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1395460.jpg"
    },
    {
        "kinopoiskId": 1311129,
        "imdbId": "tt26505281",
        "nameRu": "Воздух",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "драма"
            },
            {
                "genre": "военный"
            },
            {
                "genre": "история"
            }
        ],
        "ratingKinopoisk": 6.1,
        "ratingImdb": 5.6,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1311129.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1311129.jpg"
    },
    {
        "kinopoiskId": 5047468,
        "imdbId": null,
        "nameRu": "Холоп 2",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "комедия"
            }
        ],
        "ratingKinopoisk": 6.8,
        "ratingImdb": 6.0,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5047468.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5047468.jpg"
    },
    {
        "kinopoiskId": 4922959,
        "imdbId": "tt17009348",
        "nameRu": "Догмен",
        "nameEn": null,
        "nameOriginal": "Dogman",
        "countries": [
            {
                "country": "Франция"
            }
        ],
        "genres": [
            {
                "genre": "боевик"
            }
        ],
        "ratingKinopoisk": 7.8,
        "ratingImdb": 6.7,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4922959.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4922959.jpg"
    },
    {
        "kinopoiskId": 79429,
        "imdbId": null,
        "nameRu": "Мастер и Маргарита",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "триллер"
            },
            {
                "genre": "драма"
            },
            {
                "genre": "мелодрама"
            },
            {
                "genre": "детектив"
            }
        ],
        "ratingKinopoisk": 8.0,
        "ratingImdb": 7.5,
        "year": 2005,
        "type": "MINI_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/79429.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/79429.jpg"
    },
    {
        "kinopoiskId": 5047464,
        "imdbId": null,
        "nameRu": "Бременские музыканты",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "приключения"
            },
            {
                "genre": "фэнтези"
            },
            {
                "genre": "комедия"
            },
            {
                "genre": "семейный"
            }
        ],
        "ratingKinopoisk": 7.1,
        "ratingImdb": null,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5047464.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5047464.jpg"
    },
    {
        "kinopoiskId": 5274399,
        "imdbId": null,
        "nameRu": "Я — медведь",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "комедия"
            }
        ],
        "ratingKinopoisk": null,
        "ratingImdb": null,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5274399.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5274399.jpg"
    },
    {
        "kinopoiskId": 5330291,
        "imdbId": "tt28115317",
        "nameRu": "Тёща",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "комедия"
            }
        ],
        "ratingKinopoisk": 6.0,
        "ratingImdb": 6.0,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5330291.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5330291.jpg"
    },
    {
        "kinopoiskId": 4443734,
        "imdbId": "tt21064076",
        "nameRu": "Фишер",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "триллер"
            },
            {
                "genre": "драма"
            },
            {
                "genre": "криминал"
            },
            {
                "genre": "детектив"
            }
        ],
        "ratingKinopoisk": 7.8,
        "ratingImdb": 6.7,
        "year": 2023,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4443734.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4443734.jpg"
    },
    {
        "kinopoiskId": 681831,
        "imdbId": "tt2356777",
        "nameRu": "Настоящий детектив",
        "nameEn": null,
        "nameOriginal": "True Detective",
        "countries": [
            {
                "country": "США"
            }
        ],
        "genres": [
            {
                "genre": "триллер"
            },
            {
                "genre": "драма"
            },
            {
                "genre": "криминал"
            },
            {
                "genre": "детектив"
            }
        ],
        "ratingKinopoisk": 8.6,
        "ratingImdb": 8.9,
        "year": 2014,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/681831.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/681831.jpg"
    },
    {
        "kinopoiskId": 4476454,
        "imdbId": null,
        "nameRu": "Сергий против нечисти",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "боевик"
            },
            {
                "genre": "фэнтези"
            },
            {
                "genre": "комедия"
            },
            {
                "genre": "ужасы"
            }
        ],
        "ratingKinopoisk": 6.6,
        "ratingImdb": 6.6,
        "year": 2022,
        "type": "TV_SERIES",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4476454.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4476454.jpg"
    },
    {
        "kinopoiskId": 1013343,
        "imdbId": "tt6166392",
        "nameRu": "Вонка",
        "nameEn": null,
        "nameOriginal": "Wonka",
        "countries": [
            {
                "country": "США"
            },
            {
                "country": "Великобритания"
            },
            {
                "country": "Канада"
            }
        ],
        "genres": [
            {
                "genre": "приключения"
            },
            {
                "genre": "фэнтези"
            },
            {
                "genre": "комедия"
            },
            {
                "genre": "семейный"
            },
            {
                "genre": "мюзикл"
            }
        ],
        "ratingKinopoisk": 7.3,
        "ratingImdb": 7.3,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1013343.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1013343.jpg"
    },
    {
        "kinopoiskId": 4959134,
        "imdbId": "tt23737556",
        "nameRu": "По щучьему велению",
        "nameEn": null,
        "nameOriginal": null,
        "countries": [
            {
                "country": "Россия"
            }
        ],
        "genres": [
            {
                "genre": "приключения"
            },
            {
                "genre": "фэнтези"
            },
            {
                "genre": "семейный"
            }
        ],
        "ratingKinopoisk": 7.8,
        "ratingImdb": 6.3,
        "year": 2023,
        "type": "FILM",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4959134.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4959134.jpg"
    }
]

const FavoritesPage = () => {
    const films: Film[] = JSON.parse(localStorage.getItem('favorites')!) || arr
    return (
        <div>
            {
                !films.length
                    ? <h1>Нет фильмов в избранном</h1>
                    : films.map(film => (
                        <AboutfFilm key={film.filmId} {...film} />
                    ))
            }
        </div>

    )
}

export default FavoritesPage