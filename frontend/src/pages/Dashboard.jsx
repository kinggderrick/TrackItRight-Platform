import React, { useRef } from "react";
import ComplaintForm from "./ComplaintForm";
import UserComplaints from "./UserComplaints";
import "./Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const complaintsRef = useRef();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header fade-in">
        <h1>Welcome, {user?.name}</h1>
        <p className="dashboard-subtitle">
          Submit new complaints and track your existing ones in real-time.
        </p>
      </header>

      {/* Complaint Form Section */}
      <section className="dashboard-section fade-in">
        <h2 className="section-title">New Complaint</h2>
        <div className="section-divider"></div>
        <ComplaintForm
          userId={user?.id}
          onComplaintSubmitted={() => complaintsRef.current?.refresh()}
        />
      </section>

      {/* User Complaints Section */}
      <section className="dashboard-section fade-in">
        <h2 className="section-title">My Complaints</h2>
        <div className="section-divider"></div>
        <UserComplaints ref={complaintsRef} userId={user?.id} />
      </section>
    </div>
  );
}
