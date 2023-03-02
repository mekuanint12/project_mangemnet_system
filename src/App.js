import { Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

import "./App.css";

function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
                <Routes>
                      <Route  path="/" element={<Dashboard />} />
                      <Route  path="/create" element={<Create />} />
                      <Route  path="/signup"  element={ <Signup /> }   />
                      <Route  path="/login"  element={ <Login /> }   />
                      <Route  path="/projects/:id" element={ <Project /> } />
                </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
