import React, { Component } from 'react';
import Home from './components/Home'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/product';

const Styles = styled.div`
.link{
    color:black;
   
}
#logo{
  color:black;
}
`;
class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Styles>
          <nav class="white" id="nav" role="navigation">
            <div class="nav-wrapper container">
              <li  id="logo" class="brand-logo"><div className="link"><Link to="/">Cafe Place</Link></div></li>
              <ul class="right hide-on-med-and-down">
                <li>  <Link to="/products"><div className="link">Productos</div></Link></li>
                <li>  <Link to="/products"><div className="link">Clientes</div></Link></li>
                <li>  <Link to="/products"><div className="link">Ventas</div></Link></li>
              </ul>
              <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Navbar Link</a></li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
          
          </nav>
          </Styles>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Product />
            </Route>

          </Switch>
        </div>
      </Router>

    )
  }

}


export default App;
