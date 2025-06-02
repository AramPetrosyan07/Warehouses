import React from "react";
import { DashboardLayout } from "../../templates/DashboardLayout";
import "./DashboardPage.scss";

export const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p>
            Welcome to your dashboard! Here's an overview of your business
            metrics.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-value primary">1,234</p>
            <p className="stat-change positive">↗ +12% from last month</p>
          </div>

          <div className="stat-card">
            <h3>Total Orders</h3>
            <p className="stat-value success">456</p>
            <p className="stat-change positive">↗ +8% from last month</p>
          </div>

          <div className="stat-card">
            <h3>Revenue</h3>
            <p className="stat-value warning">$12,345</p>
            <p className="stat-change positive">↗ +15% from last month</p>
          </div>

          <div className="stat-card">
            <h3>Conversion Rate</h3>
            <p className="stat-value danger">3.2%</p>
            <p className="stat-change negative">↘ -2% from last month</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Recent Activity</h2>
          <p>Your recent activity and updates will appear here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};
