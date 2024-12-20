import React from "react";
import "../style/NGOProfile.css";
import { useAuth } from "../../context/Auth";
const Dashboard = () => {
    const formatDate = (dateString) => {
        const date = new Date (dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = String(date.getFullYear())
        return `${day}/${month}/${year}`
    }
  const [auth] = useAuth();
  return (
    <div className="card">
      <center className="mb-3">
        {" "}
        <h3>{`${auth?.user?.name}'s Details`}</h3>{" "}
      </center>
      <h2>
        {" "}
        <strong>Organization : </strong> {auth?.user?.orgName}
      </h2>
      <h2>
        {" "}
        <strong>Member ID : </strong> {auth?.user?.memberId}
      </h2>
      <h2>
        {" "}
        <strong> Email : </strong> {auth?.user?.email}
      </h2>
      <h2>
        {" "}
        <strong>Mobile No. : </strong> {auth?.user?.mobile}
      </h2>
      <h2>
        {" "}
        <strong>Address : </strong> {auth?.user?.address}
      </h2>

      <h2>
        {" "}
        <strong>Profile Created : </strong> {formatDate(auth?.user?.createdAt)}
      </h2>
    </div>
  );
};

export default Dashboard;
