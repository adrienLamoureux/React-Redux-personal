import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import Topics from "./topics";
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';

export default class AppRouter extends React.Component<any, any> {
  constructor(props: any){
      super(props);
  }

  public render() {
      return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
    
          <Route path="/" exact component={Home} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
      );/*
      return (
        <Router>
          <div>
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
  <NavItem eventKey={1} href="/">
      Home
    </NavItem>
    <NavItem eventKey={1} href="/topics">
      Topics
    </NavItem>
  </Nav>
</Navbar>
<Route path="/" exact component={Home} />
<Route path="/topics" component={Topics} />
</div>
</Router>
      );*/
  }
}