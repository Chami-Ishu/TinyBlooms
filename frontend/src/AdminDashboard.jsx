import { useEffect, useState } from "react";
import AdminOrders from "./AdminOrders";

function AdminDashboard({ onLogout }) {
  const [summary, setSummary] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    confirmedOrders: 0,
    deliveredOrders: 0,
    totalSales: 0
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/orders/summary")
      .then((response) => response.json())
      .then((data) => {
        setSummary(data);
      })
      .catch((error) => {
        console.error("Error fetching summary:", error);
      });
  }, []);

  return (
    <div className="admin-dashboard">

      <div className="admin-header">
        <h1>Admin Dashboard 🔐</h1>

        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-cards">

  <div className="dashboard-card">
    <h3>Total Orders</h3>
    <p>{summary.totalOrders}</p>
  </div>

  <div className="dashboard-card">
    <h3>Pending</h3>
    <p>{summary.pendingOrders}</p>
  </div>

  <div className="dashboard-card">
    <h3>Confirmed</h3>
    <p>{summary.confirmedOrders}</p>
  </div>

  <div className="dashboard-card">
    <h3>Delivered</h3>
    <p>{summary.deliveredOrders}</p>
  </div>

</div>

      <AdminOrders />

    </div>
  );
}

export default AdminDashboard;