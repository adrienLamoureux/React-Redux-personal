import React from "react";
import MovieDetails from "./movieDetails";

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
    return (
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
    );
  }

}
