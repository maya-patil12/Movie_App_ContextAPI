import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
function MovieControls({movie,type}) {
const {removeMovieFromWatchlist,removeMovieFromWatched,moveToWatchlist,addMovieToWatched}=useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type==='watchlist' &&(
                <>
                    <button className="ctrl-btn" onClick={()=>addMovieToWatched(movie)}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button className="ctrl-btn"
                    onClick={()=>removeMovieFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type==='watched' &&(
                <>
                    <button className="ctrl-btn" onClick={()=>moveToWatchlist(movie)}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button className="ctrl-btn"
                    onClick={()=>removeMovieFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls;
