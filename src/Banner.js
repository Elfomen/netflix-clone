import React, { useEffect , useState} from 'react';
import './Banner.css';
import instance from './axios';
import request from './request';

export default function Banner(){

    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function getMovie(){
        const movieUrl =await instance.get(request.fetchNetflixOriginals);
        console.log(movieUrl.data.results);
        if(!movieUrl)return null;
        setMovie(movieUrl.data.results[Math.floor(Math.random() * movieUrl.data.results.length - 1)]);
        return movieUrl;
        }

        getMovie();
    } , [])

    //console.log(movie);


    return(
        <header className="banner" style={{
            backgroundSize : "cover" , 
            backgroundImage : `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` , 
            backgroundPosition : "center center"
        }}>
            <div className="banner_Content">
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className="bannerbutton">
                    <button>Play</button>
                    <button>My List</button>
                </div>

                <h1 className="banner_description">{movie?.overview}</h1>

                <div className="banner_fadeButton"></div>
            </div>
        </header>
    );
}