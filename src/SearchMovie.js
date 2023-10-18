import React from "react"
import Card from "./Card.js"
export default function SearchMovie(){
    const [query, setQuery] = React.useState('')
    const [movies, setMovie] = React.useState([])
    const api = process.env.REACT_APP_API
    const searchMovies = async (event) => {
        event.preventDefault()  
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${query}&page=1&include_adult=false`
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovie(data.results)
            console.log(data.results.title)
        }catch(err){
            console.error(err);
        }
    }
    return(
        <div className = "container">
            <h1 className ="text-center text-uppercase">
                Movie Search
            </h1>
            <form  onSubmit={searchMovies}>
                <div className="d-flex row">
                        <div className = "d-flex justify-content-center">
                            {/* <label className="form-label text-nowrap" htmlFor="query" style={{fontSize:'1.25rem', marginBottom: '0.2rem', textTransform: "uppercase"}}>Movie Name</label> */}
                            <input
                                className="form-control rounded-lg text-center"
                                type="text"
                                name ="query"
                                value={query}
                                onChange={(event)=> setQuery(event.target.value)}
                                placeholder ="Search Movie Here"
                            />
                            <button
                                className="btn btn-dark rounded-lg"
                                type="submit">
                                Search
                            </button>
                        </div>
                </div>
                
                
            </form>
            <div>
                {movies.filter(movie=> movie.poster_path).map(movie => (
                        <Card movie = {movie} key = {movie.id}/>
                ))}
            </div>
        </div>
        
    )
}  