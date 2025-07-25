// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <header className="main-header">
        <nav className="navbar container">
          <div className="navlogo" />
          <div className="panel-items">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
        <nav className="navbar2 container">
          <div className="itemsbar2">
            <Link to="/aerostructures">AEROSTRUCTURES & AERO-ENGINES</Link>
            <Link to="/airborne">AIRBORNE PLATFORM AND SYSTEMS</Link>
            <Link to="/defence">DEFENCE & SECURITY</Link>
            <Link to="/landmobility">LAND MOBILITY</Link>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Empowering India's Defence & Aerospace</h1>
          <p className="hero-subtitle">
            Leading innovation in drones, aerostructures, and security solutions.
          </p>
        </div>
      </section>

      <section className="service container">
        <div className="leftservice">
          <h1>Our Product & Services</h1>
          <div className="service-divider" />
          <h2>Drones and Equipment</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Blanditiis placeat odit, natus explicabo officiis unde quisquam</p>
          <p>esse sapiente. Qui eligendi repellat sapiente! Laborum nam placeat</p>
          <p>natus ea veniam nobis assumenda!</p>
        </div>
        <div className="rightservice" />
      </section>

      <section className="leadership container">
        <div className="textleadership">
          <h1>
            <span role="img" aria-label="leader">🌟</span> Leadership that Inspires
          </h1>
          <p>
            For over 100 years, the Tata group has been led by visionaries who have stayed true to the vision of the founder Sir Jamsetji Tata.
          </p>
          <p>
            Our vision articulates the Group's values and ideals that guide and govern the conduct of our companies as well as our colleagues in all matters relating to business.
          </p>
        </div>
      </section>

      <section className="news-heading container">
        <div className="headingnews">
          <h2>News & Updates</h2>
        </div>
        <div className="covernews">
          <div className="box" onClick={() => alert('Opening news from 22nd May 2025:\nnews 2')}>
            <h2 className="transparent-heading">22nd May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
          <div className="box" onClick={() => alert('Opening news from 30th May 2025:\nnews 2')}>
            <h2 className="transparent-heading">30th May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
          <div className="box" onClick={() => alert('Opening news from 31st May 2025:\nnews 2')}>
            <h2 className="transparent-heading">31st May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footpanel container">
          <ul>
            <p>Reach us</p>
            <li>TASL Registered Office:</li>
            <li>Hardware Park Plot No.21,</li>
            <li>Sy No.1/1 Imarat Kancha Raviryala Village,</li>
            <li>Maheshwaram Mandal,</li>
            <li>Hyderabad – 501 218,</li>
            <li>Telangana, India.</li>
            <li>Dr. Gopaldas Bhawan, 14th Floor,</li>
            <li>28 Barakhamba Road,</li>
            <li>New Delhi - 110001</li>
          </ul>
          <ul>
            <p>About Us</p>
            <li>What We Do</li>
            <li>What We Value</li>
            <li>Joint Venture & Subsidiaries</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Policies/Documents/Financials</li>
          </ul>
          <ul>
            <p>AEROSTRUCTURES & AERO-ENGINES</p>
            <li>Customers & Programs</li>
            <li>Centres of Excellence (CoEs)</li>
            <li>Capabilities</li>
          </ul>
          <ul>
            <p>AIRBORNE PLATFORMS & SYSTEMS</p>
            <li>Unmanned Aerial Systems</li>
            <li>Fixed and Rotary Wing Platforms</li>
            <li>Mission Systems and Avionics</li>
            <li>Satellite Integration</li>
            <li>Missile Systems & Parts</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ATAS. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
