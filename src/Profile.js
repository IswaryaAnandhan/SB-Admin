
import React, { useEffect, useState} from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

function Profile() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    useEffect(()=>{
     console.log(searchParams.get('status'));
    })
    const [users,setUser] = useState([]);
  useEffect(() =>{
    setUser([
      {
        id: 1,
        username: "Mani",
        email:"1112mani@gmail.com",
        country:"India",
        state:"Tamil Nadu",
        city:"Chennai",
        phone:"9783254617",
        dob:"12/1/2001",
        gender:"Male"
      }
    ]);
  })

  return (
    <div className="container">
          <div className="row">
          <div className="col-lg-6"><h2>Profile Details- <span>Id: {params.id}</span></h2></div>
        </div>
      <div className="row">
     { 
     users.map((user)=>{
       return <>
        <div className="col-lg-6">UserName: {user.username}</div>
        <div className="col-lg-6">Email: {user.email}</div>
        <div className="col-lg-6">Country: {user.country}</div>
        <div className="col-lg-6">State: {user.state}</div>
        <div className="col-lg-6">City: {user.city}</div>
        <div className="col-lg-6">Phone: {user.phone}</div>
        <div className="col-lg-6">Date of Birth:{user.dob}</div>
        <div className="col-lg-6">Gender: {user.gender}</div>
        </>  })
    } 
    <div className="col-lg-6">
        <Link to={`/create-user/${users.id}`} className="btn btn-primary">
                        Edit User
                      </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
