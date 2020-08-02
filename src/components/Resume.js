import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Resume extends Component{
    render(){
        return(
            <div className="resume">
                <Grid className="resume-grid">
                <Cell col={4}>
                    <div className="resume-img" >
                     <h1>Resume</h1>
                        <img src="images/contact.jpg"     style={{width:'250px',height:'250px'}} alt="MercyJemosop"/>
          
                    {/* <h2 style={{paddingTop:'2em'}}>Mercy Kipyegon</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4> */}
                    {/* */}
                         <h5 style={{paddingTop:'2em'}}>Name</h5>
                         <p  >Kipyegon Jemosop Mercy</p>
                         <h5>Date of Birth</h5>
                         <p>July 4th 1997</p>
                         <h5>Marital Status</h5>
                         <p>Single</p>
                         <h5>Nationality</h5>
                         <p>Kenyan</p>
                         <h5>Identity Number</h5>
                         <p>33797565</p>
                         <h5>Postal Address</h5>
                         <p>P.O BOX 128-30400 KABARNET</p>
                         <h5>Postal Code</h5>
                         <p>30400</p>
                         <h5>Mobile Number</h5>
                         <p>254-0703319233</p>
                         <h5>Religion</h5>
                         <p>Christian</p>
                         <h5>Language</h5>
                         <p>English,Kiswahili</p>
                         <h5>County</h5>
                         <p>Baringo</p>
                         <h5>Email</h5>
                         <p>mercyjemosop@gmail.com</p>
                         </div>
                         <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/> 
                    </Cell>
                <Cell col={8}>
                <h4>Educational Background</h4>
                <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                    <div>
                       
                        <b>September 2015- October 2019</b>
                        <p>
                            MULTIMEDIA UNIVERSITY - BSc. In software Engineering, graduated with second class Honors.</p>
                        <b>Feb 2011-Nov 2015: </b>
                        <p>ST. BRIDIG’S HIGH SCHOOL- Kenya Certificate of Secondary Education (K.C.S.E) – A- (79 pts.)</p>
                        <b>Jan 2003-Nov 2010:  </b>
                        <p>VISA OSHWAL PRIMARY SCHOOL - Kenya Certificate of Primary Education (K.C.P.E) - (346/500 Marks) </p>


                    </div>
                    <h4>PERSONAL ATTRIBUTES</h4>
                    <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                    <div>
                       <p>Share skills and work with minimal supervision</p>
                       <p>Self-esteem and self-drive</p>
                       <p>Always ready to learn</p>
                       <p>Team player</p>
                       <p>Hardworking</p>
                       <p>Honest</p>
                       <p>Reliable</p>
                    </div>
                    <h4>CAREER OBJECTIVE</h4>
                    <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                    <div>
                       <p> Willing to acquire a challenging and responsible position as a Software Engineer, in a
                            well-renowned organization, where my skills and abilities would be utilized to a greater 
                            extent. Wish to gain more experience that would prove beneficial to the organization.</p>
                   
                    </div>
                    <h4>WORK EXPERIENCE</h4>
                    <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                   
                    <div>
                       <p><b>Date:</b>	June-August 2017</p>
                       <p><b>Position:</b>	IT Attachee</p>
                       <p><b>Institution:</b>	Baringo county government</p>
                       <p><b>Responsibilities: </b>Networking, reviewing county websites</p>
                    </div>
                    <div>
                       <p><b>Date:</b>	May-November 2019</p>
                       <p><b>Position:</b>	Intern</p>
                       <p><b>Institution:</b>	Compulynx Limited</p>
                       <p><b>Responsibilities: </b>Creating a mobile application  </p>
                    </div>
                    <div>
                       <p><b>Date:</b>	June-November 2019</p>
                       <p><b>Position:</b>	Intern</p>
                       <p><b>Institution:</b>	Compulynx Limited</p>
                       <p><b>Responsibilities: </b>Creating a mobile application  </p>
                    </div>
                    <div>
                       <p><b>Date:</b>	April-june 2020</p>
                       <p><b>Position:</b>	Intern</p>
                       <p><b>Institution:</b>	HNG internship 7.0</p>
                       <p><b>Responsibilities: </b>developing backend API</p>
                    </div>
                    <div>
                       <p><b>Date:</b>	July 2nd to date</p>
                       <p><b>Position:</b>	Intern</p>
                       <p><b>Institution:</b>	Systech Limited</p>
                       <p><b>Responsibilities: </b>Java Development </p>
                    </div>
                    <h4>HOBBIES</h4>
                    <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                    <div>
                       <p> Extensive reading, carrying out research work, travelling, coding and sports.</p>
                   
                    </div>
                    <h4>REFEREES</h4>
                    <hr style={{borderTop:'3px solid #15806F',width:'50%'}}/>
                    <div>
                       {/* <p> MR. JOEL HR.COMPULYNX LIMITED PO BOX 79013-00400 TEL:+254-0738880169 NAIROBI, KENYA.</p> */}
                       <p>MS CATHERINE, COUNTY BARINGO COUNTY IT ADMINISTRATOR, TEL:+254 0724 796354</p>
                   
                    </div>
                </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;