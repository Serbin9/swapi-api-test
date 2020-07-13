import React, { Component } from 'react'
import style from './search.module.css'
const SearchForm = ({onSearchIntrestedFilm}) => {
    return(
    <div className={style.searchFormContainer}>
        <input className={style.searchForm} type="text" onChange={onSearchIntrestedFilm}/>
    </div>
    )
};

export default SearchForm;