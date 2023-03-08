import React, { useEffect, useState } from 'react';
import userImg from "../assets/userDefult.png";

const TeamNav = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from API endpoint
    fetch('http://localhost:5000/api/v1/users')
      .then(response => response.json())
      .then(data => {
          const filteredUsers = data.filter(user => user.role !== "admin");
          setUsers(filteredUsers);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <section className="team_nav">
        <h5>Your Team Members</h5>
        <div className="teams_list">
          {users.map(user => (
            <div className="img" key={user._id}>
              <img style={{width: "40px", borderRadius: "50%"}} src={user.profilePicture || userImg} alt="" />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamNav;
