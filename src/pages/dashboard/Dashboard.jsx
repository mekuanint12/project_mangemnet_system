import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';
import TeamNav from '../../components/TeamNav';
import Temple from "../../assets/tasks.svg";
import user from "../../assets/userDefult.png";
import "./dashboard.css";
import { useState } from 'react';

const Dashboard = () => {
  const [notify, setNotify] = useState(false);

  return (
    <>
    <div className="project_containers">
        <Sidenav />


        <section className="project_nav">
                  <div className="nav_bar">
                      <div className="logo"> <Link to="/">
                          <div className="logo-flex">
                          <img style={{width: "20px"}} src={Temple} alt="logo" />
                          <span style={{"margin": "0 0  -10px 10px", fontSize: "17px"}}>Project Management System</span>
                          </div>
                      </Link>
                      </div>  
                      <div className="auth-div">         
                          <div className='notify_me'>
                              <NotificationsNoneIcon onClick={() => setNotify(!notify)} style={{color: "grey" ,fontSize: "39px", cursor: "pointer"}} />   
                              <span className='notify_num'>2</span>                
                          </div>
                          <Link className="btn" to="/login">Log Out</Link>  
                          <div className={notify ? "notifications display_me" : "notifications"} >
            
                              <div className="notify_new">
                                <p className="new">New</p>
                                <div className="new_notify">
                                  <div className="unread"> <CircleIcon style={{color: "green"}} /> React Task Manager App is on Progress now. </div>
                                  <div className="unread"> <CircleIcon style={{color: "green"}} /> React Task Manager App is on Backlog now. </div>
                                </div>
                              </div> 
                              <div className="notify_old">
                                <p className="old">Old</p>
                                <div className="old_notify">
                                     <div className="read"> <CircleIcon style={{color: "orange"}} /> React Task Manager App is on Progress now. </div>
                                     <div className="read"> <CircleIcon style={{color: "orange"}} /> React Task Manager App is on Backlog now. </div>
                                </div>
                              </div> 
                          </div>                     
                      </div>                  
                  </div>
                 
                 <h2>We are working on <span style={{color: "blue"}}>3</span>  Projects currently. <br /> Finished up <span style={{color: "green"}}>2</span> Projects</h2>

                 <div className="filters"> 
                  <div>Filter by:</div>
                  <span style={{color: "blueviolet"}}>All</span><span>Completed</span> <span>Uncompleted</span>
                 </div>

                 <div className="projects">
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <div>
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <div>
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />

                                </div>
                            </div>
                      </div>
                      <div className="completed pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">Completed</div>
                            <div className="teams">
                                <div>
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                </div>
                                <DoneAllIcon style={{color: "green" ,fontSize: "25px"}} />
                            </div>
                            
                      </div>
                      <div className="completed pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">Completed</div>
                            <div className="teams">
                                <div>
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                </div>
                                <DoneAllIcon style={{color: "green" ,fontSize: "25px"}} />
                            </div>
                      </div>
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <div>
                                  <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                              </div>
                        </div>

                                </div>
                 </div>

                

        </section>

      <TeamNav />


    </div>
    </>
  )
}

export default Dashboard