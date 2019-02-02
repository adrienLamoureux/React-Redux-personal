import React from "react";
import cx from "classnames";

export default class Movie extends React.Component {

  movie;
  
  constructor(props){
    super(props);
    this.movie = props.movie;
  }

  render(){
    return (
      <li
      className="movie-item"
      onClick={() => {}}
    >
      {this.movie && this.movie.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "movie-item__text",
          this.movie && this.movie.completed && "movie-item__text--completed"
        )}
      >
        {this.movie.content}
      </span>
    </li>
    );
  }

}
