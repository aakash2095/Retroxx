import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const res =await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const data = await res.json();
      setMovie(data);
      console.log(data)
    }

    fetchMovie();
  
   
  }, [id])
  
  if (!movie) return <div>Ruk JAA Bhai</div>

  return (
    <div className='movie-details'>
      <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <strong>{movie.overview}</strong>
      <h4>Release Date : {movie.release_date}</h4>
      <strong>IMDb Rating : {movie.vote_average}</strong>
    </div>
  )
}

export default MovieDetails