import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import "./UserComplaints.css";
import { API_BASE_URL } from "../config";

const UserComplaints = forwardRef(({ userId }, ref) => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = () => {
    axios
      .get(`${API_BASE_URL}/api/complaints/user/${userId}`)
      .then((res) => setComplaints(res.data))
      .catch((err) => console.error("Error fetching complaints:", err));
  };

  // Expose refresh() to parent
  useImperativeHandle(ref, () => ({
    refresh() {
      fetchComplaints();
    }
  }));

  useEffect(() => {
    fetchComplaints();
  }, [userId]);

  return (
    <div className="complaints-list fade-in">
      {complaints.length === 0 ? (
        <p className="empty-state">No complaints submitted yet.</p>
      ) : (
        <table className="complaints-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>{c.category.name}</td>
                <td>{c.description}</td>
                <td>{c.status}</td>
                <td>{c.feedback || "—"}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default UserComplaints;
