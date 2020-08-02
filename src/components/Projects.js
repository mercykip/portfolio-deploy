import React ,{Component} from 'react';
import { Tab,Tabs, Grid ,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }
toggleCategories(){
    if(this.state.activeTab===0){
         return(
            //  PHP
             <Card shadow={5} style={{minWidth:"450", margin: 'auto'}} className="card">
               <CardTitle style={{color:"",height:'176px',background:'url(https://seeklogo.com/images/P/PHP-logo-0B2FDC4529-seeklogo.com.png) center / cover'}}>
            
               </CardTitle>
               <CardText>Disease Prediction PHP projects</CardText>
               <CardActions  border  style={{color:'#fff'}}>
                   <Button href="https://github.com/mercykip/diseaseP"     colored>GitHub</Button>
                   <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'></IconButton>
               </CardMenu>
             </Card>
         );
    }
    else if(this.state.activeTab===1){
        return(
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"",height:'176px',background:'url(https://www.croitresoftwares.com/images/dd/front-end.jpg) center / cover'}}>
       
            </CardTitle>
            <CardText>    HTML/CSS/Bootstrap/js   Dispensary system</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button  href="https://github.com/mercykip/Dispensary" colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      );
    }
    else if(this.state.activeTab===2){
        return(
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
               <CardTitle style={{color:"#000",height:'176px',background:'url(https://png.pngitem.com/pimgs/s/578-5785080_laravel-6-logo-png-transparent-png.png) center / cover'}}>
   
               </CardTitle>
               <CardText>MoneyWallet API  Laravel project </CardText>
               <CardActions  border  style={{color:'#fff'}}>
                   <Button href="https://github.com/mercykip/LaravelMoneyWallet"  colored>GitHub</Button>
                   <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{}}>
                   <IconButton name='share'></IconButton>
               </CardMenu>
             </Card>
        );
    }
    else if(this.state.activeTab===3){
        return(
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://i.ya-webdesign.com/images/spring-logo-png-4.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet API SpringBoot project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="" colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>MoreProject</Button>
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
     );
    
    }
    else if(this.state.activeTab===4){
        return(
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://cdn.freebiesupply.com/logos/thumbs/2x/angular-3-logo.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  Angular 2+ front-end(Admin-side) part of springbooot API project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/Money-wallet"  colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>MoreProject</Button>
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
     );
    }
/*SpringBoot Projects */
    else if(this.state.activeTab===5){
        return(
            <div className="project-grid">
              {/* MoneyWallet Laravel front-end API*/}
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  React front-end(Admin-side) for Laravel API project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/Money-Wallet-Admin-React-project" colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>MoreProject</Button>
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      {/* My portfolio */}
          <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover'}}>
            </CardTitle>
            <CardText>React Portfolio Project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/React-Portfolio" colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>MoreProject</Button>
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>

          
            </div>
            
        );
    }
    else if(this.state.activeTab===6){
        return(
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  Android Application front-end part of SpringBoot API</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/MoneyWallet-Android" colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>MoreProject</Button>
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
        );
    }
}
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                     <Tab>PHP</Tab>
                     <Tab>HTML/CSS</Tab>
                     <Tab>Laravel</Tab>
                     <Tab>SpringBoot</Tab>
                     <Tab>Angular</Tab>
                      <Tab>React</Tab>
                      <Tab>Android</Tab>
                </Tabs>
       
            <Grid >
            <Cell col={12}>
            <div className="content">  {this.toggleCategories()}</div>

            </Cell>
            </Grid>
       
            </div>
        );
    }
}
export default Projects;