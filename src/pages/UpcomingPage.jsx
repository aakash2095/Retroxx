import React,{useEffect,useState} from 'react'
import Moviecard from '../components/MovieCard';



const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const UpcomingPage = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMovie = async() => {
      const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      const data = await response.json()
      setMovies(data.results)
      console.log(data.results)
    } 
    fetchUpcomingMovie();
    
  }, [])
  
  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div>
      {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default UpcomingPage