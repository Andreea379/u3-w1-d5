import { Component } from "react";
import { Container, Image, Row } from "react-bootstrap";

class SingleGallery extends Component {
  render() {
    return (
      <Container fluid>
        <h3>{this.props.name}</h3>
        <Row>
          {this.props.genre.map((film) => {
            return (
              <div key={film.imdbID} className="col-6 col-sm-4 col-md-2">
                <Image src={film.Poster} alt={film.Title} />
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default SingleGallery;
