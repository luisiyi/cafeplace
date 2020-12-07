import React, { Component} from 'react';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import styled from 'styled-components'

const Styles = styled.div`

#cover1{
  background: url(${Banner1});
  background-size: cover;
}

#cover2{
  background: url(${Banner2});
  background-size: cover;
}

.footer-copyright{
  background-color:black;
  color:white;
}

#about3{
  color:white;
}

#footer{
  margin-top:20px;
}
`;

class Home extends Component{
    render(){
        return(
          <Styles>
  <div>

  <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br/><br/>
          <h1 class="header center white-text text-lighten-2">Cafe Place</h1>
          <div class="row center">
            <h5 class="header col s12 light white-text">Una experiencia única en cada taza.</h5>
          </div>
        
          <br/><br/>
  
        </div>
      </div>
      <div class="parallax" id="cover1"><img src={Banner1} /></div>
    </div>

    <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Conócenos</h4>
          <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5  id="about3" class="header col s12 light"> Nuestros granos de café cuentan su propia historia</h5>
        </div>
      </div>
    </div>
    <div class="parallax" id="cover2"><img src={Banner2}/></div>
  </div>

  <footer class="page-footer black" id="footer">
   
    <div class="footer-copyright">
      <div class="container">
      All Rights Reserved to MAC Labs ©
      </div>
    </div>
  </footer>
    </div>
    </Styles>

)
}
};


    


export default Home;