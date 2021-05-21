import React,{useState} from 'react';
import ResultCard from './ResultCard';
require('dotenv').config();
function Add() {
    const [query,setQuery]=useState("");
    const [results,setResults]=useState([]);
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=43445f45f2b60ce28b4f818f1dfe303d&language=en-US&page=1&include_adult=false&query=${e.target.value}`
          )
        .then((res)=>res.json())
        .then((data)=>{
           if(!data.errors){
               setResults(data.results);
           }else{
               setResults([]);
           }
        })
    }
    return (
        <div>
           <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        <div className="input-wrapper">
                            <input type="text" 
                                placeholder="search for a movie"
                                value={query}
                                onChange={onChange}
                            />

                        </div>
                        {results.length > 0 &&(
                            <ul className="results">
                                {results.map((movie)=>(
                                    <li key={movie.id}>
                                        <ResultCard movie={movie}/>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Add
