import React from 'react';
import Motivator from '../components/Motivator';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1 style={{ color: "var(--primary-color)" }}>🌈 Welcome to Your Journey! 🌟 🌈</h1>
      <Motivator />
      <p>Start tracking your progress by heading over to the Dashboard!</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
