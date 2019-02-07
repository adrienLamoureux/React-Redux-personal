import React from "react";

export default class HomeFooter extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home-footer">
        <span className="home-footer-testimonial">An amazing experience in the my cinema!</span>
        <span className="home-footer-magazin">my magazine</span>
      </div>
    );
  }
}
