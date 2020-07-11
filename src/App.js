import React, { Component } from 'react';
import FilmList from './component/FilmList';
import axios from "axios";
import LoaderPage from './component/loader/LoaderPage';
import ErorrForSite from './component/error/ErorrForSite';
import fetchArtile from './services/services-api';
import SearchForm from './component/searchForm/SearchForm';
import s from "./app.module.css"
import SortOffFilms from './component/sort/SortOffFilms';




class App extends Component {
  state = { 
  allFilms:[],
  isLoading: false,
  error: null,
  isOpen:false,
  findFilm:"",
   }
   componentDidMount() {
     this.fetchForQueryArticles()
      }
   
fetchForQueryArticles=()=>{
  this.setState({isLoading:true})
  fetchArtile()
.then(({data})=> 
// console.log(data))
{this.setState({allFilms: data.results})})
.catch(error=>{this.setState({error: error})})
.finally(()=>{this.setState({isLoading:false})})  
}
search(allFilms, findFilm){
  if(findFilm.length===0){
    return allFilms
  }
 return allFilms.filter((film)=>{return film.title.toLowerCase().indexOf(findFilm.toLowerCase())>-1})
}
onSearchIntrestedFilm=e=>{
  this.setState({findFilm: e.target.value})
}
  render() {
    const {allFilms, isLoading, error, isOpen, findFilm}= this.state

    const searchFilm = this.search(allFilms, findFilm)
    return (
      <div className={s.container}>
          <div className={s.allfon}>
          <SearchForm onSearchIntrestedFilm={this.onSearchIntrestedFilm}/>
          <SortOffFilms/>
          {error && <ErorrForSite text={error.message}/>}
          {isLoading && <LoaderPage/>}
          {allFilms.length>0 && <FilmList searchFilm={searchFilm}/>}
      
      </div>
      </div>
     
    );
  }
}

export default App;