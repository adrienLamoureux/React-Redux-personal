import React from "react";
import MovieDetails from "./movieDetails";
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Movie extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { details: false };
    let votes = [];
    for(let i=0;i<props.movie.voteAverage;++i){
      votes.push(<FontAwesomeIcon icon="star" className="movie-vote-star-item"/>);
    }
    this.state.votes = votes;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      details: !state.details
    }));
  }

  render(){
    return (
      <Card className="card" onClick={() => {this.handleClick()}}>
        <Card.Img variant="top" className="movie-img" src={this.props.movie.posterImage} />
        <Card.Header className="movie-title">{this.props.movie.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Type: {this.props.movie.type}</ListGroup.Item>
              <ListGroup.Item>Released: {this.props.movie.releaseDate}</ListGroup.Item>
              <ListGroup.Item className="movie-vote">Vote average: <ul className="movie-vote-star">{this.state.votes}</ul></ListGroup.Item>
              {this.state.details ? <ListGroup.Item><MovieDetails key={`movie-${this.props.movie.id}`} movie={this.props.movie}/></ListGroup.Item> : null}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

}
