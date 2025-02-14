import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard">
      <div className="sales-chart">
        <Line data={salesData} />
      </div>
      <div className="inventory-status">
        <Bar data={inventory} />
      </div>
    </div>
  );
};

export default Dashboard;
