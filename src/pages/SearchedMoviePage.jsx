import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';  //gives current url/path
import Moviecard from '../components/MovieCard';



const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

//&language=en-US&page=1 => Query Paramenter
// <int:id> => Body parameter

function usequery(){
  return new URLSearchParams(useLocation().search)
}


const SearchedMoviePage = () => {

  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(true)

  const query = usequery().get('query');  // search?query=Wakeupsid

  useEffect(() => {
    const fetchMovie = async() => {
      if (query) {
        setLoading(true)
        try {
          const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-us&query=${query}&page=1`)
          const data = await response.json();
          setMovies(data.results || [])
          console.log(data.results)
        } catch (err) {
          console.error('Failed to fetch',err)
        }
        finally{
          setLoading(false)
        }
      }
    }
  
    fetchMovie();
  }, [query])
  
  


  
  return (
    <div className='searched-Movie'>
    <h2>Searched Movies</h2>
    <div className='movie-grid'>
      {loading ? (
        <p>Loading movies...</p> 
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies found for "{query}".</p> 
      )}
    </div>
  </div>
  )
}

export default SearchedMoviePage



/*
condition ? Executes if true : executes if false  
*/