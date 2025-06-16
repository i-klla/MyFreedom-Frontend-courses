import CustomNavbar from '../../components/CustomNavbar/CustomNavbar'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { useParams } from 'react-router'
import classes from './MoviePage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function MoviePage() {
    const [movie, setMovie] = useState() // состояние для хранения информации о фильме
    const params = useParams() // useParams - хук, который позволяет нам получить параметры из URL  // например, если у нас URL /movie/123, то params будет {id: '123'}
    console.log(params)

    useEffect(() => {
        if(params?.id) {
            fetchMovieById(params.id) // если id есть, то вызываем функцию для получения фильма по id
        }

    }, [params])

    async function fetchMovieById(id) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            if (response?.status === 200 && response?.data) { 
                setMovie(response.data) // если запрос успешен, то сохраняем фильм в состояние
            }
        }
        catch (err) {
            console.error(err)
            console.log("Error when fetching movie")
        }
    }

    return (
        <>
        <CustomNavbar/>
        {movie && 
                <MovieDetails
                    title={movie.title}
                    description={movie.overview}
                    tagline={movie.tagline}
                    homepage={movie.homepage}
                    originalLanguage={movie.original_language}
                    releaseDate={movie.release_date}
                    averageVote={movie.vote_average}
                    status={movie.status}
                    image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null} // проверяем, есть ли изображение
                    genres={movie.genres} // передаем жанры фильма
                />
            }
        </>
    )
}

export default MoviePage
