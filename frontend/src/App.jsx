import { Routes, Route, NavLink } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <NavLink to="/" className="logo">
            TrackItRight
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <div className="nav-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
          {/* Future links (Dashboard, Authority, etc.) can go here */}
        </div>

        {/* Right: GitHub Icon */}
        <div className="nav-right">
          <a
            href="https://github.com/aslams2020"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.39-3.88-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Page content area */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
