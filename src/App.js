import React, { Component } from 'react';
import FilmList from './component/FilmList';
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
  sortType:'asc'
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
search(sorted, findFilm){
  if(findFilm.length===0){
    return sorted
  }
 return sorted.filter((film)=>{return film.title.toLowerCase().indexOf(findFilm.toLowerCase())>-1})
}
onSearchIntrestedFilm=e=>{
  this.setState({findFilm: e.target.value})
}

 
onSort=sortType=>{
  this.setState({sortType})
}

  render() {

  const {allFilms, isLoading, error, isOpen, findFilm, sortType}= this.state

    const searchFilm = this.search(allFilms, findFilm)

    const sorted = allFilms.sort((a, b)=>{
      const isReversed = (sortType==="asc") ? 1 : -1;
      return isReversed*a.title.localeCompare(b.title)

    })
    
    return (
      <div className={s.container}>
          <div className={s.allfon}>
          <SearchForm onSearchIntrestedFilm={this.onSearchIntrestedFilm}/>
          <div className={s.positions}>
            <button type="button" onClick={()=>this.onSort('asc')}>Sort Start</button>
            <button type="button" onClick={()=>this.onSort('desc')}>Sort finish</button>
            </div>
          {/* <SortOffFilms sortOff={sortOff}/> */}
          {error && <ErorrForSite text={error.message}/>}
          {isLoading && <LoaderPage/>}
          {allFilms.length>0 && <FilmList searchFilm={searchFilm} sorted={sorted}/>}
      
      </div>
      </div>
     
    );
  }
}

export default App;