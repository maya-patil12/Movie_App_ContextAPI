import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard';
export default function Watched() {
    const {watched}=useContext(GlobalContext);
    return (
        <div>
           
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading text-center">Watched Movies</h1>
                        <span className="count-pill">{watched.length}{watched.length === 1 ? 'Movie' : 'Movies'}</span>
                    </div>
                    
                        {watched.length > 0 ? (
                            <div className="movie-grid">
                            {watched.map(movie=>(
                                <MovieCard movie={movie} type="watched" kye={movie.id}></MovieCard>
                            ))}
                        </div>
                        ):(
                            <h2 className="no-movies">No Movies are there in your list</h2>
                        )} 
                    
                </div>
            </div>
        </div>
    )
}
