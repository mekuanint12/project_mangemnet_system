import {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useLogin } from "../../hooks/useLogin";
import "./login.css";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (

          <>
              <div className="login_container">
                   <Navbar />

                        <form className="auth-form" onSubmit={handleSubmit}>
                          <h2>Login</h2>
                          <label>
                            <span>Email:</span>
                            <input
                              required
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </label>
                          <label>
                            <span>Password:</span>
                            <input
                              required
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            ></input>
                          </label>
                        

                          {!isPending && <button className="btn">Login</button>}  <span style={{marginLeft: "40%"}}>Don't have an account? <Link style={{textDecoration: "none", color: "blue"}} to="/signup"> Sign Up</Link> </span> 
                          {isPending && (
                            <button className="btn" disabled>
                              Loading...
                            </button>
                          )}
                          {error && <div className="error">{error}</div>}
                        </form>

                        </div>
          </>
    

  );
}

export default Login
