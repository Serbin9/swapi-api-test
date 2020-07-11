import React, { Component } from 'react';
import s from './sort.module.css'
class SortOffFilms extends Component {
    state = {  }
    render() {
        const {sortOff} = this.props
        return (
            <div className={s.positions}>
            <button type="button" onClick={sortOff}>Sort Start</button>
            <button type="button" onClick={sortOff}>Sort Finish</button>
            </div>
        );
    }
}

export default SortOffFilms;