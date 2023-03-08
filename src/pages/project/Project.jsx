import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { useLogout } from "../../hooks/useLogout";
import Sidenav from '../../components/Sidenav';
import TeamNav from '../../components/TeamNav';
import Temple from "../../assets/tasks.svg";
import { useParams } from 'react-router-dom';
import "./project.css";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [notify, setNotify] = useState(false);
  const { logout } = useLogout();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/projects/${id}`);
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, [id]);
  
  if (!project) {
    return <div>Loading...</div>;
  }

  const { name, description, startDate, endDate, members, tasks, status, category } = project;
        

  const handleLogout = e => {
    e.preventDefault();
    logout();
  };
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
                          <button onClick={handleLogout} className="btn">Log Out</button>  
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


        <div className="project-details" style={{width: "70%", margin:"5% auto"}}>
            <h2 style={{textAlign: "center"}}>{name}</h2>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Due Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Category:</strong> {category}</p>
            <h3>Members:</h3>
            <ul className='members'>
              {members.map(member => (
                <li key={member._id}>{member.name}</li>
              ))}
            </ul>
            <h3>Tasks:</h3>
            <ul>
              {tasks.map(task => (
                <li key={task._id}>{task.name}</li>
              ))}
            </ul>
        </div>

        </section>





      <TeamNav />


    </div>
    </>
  )
}

export default Project
