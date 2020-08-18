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
                     <h5 style={{textAlign:"left",color:"green"}}>Create a superuser</h5>
                     <p><b>SuperUser</b> is the most powerful user with permissions to create, read,
                      update and delete data in the Django admin, which includes model records and 
                      other users. staff. - A user marked as staff can access the Django admin.</p>
                      <p>Important commands in django</p>
                     <ul>
                         <li><b>python manage.py migrate</b></li>
                         <p>It sync settings with the django project, can also be used to create a new database<br/>
                         in settings.py file change the sqlite database name and run the command to create a new database
                         </p>
                         <li><b>python manage.py runserver</b></li>
                         <p>This command is used to start/run the server</p>
                         <li><b>python manage.py createsuperuser</b></li>
                         <p>It allows you to create a user with access to the admin: altimate super user<br/>
                         This command promts you to enter your username, email(optional) and
                          password(doen't have to be secure).
                          The details will be used during login to the admin site.<br/>
                          To access the admin site: run the server, add admin to the default server url example
                          <b> localhost:8000/admin</b>

                          <br/>
                          You can perform any CRUD operation in the admin site
                         </p>
                     </ul>
                     <h5 style={{textAlign:"left",color:"green"}}>Create custom django App</h5>
                     <p><b>Django application</b> is a Python package that is
                      specifically intended for use in a Django project. An application may use
                      common Django conventions, such as having models , tests , urls , and views submodules.</p>
                       <ul>
                           <li><b>python manage.py startapp account</b></li>
                           <p>command to create an application, account is the name of the application.
                           <br/>
                           Add fields to the model of the application 
                         <p> Create a class with the same name as the model example <b>class Account(models.Model):
                             </b> and add the application to the settings</p> </p>
                             </ul>
                             <p>
                          <h5 style={{textAlign:"left",color:"green"}}>Commands to update the database</h5>
                           <ul>
                           <li><b>python manage.py makemigrations</b></li>
                           <li><b>python manage.py migrate</b></li>
                           <p>Run this two commands everytime you are making 
                               changes models.py file or updating the database</p>
                           <li><b>Registering a Model</b></li>
                           <p>Models are registered in admin.py file in which is in the same directory </p>
                           <p><i>Relative import is importing documents from the same directory</i>
                           <br/>from .models import Account
                           <br/>admin.site.register(Account)
                        
                        
                           </p>
                           </ul>
                           </p>
                      
                 
                       <h5 style={{textAlign:"left",color:"green"}}>Using Python Shell</h5>
                 
    
                 </Cell>
                 </Grid>    
            </div>
        );
        }
}
export default Django;