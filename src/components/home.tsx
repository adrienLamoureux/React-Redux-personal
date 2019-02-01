import * as React from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { render } from "react-dom";
import { connect } from 'react-redux';

class Home extends React.Component<any, any> {
    
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div>
                <h1>Home from {this.props.compiler} and {this.props.framework}!</h1>
                <Button bsStyle="primary" onClick={(event: React.MouseEvent<Button, MouseEvent>) => {<Redirect to='/topics' />}}>default</Button>
            </div>
        );
    }

    private onClick(event: React.MouseEvent<Button, MouseEvent>){
        
    }
}

export default connect(
    null,
    { Home }
  )(Home);