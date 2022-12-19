import React from "react";
import Card from "./Card";

function Dashboard() {
  const user = [
    {
      name: "Earnings (Monthly)",
      amount: "$40,000",
      icon: "fas fa-calendar fa-2x text-gray-300",
    },
    {
      name: "EARNINGS (ANNUAL)",
      amount: "$215,000",
      icon: "fas fa-dollar-sign fa-2x text-gray-300",
    },
    {
      name: "TASKS",
      amount: "50%",
      icon: "fas fa-clipboard-list fa-2x text-gray-300",
    },
    {
      name: "PENDING REQUESTS",
      amount: 18,
      icon: "fas fa-comments fa-2x text-gray-300",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {user.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
