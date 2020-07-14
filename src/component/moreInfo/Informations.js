import React from 'react';
import style from './informations.module.css'

const Informations = ({info}) =>{

    return(

        <div key={info.id} >
            <div className={style.mainInform}>
                <h1 className={style.title}>{info.title}</h1>
                <p className={style.episode}>Episode: {info.episode_id}</p>
                <p className={style.director}>Director: {info.director}</p>
                <p className={style.producer}>Producers: {info.producer}</p>
                <p className={style.realiz}>Release date: {info.release_date}</p>
                <h2 className={style.descriptions}>Discriptons of episode:</h2>
                <p className={style.moreInfo}>{info.opening_crawl}</p>
 
            </div>
     </div>
    )
}

export default Informations;