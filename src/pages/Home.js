import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import logo from '../images/LOGO 6.png'; 

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
  <Link to="/" className="logo">
    <img src={logo} alt="Auka & Associates LLP Logo" />
  </Link>
  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#practice-areas">Practice Areas</a>
    <a href="#faqs">FAQs</a>
    <a href="#articles">Articles</a>
    <a href="#contact">Contact</a>
        <div className="search-field">
      <input type="text" placeholder="Search..." />
      <button type="button">🔍</button>
    </div>

  </div>
</nav>

      {/* Hero Section */}
<section id="home" className="hero">
  <div className="hero-content">
    <h1>ENTIRELY CLIENT ORIENTED </h1>
    
    <p>Auka & Asssociates is a law firm based in Nairobi, Kenya dedicated to providing solid legal expertise to local and international clients.</p>
    <a href="#contact" className="cta-button">Get in Touch</a>
  </div>
</section>


      {/* About Us Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are a leading law firm offering top-notch legal services to individuals and corporations.</p>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="section">
        <h2>Practice Areas</h2>
        <div className="practice-list">
          <div className="practice-item">Corporate Law</div>
          <div className="practice-item">Family Law</div>
          <div className="practice-item">Criminal Law</div>
          <div className="practice-item">Real Estate Law</div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="section">
        <h2>FAQs</h2>
        <p>Find answers to the most common legal questions our clients have.</p>
      </section>

      {/* Articles Section */}
      <section id="articles" className="section">
        <h2>Articles</h2>
        <p>Stay informed with the latest legal insights and updates.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Reach out to us for consultations or inquiries. We’re here to help!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Auka & Associates LLP. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
