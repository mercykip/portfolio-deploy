import React ,{Component} from 'react';
import { Cell ,Grid,List,ListItemContent,ListItem} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Mercy Jemosop</h2>
                    <img src="../images/mm.PNG"
                      alt="MecyJemosop"
                     style={{width:'250px',height:'250px'}}
                    />
                  <p >Hello, My name is Kipyegon Jemosop Mercy. feel free to contact .</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent >
                                <i className="fa fa-phone-square" >(+254)-703319233</i>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent >
                                <i className="fa fa-phone-square" >(+254)-755991174</i>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent >
                                <i className="fa fa-envelope-square" aria-hidden="true">mercyjemosop@gmail.com</i>
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                </Cell>

            </Grid>

            </div>
        );
    }
}
export default Contact;