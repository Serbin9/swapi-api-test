import React, { Component } from 'react';
import s from './sort.module.css'
class SortOffFilms extends Component {
    state = {  }
    render() {
        return (
            <div className={s.positions}>
            <button type="button">Sort Start</button>
            <button type="button">Sort Finish</button>
            </div>
        );
    }
}

export default SortOffFilms;