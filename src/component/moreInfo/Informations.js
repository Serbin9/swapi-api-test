import React from 'react';
import style from './informations.module.css'

const Informations = ({info}) =>{
    return(

        <div key={info.id}>
            <div>
                <p c>Episode: {info.episode_id}</p>
                <p>Director: {info.title}</p>
                <p>Producers: {info.producer}</p>
                <p>Release date: {info.release_date}</p>
            </div>
        <p className={style.discriptions}>Discriptons of episode: {info.opening_crawl}</p>

        
     </div>
    )
}

export default Informations;