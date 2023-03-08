import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useSignup } from "../../hooks/useSignup";

import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setCPassword] = useState("");
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      await signup(username, email, password);
    } catch (err) {
      setError(err.message);
      setPending(false);
    }
  };

  return (
    <>
      <div className="login_container">
        <Navbar />
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <label>
            <span>Username:</span>
            <input
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>
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
          <label>
            <span>Confirm Password:</span>
            <input
              required
              type="password"
              value={confPassword}
              onChange={(e) => setCPassword(e.target.value)}
            ></input>
          </label>

          {!isPending && <button className="btn">Sign Up</button>}{" "}
          <span style={{ marginLeft: "35%" }}>
            Already have an account?{" "}
            <Link style={{ textDecoration: "none", color: "blue" }} to="/login">
              {" "}
              Log In
            </Link>{" "}
          </span>
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
};

export default Signup;
