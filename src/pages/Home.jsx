import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Your Journey! 🌟</h1>
      <p>Track your steps, build habits, and reflect on progress.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
