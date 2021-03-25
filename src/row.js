import React , {useState , useEffect} from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import instance from './axios'; // we could also rename instance to any thing we want because we exported default in the axios file
const base_url = `https://image.tmdb.org/t/p/original/`; // this is our base url for fetching the images 



export default function Row({title , fetchUrl , isLargeRow}){

    const [movies , SetMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");

    const opts = {
        height : "390", 
        width : "100%" , 
        playerVars : {
            //"https://developers.google.com/youtube/player_parameters" , 
            autoplay : 0
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl)setTrailerUrl("");
        else {
            movieTrailer(movie?.name || movie?.title || movie?.originalTitle).then ((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                const re = urlParams.get("v")
                setTrailerUrl(re);
                alert(re);
                
            }).catch(console.log); 

            
        }
    }

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            SetMovies(request.data.results);
        }

        fetchData();
    } , [fetchUrl]);//the dependency array is empty meaning run once when the row is loaded and donnot run again

    console.log(movies);
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className={`row_posters ${isLargeRow && "row_posters_large"}`}>
                {movies.map((movie) => (
                    <img onClick={() => handleClick(movie)}  key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className="row_poster"/>
                ))}
            </div>

         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}