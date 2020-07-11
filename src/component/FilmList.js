import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from "./film.module.css";
import Informations from './moreInfo/Informations';

class FilmList extends Component {
    state = { 
        isOpen:false,
     }
    handleInformations=e=>{
        const {isOpen}=this.state;
            this.setState({isOpen:!isOpen})
        }




    render() {
        const {searchFilm}=this.props;
        const{isOpen}=this.state;
        return (
                <>
                <div>
                <ul className={s.ulKey}>
                    {searchFilm.map(({title, url, episode_id, producer, director, release_date,opening_crawl, planet})=>(
                        <li key={episode_id} className={s.liKey}>
                        <a href={url} rel="noopener noreferrer" target="blank">
                            {title}
                        </a>

                        <button type="button" onClick={this.handleInformations}>More informations</button>
                     {isOpen&&<Informations discriptions={opening_crawl} id={episode_id} producer={producer} director={director} release_date={release_date}/>}

                        </li>


                    ))}
                </ul>

                </div>

                </>
            )
        }




    }
    // FilmList.propTypes={
    //     allFilms: PropTypes.arrayOf(PropTypes.shape({
    //         title: PropTypes.string.isRequired,
    //         url: PropTypes.string.isRequired,
    //         episode_id: PropTypes.string.isRequired
    //     }).isRequired)
    //     .isRequired

    // }
export default FilmList;
