import React, { Component} from 'react';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';



class Home extends Component{
    render(){
        return(
  <div>

  <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br/><br/>
          <h1 class="header center teal-text text-lighten-2">Cafe Place</h1>
          <div class="row center">
            <h5 class="header col s12 light">Una experiencia única en cada taza.</h5>
          </div>
        
          <br/><br/>
  
        </div>
      </div>
      <div class="parallax"><img src={Banner1} /></div>
    </div>

    <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Conocenos</h4>
          <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light"> Nuestros granos de café cuentan su propia historia</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img src={Banner2}/></div>
  </div>

  <footer class="page-footer teal">
   
    <div class="footer-copyright">
      <div class="container">
      All Rights Reserved to MAC Labs ©
      </div>
    </div>
  </footer>
    </div>

)
}
};


    


export default Home;