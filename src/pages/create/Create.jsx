import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';
import Select from "react-select";
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';
import TeamNav from '../../components/TeamNav';
import Temple from "../../assets/tasks.svg";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const user_option = [
    { value: "Meku", label: "Meku" },
    { value: "Kasu", label: "Kasu" },
    { value: "yonas", label: "yonas" }
  ];
  const categores = [
    { value: "UI", label: "UI Design" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" }
  ];
  const navigate = useNavigate();
  const [users, setUsers] = useState(["meku", "last"] );


  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
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
                  <>


                            <div className="create-form pages-margin">
                              <h2 className="page-title">Create new project</h2>
                              <form >
                                <label>
                                  <span>Project Name:</span>
                                  <input className="small"
                                    type="text"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                  ></input>
                                </label>
                                <label>
                                  <span>Project Details:</span>
                                  <textarea
                                    type="text"
                                    required
                                    onChange={(e) => setDetails(e.target.value)}
                                    value={details}
                                  ></textarea>
                                </label>

                                <label>
                                  <span>Due date::</span>
                                  <input
                                    type="date"
                                    required
                                    onChange={(e) => setDueDate(e.target.value)}
                                    value={dueDate}
                                  ></input>
                                </label>
                                <label>
                                  <span>Project category:</span>
                                  <Select
                                    options={categores}
                                    onChange={(option) => setCategory(option)}
                                  />
                                </label>
                                <label>
                                  <span>Assign to:</span>
                                  <Select
                                    options={user_option}
                                    onChange={(option) => setAssignedUsers(option)}
                                    isMulti
                                  />
                                </label>

                                <button className="btn">Add project</button>
                                {formError && <p className="error">{formError}</p>}
                              </form>
                            </div>

                  </>
              </section>
             <TeamNav />
        </div>
    </>
  )
}

export default Create