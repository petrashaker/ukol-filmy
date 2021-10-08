import React from "react";

import './style.css';

import Actor from "../Actor";

const Movie = ({title, poster, year, rating, director, genre, cast }) => {
    return (
        <div className="movie-item">
            <img className="poster" src={poster} alt="poster" />
            <div className="main-info">
                <h1 className="title">{title}</h1>
                <p><span className="list-item">Rok vydání: </span>{year}</p>
                <p><span className="list-item">Žánr: </span>{genre}</p>
                <p><span className="list-item">Režie: </span>{director}</p>

                <h3>V hlavních rolích</h3>

                <div className="actors">
                { cast.map(actor => 
                                    <Actor  key = {actor.name}
                                            name = {actor.name} 
                                            as = {actor.as}
                                    />
                )}
                </div>
            </div>

            <div className="ribbon">
                <div className="rating"><span className="rating--big">{rating} / </span>10</div>
            </div>

        </div>
    )
}

export default Movie;