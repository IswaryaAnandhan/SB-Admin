
import React, { useEffect} from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Profile() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    useEffect(()=>{
     console.log(searchParams.get('status'));
    })
  return (
    <div className="container">
          <div className="row">
          <div className="col-lg-6"><h2>Profile Details- <span>Id: {params.id}</span></h2></div>
        </div>
      <div className="row">
        <div className="col-lg-6">UserName: Mani</div>
        <div className="col-lg-6">Email: Mani@gmail.com</div>
        <div className="col-lg-6">Country: India</div>
        <div className="col-lg-6">State: Tamil Nadu</div>
        <div className="col-lg-6">City:  Chennai</div>
        <div className="col-lg-6">Phone: 9641364781</div>
        <div className="col-lg-6">Date of Birth: 12/2/1987</div>
        <div className="col-lg-6">Gender: Male</div>
      </div>
    </div>
  );
}

export default Profile;
