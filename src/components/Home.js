import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Home extends Component {

    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }} className="home">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                            alt="MercyJemosop"

                            className="mercyImage"
                            style={{ width: '200px', height: '200px', borderRadius: '35%' }}
                        />

                        <div className="banner-text">
                            <h1>Front-End Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootsrap | JavaScript | React | Angular | Flutter</p>
                            <div className="social-links">
                                {/* <a href="https://www.facebook.com/mercy.jemosop.3"rel="noopener noreferrer"  target="_blank"><i className="fa fa-facebook-square"  aria-hidden="true"/></a> */}
                                <a href="https://twitter.com/kipyegon_mercy" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true" /></a>
                                <a href="https://github.com/mercykip" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /></a>
                                <a href="https://www.linkedin.com/in/mercy-jemosop-16a03916a/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Home;