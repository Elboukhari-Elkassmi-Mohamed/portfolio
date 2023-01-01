import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  import Header from './components/Header';
import Login from "./Pages/Login";
// import Profile from './Pages/adminDashboard';
import Admin from "./Pages/admin/Admin";
import One from "./Pages/admin/sectionOne/One";
import CreateOne from "./Pages/admin/sectionOne/CreateOne"
import Dashboard from "./Pages/admin/Dashboard";
import Protected from "./util/Protected";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<Protected />}>
              <Route path="/admin" element={<Admin />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/sectionOne" element={<One />} />
                <Route path="/admin/sectionOne/create" element={<CreateOne/>} />

              </Route>
            </Route>
            <Route path="/admin/login" element={<Login />} />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
