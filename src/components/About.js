import React ,{Component} from 'react';
import { Card,CardTitle,CardText,CardActions,Button,Cell,Grid,ProgressBar,ListItem,List} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div class="about-card">
                 <Grid className="about-grid">
                <Cell col={4}>
            <Card  className="about" shadow={0} >
            <CardTitle expand style={{color: '#fff', backgroundImage:'URL("images/contact.jpg " ) '}}></CardTitle>
            <CardText>
               Hi,My name is Jemosop Mercy, a full stack web developer from Nairobi, Kenya. Am passionate about programming and learning new skills in programming.
            </CardText>
            <CardActions border>
            <a class="button" colored href="/contact" style={{textDecoration:"none",color:"Blue"}}>Contact</a>
        {/* <Button colored style={<a href="/contact" style={{textDecoration:"none",color:"white"}}>Contact</a>}></Button> */}
            </CardActions>
        </Card>
        </Cell>
        <Cell col={8}>
            <p>
            <h4>Education </h4>
                    {/* Progress Bar with Buffering */}
            I pursed a degree in Software Engineering from
             MultiMedia university of Kenya and Graduated in october 2019. 
             During and after my University i have improved my programming skills 
             in various languages including:
            </p>
            <p>
            <h4>Programming skills</h4>
                {/* Progress Bar with Buffering */}
            java(SpringBoot)
            <ProgressBar progress={90} buffer={87} />
            java(Android development)
            <ProgressBar progress={70} buffer={87} />
            PHP(Laravel)
            <ProgressBar progress={90} buffer={87} />
            Python
            <ProgressBar progress={20} buffer={87} />
            javaScript(Angular)
            <ProgressBar progress={80} buffer={87} />
            JavaScript(React)
            <ProgressBar progress={70} buffer={87} />
            HTML/CSS/BootStrap/JS
            <ProgressBar progress={90} buffer={87} />
            </p>
            <p>
            <h4>Hobbies</h4>
                    {/* Progress Bar with Buffering */}
                    Coding,Reading,Adventures,Playing softball
                    
            </p>
            
        </Cell>
        </Grid>
        </div>
        );
    }
}
export default About;