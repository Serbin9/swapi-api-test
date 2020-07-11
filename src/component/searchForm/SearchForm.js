import React, { Component } from 'react'

const SearchForm = ({onSearchIntrestedFilm}) => {
    return(
    <>
    <input type="text" onChange={onSearchIntrestedFilm}/>
    </>
    )
};

export default SearchForm;