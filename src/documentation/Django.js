import React ,{Component} from 'react';
import {Link } from "react-router-dom";
import { Card,CardTitle,CardText,CardActions,Button,Cell,Grid,ProgressBar,ListItem,List} from 'react-mdl';

class Django extends Component{
    render(){
        return(
            <div class="about-django">
                 <Grid className="about-grid">
                     <Cell col={3}>
                     <h4>Topics</h4> 
                     <ul>
                         <Link><li>Introduction</li></Link>
                         <Link><li>Django Folder Structure</li></Link>
                         <Link><li>Creating Django app</li></Link>
                     </ul>
                     </Cell>
                 <Cell col={9}>
                     <div>
                     <h4 style={{textAlign:"left",color:"green"}}>DJANGO DOCUMENTATION</h4>
                     <p>
                       <b>Django</b> is a high-level Python Web framework that encourages rapid
                        development and clean pragmatic design.
                        It's primary goal is to ease the creation of complex database-driven
                         websites.
                     </p>
                     <h5 style={{textAlign:"left",color:"green"}}>Understanding django Folder
                      Structure</h5>
                     <p>Important files in django</p>
                     <ul>
                         <li><b>manage.py</b></li>
                         <p>A command-line utility for executing Django commands from within
                              your project.</p>
                          <li><b>db.sqlite3. </b></li>
                          <p> The database created when you ran the migrate command </p>
                          <li><b>__init__.py  </b></li>
                          <p> This file tells Python that this folder (your Django app)
                               is a Python package. </p>
                            <li><b>asgi.py </b></li>
                          <p>  enables ASGI compatible web servers to serve your project (Django 3 only). </p>
                          <li><b>urls.py</b></li>
                          <p>  contains project-level URL configurations. By default, this contains a 
                              single URL pattern for the admin. </p>
                        <li><b>wsgi.py  </b></li>
                          <p> enables WSGI compatible web servers to serve your project.</p>
                          <li><b>settings.py </b></li>
                          <p> it contains the settings for your Django project. .</p>
                     </ul>
                     </div>
                     <h5 style={{textAlign:"left",color:"green"}}>Create my first django App</h5>
                     <p><b>Django application</b></p>
                     <ul>
                         <li></li>
                     </ul>

                 
                 
                 
    
                 </Cell>
                 </Grid>    
            </div>
        );
        }
}
export default Django;