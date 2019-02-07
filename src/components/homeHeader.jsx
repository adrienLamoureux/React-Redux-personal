import React from "react";

export default class HomeHeader extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home-header">
        <div className="home-title">My movies</div>
        <div className="home-subtitle">Selected by fans for fans</div>
        <div className="home-content">Our 20 favorites movies, available 24/7 in our new cinema</div>
      </div>
    );
  }
}
