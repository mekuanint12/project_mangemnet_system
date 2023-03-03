import React from 'react';
import user from "../assets/userDefult.png";

const TeamNav = () => {
  return (
    <>

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
    </>
  )
}

export default TeamNav