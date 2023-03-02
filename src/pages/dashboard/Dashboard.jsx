import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import Temple from "../../assets/tasks.svg";
import user from "../../assets/userDefult.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
    <div className="project_containers">
        <section className="side_nav">
              <div className="pro__img">
                <img style={{width: "70px", marginLeft: "35px", borderRadius: "50%"}} src={user} alt="" />
                <div className="name" style={{fontSize: "17px", padding: "10px"}}>Meku Last <span style={{color: "grey", fontSize: "13px"}}>(Admin)</span></div>
              </div>
              <div className="links">
                <div>
                  <Link className='link_btn' to="/dashboard" style={{textDecoration: "none", fontSize: "17px", color: "black"}}><ViewComfyOutlinedIcon style={{ fontSize: "17px",color:"black"}} /> Dashboard</Link>
                </div>
                <div>
                  <Link className='link_btn' to="/dashboard" style={{textDecoration: "none", fontSize: "17px", color: "black"}}><AddOutlinedIcon style={{ fontSize: "17px",color:"black"}} /> Add Project</Link>
                </div>                
              </div>
        </section>


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
                          <Link className="btn" to="/login">Log Out</Link>                       
                      </div>                  
                  </div>
                 
                 <h2>We are working on 3 Projects also finished up 5 Projects</h2>

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
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                            </div>
                      </div>
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                            </div>
                      </div>
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                            </div>
                      </div>
                      <div className="pro_card">
                            <div className="pro__title">React Task Manager</div>
                            <div className="pro__date">March 21, 2023</div>
                            <div className="progress">On Progress</div>
                            <div className="teams">
                                <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                            </div>
                      </div>
                 </div>

                

        </section>


        <section className="team_nav">
                <h5>Your Team Members</h5>
                <div className="teams_list">
                  <div className="img">
                    <img style={{width: "40px", borderRadius: "50%"}} src={user} alt="" />
                    <div>Yonas</div>
                  </div>
                  <div className="img">
                    <img style={{width: "40px",  borderRadius: "50%"}} src={user} alt="" />
                    <div>Solomon</div>
                  </div>
                  <div className="img">
                    <img style={{width: "40px",  borderRadius: "50%"}} src={user} alt="" />
                    <div>Kasahun</div>
                  </div>
                  <div className="img">
                    <img style={{width: "40px",  borderRadius: "50%"}} src={user} alt="" />
                    <div>Yordanos</div>
                  </div>
                  <div className="img">
                    <img style={{width: "40px",  borderRadius: "50%"}} src={user} alt="" />
                    <div>Fanuel</div>
                  </div>
                  <div className="img">
                    <img style={{width: "40px",  borderRadius: "50%"}} src={user} alt="" />
                    <div>Mebratu</div>
                  </div>
                </div>
        </section>


    </div>
    </>
  )
}

export default Dashboard