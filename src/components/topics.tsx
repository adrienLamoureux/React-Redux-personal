import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Topic from "./topic";

export default class Topics extends React.Component<any, any> {
    constructor(props: any){
      super(props);
      this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
          <div>
          <h2>Topics</h2>
      
          <ul>
            <li>
              <Link to={`${this.props.match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
      
          <Route path={`${this.props.match.path}/:id`} component={Topic} />
          <Route
            exact
            path={this.props.match.path}
            render={() => <h3>Please select a topic.</h3>}
          />
        </div>
        );
    }
}

//export const Topics = ({ match } : {match: any}) => (
    
//  );