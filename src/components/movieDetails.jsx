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
        <div className="movie-synopsis">Synopsis</div>
        <div className="movie-overview">{this.movie.overView}</div>
        <div className="movie-production"><div className="produced">produced by</div>
          <ul className="list-inline productionCompany-list">
          {this.movie.productionCompanyList && this.movie.productionCompanyList.length
            ? this.movie.productionCompanyList.map((productionCompany, index) => {
                return <ProductionCompany key={`productionCompany-${productionCompany.id}`} productionCompany={productionCompany} />;
              })
            : "toto"}        
          </ul>
        </div>
      </div>
    );
  }
}