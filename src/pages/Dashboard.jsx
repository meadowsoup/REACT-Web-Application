import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import StepTracker from '../components/StepTracker';
import HabitHelper from '../components/HabitHelper';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 style={{ color: "var(--primary-color)" }}>🏁 Dashboard 🏁</h1>
      <StepTracker />
      <HabitHelper />
      <Link to="/">
          <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default Dashboard;