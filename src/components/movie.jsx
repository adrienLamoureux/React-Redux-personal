import React from "react";
import MovieDetails from "./movieDetails";
import { Button, CardDeck, Card, ListGroup } from 'react-bootstrap';

export default class Movie extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { details: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      details: !state.details
    }));
  }

  render(){
    /*return (
      <li className="movie-item" onClick={() => {this.handleClick()}}>
      <div>
        {this.props.movie.title}
      </div>
      <div>
        {this.props.movie.releaseDate}
      </div>
      <div>
        {this.props.movie.voteAverage}
      </div>
      {this.state.details ? <MovieDetails key={`movie-${this.props.movie.id}`} movie={this.props.movie}/> : null}
    </li>
    );*/
    return (
      <Card>
        <Card.Img variant="top" className="movie-img" src={this.props.movie.posterImage} />
        <Card.Header className="movie-title">{this.props.movie.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Type: {this.props.movie.type}</ListGroup.Item>
              <ListGroup.Item>Released: {this.props.movie.releaseDate}</ListGroup.Item>
              <ListGroup.Item>Vote average: {this.props.movie.voteAverage}/5</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

}
