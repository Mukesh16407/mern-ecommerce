import React, { useEffect, useState } from "react";
import AdminNav from "../../Components/Nav/AdminNav";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h1>Admin DashBoard</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
