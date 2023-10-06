import React from "react"

export default function Card({movie}){
     return(
        <div className = "card d-flex align-items-center mt-2 shadow-lg rounded-lg" >
        
            <img
                className="card-img-left img-fluid mt-3"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                about= {movie.title + ' poster'}
                style={{height: '200px'}}
            />
            <h3 className ="card-title">{movie.title}</h3>
            <div className ="d-flex row m-3">
                
                <p>
                    <strong >RELEASE DATE: </strong>
                    {movie.release_date}</p>
                <p><strong>
                    RATING: </strong>{movie.vote_average}</p>
                <p>
                    {movie.overview}
                </p>
            </div>
        
        </div>
     )
}