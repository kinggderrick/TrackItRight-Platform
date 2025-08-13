// src/pages/ComplaintForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ComplaintForm.css";

export default function ComplaintForm({ userId, onComplaintSubmitted }) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaint = {
      user: { id: userId },
      category: { id: categoryId },
      description
    };

    try {
      await axios.post("http://localhost:8080/api/complaints", complaint);
      alert("✅ Complaint submitted successfully!");
      setDescription("");
      setCategoryId("");
      if (onComplaintSubmitted) onComplaintSubmitted();
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting complaint");
    }
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <h2>Submit a Complaint</h2>

      <label>Category:</label>
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
        <option value="">-- Select Category --</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your complaint"
        required
      />

      <button type="submit">Submit Complaint</button>
    </form>
  );
}
