import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

import "./App.css";

import { useAuthContext } from "./hooks/useAuthContext";


function App() {
  
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
            <Routes>
              <Route  path="/"  element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}  />
              <Route  path="/dashboard"  element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}  />
              <Route  path="/add_project"  element={user ? <Create /> : <Navigate to="/login" />} />
              <Route  path="/signup"  element={!user ? <Signup /> : <Navigate to="/" />}    />
              <Route  path="/login"   element={!user ? <Login /> : <Navigate to="/" />}    />
              <Route  path="/projects/:id"  element={user ? <Project /> : <Navigate to="/login" />}   />
            </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
