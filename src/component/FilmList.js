import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./film.module.css";
import Informations from "./moreInfo/Informations";

class FilmList extends Component {
  state = {
    isOpen: false,
    targetFilm: {},
  };
  handleInformations = (id) => {
    const { isOpen } = this.state;
    const targetFilm = this.props.searchFilm.find(
      (elem) => elem.episode_id === id
    );
    if (targetFilm.episode_id === this.state.targetFilm.episode_id) {
      this.setState({ isOpen: !isOpen });
    } else {
      this.setState({ isOpen: true, targetFilm });
    }
  };


  render() {
    const { searchFilm } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <div className={s.containerUL}>
          <ul className={s.Columb}>
            <div className={s.ulKey}>
            {searchFilm.map((elem) => (
              <li key={elem.episode_id} className={s.liKey}>
                <a href={elem.url} rel="noopener noreferrer" target="blank" className={s.titleFilm}>
                  {elem.title}
                </a>
                <div className={s.bottonMore}>
                <button className={s.buttonInfo}
                  type="button"
                  onClick={() => this.handleInformations(elem.episode_id)}
                >
                  More informations
                </button>
                </div>
              </li>
            ))}    
            </div>
            <div className={s.moreInformations}>
              {isOpen && <Informations info={this.state.targetFilm} />}
            </div>
          </ul>
        </div>
      </>
    );
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
