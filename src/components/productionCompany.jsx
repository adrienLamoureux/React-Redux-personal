import React from "react";

export default class ProductionCompany extends React.Component {

  productionCompany;
  
  constructor(props){
    super(props);
    this.productionCompany = props.productionCompany;
  }

  render(){
    return (
      <li
      className="list-inline-item productionCompany-item"
      onClick={() => {}}
    >
    {this.productionCompany.name}
    </li>
    );
  }

}
