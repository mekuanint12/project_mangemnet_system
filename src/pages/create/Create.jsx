import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';
import Select from "react-select";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';
import TeamNav from '../../components/TeamNav';
import Temple from "../../assets/tasks.svg";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [notify,setNotify] = useState(false);
  const [userOptions, setUserOptions] = useState([]);
  
  useEffect(() => {
    const fetchUserOptions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/users');
        const users = response.data.map((user) => ({
          value: user._id,
          label: user.name,
        }));
        setUserOptions(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserOptions();
  }, []);
  const categores = [
    { value: "UI", label: "UI Design" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "FullStack", label: "Full Stack" }
  ];
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('in progress');
  const [category, setCategory] = useState(''); 
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newProject = {
      name,
      description,
      endDate,
      members: members.map((memberId) => ({ id: memberId })),
      tasks,
      status,
      category,
    };
  
    try {
      console.log(newProject);
      const response = await axios.post('http://localhost:5000/api/v1/projects', newProject);
      
      console.log(response.data);
      // navigate(`/projects/${response.data.id}`);
    } catch (error) {
      setFormError(error);
    }
  };
  
  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const handleTaskChange = (e, index) => {
    const newTasks = [...tasks];
    newTasks[index] = e.target.value;
    setTasks(newTasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, '']);
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            className="small"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Description:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>

        <label>
          <span>Project category:</span>
                <Select
                  value={{ value: category, label: category }}
                  onChange={handleCategoryChange}
                  options={categores}
                />
        </label>
        <label>
          <span>Due Date:</span>
          <input
            type="date"
            required
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </label>
        <label>
            <span>Assign to:</span>
            <Select
                options={userOptions}
                onChange={(selectedOptions) =>
                  setMembers(selectedOptions.map((option) => option.value))
                }
                isMulti
              />
        </label>
        {tasks.map((task, index) => (
          <div key={index}>
            <label>
              <span>Task {index + 1}:</span>
              <input
                type="text"
                required
                value={task}
                onChange={(e) => handleTaskChange(e, index)}
              />
            </label>
            <button className="btn" style={{backgroundColor: "red", color: "white"}} type="button" onClick={() => handleRemoveTask(index)}>
              Remove Task
            </button>
          </div>
        ))}
        <button className="btn" style={{margin: "10px 10px 10px 0"}} type="button" onClick={handleAddTask}>
          Add Task
        </button>
        <button className="btn" type="submit">
          Add project
        </button>
      </form>
      {formError && <p className="error">{formError}</p>}
    </div>

                  </>
              </section>
             <TeamNav />
        </div>
    </>
  )
}

export default Create