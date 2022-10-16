import "./App.css";

import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";

import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import Profile from "./Profile";
import Edituser from "./Edituser";
import { useContext } from "react";
import { UserContext } from "./Usercontext";
import Login from "./Login";
import PortalLayout from "./PortalLayout";

function App() {
  const userdata = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
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
