import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const admin = ["ROLE_ADMIN", "ROLE_USER"];
  const userString = user.roles.toString();
  const adminString = admin.toString();

  useEffect(() => {
    if (userString !== adminString) {
      navigate("/unauthorized");
    }
  });

  return <div className="bg-container"></div>;
}

export default Dashboard;
