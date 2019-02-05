import React from "react";
import ProductionCompany from "./productionCompany";

export default class MovieDetails extends React.Component {

  movie;
  
  constructor(props){
    super(props);
    this.movie = props.movie;
  }

  render(){
    return (
      <div>
        <div>{this.movie.overView}</div>
        <div><img className="movie-img" src={this.movie.posterImage} alt="no pictures so far..."/></div>
        <ul className="productionCompany-list">
        {this.movie.productionCompanyList && this.movie.productionCompanyList.length
          ? this.movie.productionCompanyList.map((productionCompany, index) => {
              return <ProductionCompany key={`productionCompany-${productionCompany.id}`} productionCompany={productionCompany} />;
            })
          : "No productionCompanies, yay!"}        
        </ul>
      </div>
    );
  }
}