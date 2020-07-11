import React from 'react'

const Informations = ({discriptions, id, director, producer, release_date}) =>{
    console.log(id)
    
    return(
        <div key={id}>
            <div>
                <p>Episode: {id}</p>
                <p>Director: {director}</p>
                <p>Producers: {producer}</p>
                <p>Release date: {release_date}</p>
            </div>
        <p>Discriptons of episode: {discriptions}</p>
        
        </div>
    )
}

export default Informations;