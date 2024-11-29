import { Component } from "react";
import SingleGallery from "./SingleGallery";

class Main extends Component {
  state = {
    galleria1: [],
    galleria2: [],
    galleria3: []
  };

  getFilm = async (query, nametoModify) => {
    fetch(`http://www.omdbapi.com/?apikey=fedac6a7&s=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((film) => {
        this.setState({ ...this.state, [nametoModify]: film.Search });
      })
      .catch((errore) => {
        console.log(errore);
      });
  };

  componentDidMount() {
    this.getFilm("Rick and Morty", "galleria1");
    this.getFilm("One Piece", "galleria2");
    this.getFilm("Winx", "galleria3");
  }

  render() {
    return (
      <div>
        <SingleGallery name="Rick and Morty" genre={this.state.galleria1} />
        <SingleGallery name="One Piece" genre={this.state.galleria2} />
        <SingleGallery name="Winx" genre={this.state.galleria3} />
      </div>
    );
  }
}
export default Main;
