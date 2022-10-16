import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://63463cc5745bd0dbd3791eaf.mockapi.io/usersdata"
      );
      console.log(users);
      setUser(users.data);
      setLoading(false);
    } catch {
      alert("Error");
    }
  };

  let deleteUser = () => {
    const result = window.confirm("Are you sure do you want to delete?");
    if (result) {
      alert("Deleted");
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-clipboard-list fa-x text-gray-300"></i> Create
          User
        </Link>
      </div>
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users Details</h6>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Action </th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user) => {
                    return (                  
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>
                    
                          <Link
                            to={`/profile/${user.id}`}
                            className="btn btn-warning mr-1 mb-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-user/${user.id}`}
                            className="btn btn-secondary mr-1 mb-1"
                          >
                            Edit
                          </Link>
                          {/* <Link
                              to={`/edit-profile/${user.id}`}
                              className="btn btn-primary mr-1 mb-1"
                            >
                              Edit Profile
                            </Link> */}
                          <button
                            onClick={() => deleteUser()}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default User;
