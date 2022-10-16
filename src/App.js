import "./App.css";
import Sidebar from "./Sidebar";
import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import Profile from "./Profile";
import Edituser from "./Edituser";

function App() {
 
  return (
    <BrowserRouter>
     <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
         <Routes>
         <Route path="/" element={<Dashboard />}></Route>
         <Route path="/index.html" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/create-user" element={<Usercreate />}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
          <Route path="/edit-user/:id" element={<Edituser/>}></Route>
          <Route path="/edit-profile/:id" element={<Usercreate/>}></Route>
         </Routes>
       
        </div>
      </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
