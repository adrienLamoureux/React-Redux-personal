import * as React from "react";

export default class Topic extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
      }
  
      public render() {
          return (
            <h3>Requested Param: {this.props.match.params.id}</h3>
          );
      }

}

//export const Topic = ({ match } : {match: any}) => ;