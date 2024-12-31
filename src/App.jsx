import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => <div className="content">Welcome to the Home Page</div>;
const AboutUs = () => <div className="content">This is the About Us</div>;
const ContactUs = () => <div className="content">Contact Us Here</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <button className="refresh-button" onClick={() => window.location.reload()}>Refresh</button>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <div className="footer">
          <p>© 2024 Company Name</p>
        </div>
      </div>
    </Router>
  );
}

export default App;