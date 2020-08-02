import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Home extends Component{
    render(){
        return(
            <div style={{width: '100%',margin:'auto' }}className="home">
                <Grid className="home-grid">
                      <Cell col={12}>
                          <img 
                          src="images/pic.jpg"
                          alt="MercyJemosop" 
                          className="mercyImage"
                          style={{}}
                          />

                          <div className="banner-text">
                              <h1>Full stack Web Developer</h1>
                              <hr/>
                              <p>HTML/CSS | Bootsrap | JavaScript | React | Angular | PHP | Laravel | Java | Springboort | Android </p>
                         <div className="social-links">
                             {/* <a href="https://www.facebook.com/mercy.jemosop.3"rel="noopener noreferrer"  target="_blank"><i className="fa fa-facebook-square"  aria-hidden="true"/></a> */}
                             <a href="https://twitter.com/kipyegon_mercy"rel="noopener noreferrer"  target="_blank"><i className="fa fa-twitter-square"  aria-hidden="true"/></a>
                             <a href="https://github.com/mercykip"rel="noopener noreferrer"  target="_blank"><i className="fa fa-github-square"  aria-hidden="true"/></a>
                             <a href="https://www.linkedin.com/in/mercy-jemosop-16a03916a/"rel="noopener noreferrer"  target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"/></a>
                         </div>
                          </div>

                      </Cell>
                </Grid>
            </div>
        );
    }
}
export default Home;