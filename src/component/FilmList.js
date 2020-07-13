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

   // else{
    //   this.setState(prevState => ({
    //   ...prevState,isOpen:true,targetFilm:[...targetFilm]
    //   }));
    //   console.log('this.stateInFunction', this.state)
    // }

  render() {
    const { searchFilm } = this.props;
    const { isOpen } = this.state;
    console.log('this.state', this.state)
    return (
      <>
        <div>
          <ul className={s.ulKey}>
            {searchFilm.map((elem) => (
              <li key={elem.episode_id} className={s.liKey}>
                <a href={elem.url} rel="noopener noreferrer" target="blank">
                  {elem.title}
                </a>
                <button
                  type="button"
                  onClick={() => this.handleInformations(elem.episode_id)}
                >
                  More informations
                </button>
              </li>
            ))}
            {isOpen && <Informations info={this.state.targetFilm} />}
          </ul>
        </div>
      </>
    );
  }
}
FilmList.propTypes={
    allFilms: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        episode_id: PropTypes.string.isRequired
    }).isRequired)
    .isRequired

}
export default FilmList;
