import React from "react";

import './style.css';

import Movie from "../Movie";




const MovieList = ({movies}) => {
    return (
        <>
        <div className="movie-list">
            { movies.map(movie => 
                            <Movie key = {movie.id}
                                    poster = {movie.poster}
                                    title = {movie.title}
                                    year = {movie.year}  
                                    genre = {movie.genre}   
                                    director = {movie.director} 
                                    rating = {movie.rating}
                                    cast = {movie.cast}
            /> )} 
        </div>
        </>
    )
}

export default MovieList;