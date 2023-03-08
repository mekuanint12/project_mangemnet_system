import { useEffect, useState } from 'react';
import axios from 'axios';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { useLogout } from "../../hooks/useLogout";
import Sidenav from '../../components/Sidenav';
import TeamNav from '../../components/TeamNav';
import Temple from "../../assets/tasks.svg";
import userImg from "../../assets/userDefult.png";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = ({ user }) => {
        const [projects, setProjects] = useState([]);
        const [filteredProjects, setFilteredProjects] = useState([]);
        const [filter, setFilter] = useState('all');
        const [notify, setNotify] = useState(false);
        const { logout } = useLogout();
        console.log(user.role)


  const navigate = useNavigate();

        useEffect(() => {
          const fetchProjects = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/v1/projects');
              setProjects(response.data);
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          };
          fetchProjects();
        }, []);

        useEffect(() => { 
          if (filter === 'completed') {
            if (user.role === "user") {
              setFilteredProjects(projects.filter(project => project.status === 'completed' && project.members.find(member => member._id === user.id)));
            } else if (user.role === "admin") {
              setFilteredProjects(projects.filter(project => project.status === 'completed'));
            }
          } else if (filter === 'in progress') {
            if (user.role === "user") {
            setFilteredProjects(projects.filter(project => project.status !== 'completed' && project.members.find(member => member._id === user.id)));
            } else if (user.role === "admin") {
              setFilteredProjects(projects.filter(project => project.status !== 'completed'));
            }
          } else {
            if (user.role === "user") {
              setFilteredProjects(projects.filter(project => project.members.find(member => member._id === user.id)));            
            } else if (user.role === "admin"){
              setFilteredProjects(projects.filter(project => project.status === 'completed'));
            }
          }
        }, [filter, projects, user.id, user.role]);

        const handleFilterChange = (filter) => {
          setFilter(filter);
        };

        

        const handleLogout = e => {
          e.preventDefault();
          logout();
        };

        function formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const newDate = new Date(date);
          return newDate.toLocaleDateString('en-US', options);
        }

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
                 
                 <h2>We are working on <span style={{color: "blue"}}>3</span>  Projects currently. <br /> Finished up <span style={{color: "green"}}>2</span> Projects</h2>

        <div className="filters">
          <div>Filter by:</div>
          <span
            style={{ color: filter === 'all' ? 'blueviolet' : '' }}
            onClick={() => handleFilterChange('all')}
          >
            All
          </span>
          <span
            style={{ color: filter === 'completed' ? 'blueviolet' : '' }}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </span>
          <span
            style={{ color: filter === 'in progress' ? 'blueviolet' : '' }}
            onClick={() => handleFilterChange('in progress')}
          >
            In Progress
          </span>
        </div>

        <div className="projects">
          {filteredProjects.map(project => (
           <div className={`pro_card ${project.status === 'completed' ? 'completed' : ''}`} key={project._id}>
              <div className="pro__title"> <Link style={{color: "white",textDecoration: "none"}} to={`/projects/${project && project._id}`}>{project.name} </Link></div>
              <div className="pro__date">{formatDate(project.endDate)}</div>
              <div className="progress">{project.status}</div>
              <div className="teams">
                <div>
                  {project.members.map(users => (
                    <img key={users._id} title={users.name} style={{width: "40px", borderRadius: "50%"}} src={userImg} alt={users.name} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
                

        </section>

      <TeamNav />


    </div>
    </>
  )
}

export default Dashboard