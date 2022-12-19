import "./App.css";

import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import PortalLayout from "./components/PortalLayout";
import Edituser from "./components/Edituser";
import Usercreate from "./components/Usercreate";
import Profile from "./components/Profile";
import User from "./components/User";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="create-user" element={<Usercreate />}></Route>
          <Route path="profile/:id" element={<Profile />}></Route>
          <Route path="edit-user/:id" element={<Edituser />}></Route>
          <Route path="edit-profile/:id" element={<Usercreate />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
