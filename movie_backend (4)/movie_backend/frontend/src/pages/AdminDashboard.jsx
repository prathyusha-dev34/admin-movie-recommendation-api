import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

function AdminDashboard() {
  const [stats, setStats] = useState({
    total_users: 0,
    total_reviews: 0,
    total_favorites: 0,
    most_searched_movie: "",
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <div style={{ padding: "20px" }}>
        <h1>Admin Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div className="card">
            <h3>Total Users</h3>
            <h2>{stats.total_users}</h2>
          </div>

          <div className="card">
            <h3>Total Reviews</h3>
            <h2>{stats.total_reviews}</h2>
          </div>

          <div className="card">
            <h3>Total Favorites</h3>
            <h2>{stats.total_favorites}</h2>
          </div>

          <div className="card">
            <h3>Most Searched Movie</h3>
            <h2>{stats.most_searched_movie}</h2>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;