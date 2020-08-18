import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {  Grid ,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import {Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-force-tabpanel-${index}`}
    aria-labelledby={`scrollable-force-tab-${index}`}
    {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
        className="category-tabs"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Django" {...a11yProps(0)} />
          <Tab label="Laravel" {...a11yProps(1)} />
          <Tab label="HTML/CSS/js" {...a11yProps(2)} />
          <Tab label="Android" {...a11yProps(3)} />
          <Tab label="SpringBoot" {...a11yProps(4)} />
          <Tab label="PHP" {...a11yProps(5)} />
          <Tab label="Angular" {...a11yProps(6)} />
          <Tab label="React" {...a11yProps(7)} />
          <Tab label="Angular" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      {/*  Django*/}
      <TabPanel value={value} index={0}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
               <CardTitle style={{color:"#000",height:'176px',background:'url(https://www.epicentrofestival.com/wp-content/uploads/2020/02/epicentrofestival-django-web-development-web-framework-python-softwa-django-g7h18w3ae2.jpg) center / cover'}}>
   
               </CardTitle>
               <CardText>Django project </CardText>
               <CardActions  border  style={{color:'#fff'}}>
                   <Button href="https://github.com/mercykip/DjangoDay1"  colored>GitHub</Button>
                   <Button colored style={{textDecoration:"none"}}> <Link to="/django" style={{textDecoration:"none",color:"blue"}}>Documentation </Link></Button> 
             
               </CardActions>
               <CardMenu style={{}}>
                   <IconButton name='share'></IconButton>
               </CardMenu>
             </Card>
      </TabPanel>
      {/* php */}
      <TabPanel value={value} index={1}>
    
             <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
             
               <CardTitle style={{color:"#000",height:'176px',background:'url(https://png.pngitem.com/pimgs/s/578-5785080_laravel-6-logo-png-transparent-png.png) center / cover'}}>
   
               </CardTitle>
               <CardText>MoneyWallet API  Laravel project </CardText>
               <CardActions  border  style={{color:'#fff'}}>
                   <Button href="https://github.com/mercykip/LaravelMoneyWallet"  colored>GitHub</Button>
                   <Button colored>Documentation</Button>
               </CardActions>
               <CardMenu style={{}}>
                   <IconButton name='share'></IconButton>
               </CardMenu>
             </Card>
         
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"",height:'176px',background:'url(https://www.croitresoftwares.com/images/dd/front-end.jpg) center / cover'}}>
       
            </CardTitle>
            <CardText>    HTML/CSS/Bootstrap/js   Dispensary system</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button  href="https://github.com/mercykip/Dispensary" colored>GitHub</Button>
                <Button colored>Documentation</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  Android Application front-end part of SpringBoot API</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/MoneyWallet-Android" colored>GitHub</Button>
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://i.ya-webdesign.com/images/spring-logo-png-4.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet API SpringBoot project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="" colored>GitHub</Button>
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}} className="card">
               <CardTitle style={{color:"",height:'176px',background:'url(https://seeklogo.com/images/P/PHP-logo-0B2FDC4529-seeklogo.com.png) center / cover'}}>
            
               </CardTitle>
               <CardText>Disease Prediction PHP projects</CardText>
               <CardActions  border  style={{color:'#fff'}}>
                   <Button href="https://github.com/mercykip/diseaseP"     colored>GitHub</Button>
                   <Button colored>Documentation</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'></IconButton>
               </CardMenu>
             </Card>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://cdn.freebiesupply.com/logos/thumbs/2x/angular-3-logo.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  Angular 2+ front-end(Admin-side) part of springbooot API project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/Money-wallet"  colored>GitHub</Button>
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="project-grid">
       
             {/* MoneyWallet Laravel front-end API*/}
             <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  React front-end(Admin-side) for Laravel API project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/Money-Wallet-Admin-React-project" colored>GitHub</Button>
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
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
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
        <br/><br/><br/><br/>
              {/* MoneyWallet Laravel front-end API*/}
            <Card shadow={5} style={{minWidth:"450", margin: 'auto'}}>
            <CardTitle style={{color:"#000",height:'176px',background:'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover'}}>
         
            </CardTitle>
           
            <CardText>MoneyWallet  React front-end(Admin-side) for Laravel API project</CardText>
            <CardActions  border  style={{color:'#fff'}}>
                <Button href="https://github.com/mercykip/Money-Wallet-Admin-React-project" colored>GitHub</Button>
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
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
                <Button colored>Documentation</Button>
                {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
                <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>

          
            </div>
      </TabPanel>
    </div>
  );
}
