import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import user from "../assets/userDefult.png";

const Sidenav = () => {
  return (
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
        <Link className='link_btn' to="/add_project" style={{textDecoration: "none", fontSize: "17px", color: "black"}}><AddOutlinedIcon style={{ fontSize: "17px",color:"black"}} /> Add Project</Link>
      </div>                
    </div>
</section>
  )
}

export default Sidenav