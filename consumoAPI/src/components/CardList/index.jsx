import React, { useEffect, useState } from "react";
import Cards from '../Cards'

const  CardList = () => {
    const [movies, setMovies] = useState([]) 

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
                .then(data => setMovies(data))
        .catch(err =>  {
            console.log(err);
        })
    }, [movies])
    return (
        <div className="container">
            {
                movies.map(movie => {
                    return (
                        <Cards key={movie.id} title={movie.title} description={movie.description}></Cards>
                    )
                })
            }
        
        </div>
    )
}

export default CardList;
    
