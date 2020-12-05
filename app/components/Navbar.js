import React, { Component} from 'react';
import styled from 'styled-components';
import Product from './product';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from './Home';
import App from '../App';

const Styles = styled.div`
.link{
    color:black;
   
}
`;




const Navbar=(props)=>{

    
return(
    <Styles>
  <nav class="white" id="nav" role="navigation">
    

           <div class="nav-wrapper container">
           <a id="logo-container" href="#" class="brand-logo">Cafe Place</a>
     
      <ul class="right hide-on-med-and-down">
        
     <li>  <div className="link">Productos</div></li>
        <li><a href="#">Clientes</a></li>
        <li><a href="#">Ventas</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>

    
   
   
  </nav>

    </Styles>
  

  
)
};
    


export default Navbar;