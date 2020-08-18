import React, {Component} from 'react';
import {Layout,Header, Navigation,Drawer,Content} from 'react-mdl';
import { Link} from 'react-router-dom';
import Main from './Main';
class NavBar extends Component{


    render(){
        return(

<div className="demo-big-content">
    <Layout  >
        <Header className="header-color" title={<a href="/portfolio-deploy" style={{textDecoration:"none",color:"white"}}>MercyJemosop</a> }  scroll>
        {/* <Header className="header-color"> */}
            <Navigation>
          
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio-deploy">Projects</Link>
                <Link to="/contact">Contact</Link>
             
            </Navigation>
            </Header>
         <Drawer style={{background:"#15777A" ,color:"blue"}}  title={<a href="/portfolio-deploy" style={{textDecoration:"none",color:"white"}}>Mercy Jemosop</a>}>
             
             
            <Navigation className="header-color">
                <Link to="/resume" style={{color:"white"}}>Resume</Link>
                <Link to="/about" style={{color:"white"}}>About</Link>
                <Link to="/portfolio-deploy" style={{color:"white"}}> Projects</Link>
                <Link to="/contact" style={{color:"white"}}>Contact</Link>
            </Navigation>
        </Drawer>
           
        <Content>
            <div className="page-content" />
             <Main/>
        </Content>
    </Layout>
</div>
        );
    }

}

export default NavBar;