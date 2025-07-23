import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style6.css';

export default function Home_2() {
  const [leadershipTextColor, setLeadershipTextColor] = useState('black');

  const handleNewsClick = (date, title) => {
    alert(`Opening news from ${date}:\n${title}`);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navlogo"></div>
          <div className="panel-items">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="navbar2">
          <div className="itemsbar2">
            <Link to="/aerostructures">AEROSTRUCTURES & AERO-ENGINES</Link>
            <Link to="/airborne">AIRBORNE PLATFORM AND SYSTEMS</Link>
            <Link to="/defence">DEFENCE & SECURITY</Link>
            <Link to="/landmobility">LAND MOBILITY</Link>
          </div>
        </div>
      </header>

      <div className="hero-section"></div>

      <div className="service">
        <div className="leftservice">
          <h1><b>Our Product & Services</b></h1><br /><br />
          <h2><b>Drones and Equipment</b></h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Blanditiis placeat odit, natus explicabo officiis unde quisquam</p>
          <p>esse sapiente. Qui eligendi repellat sapiente! Laborum nam placeat</p>
          <p>natus ea veniam nobis assumenda!</p>
        </div>
        <div className="rightservice"></div>
      </div>

      <div className="leadership">
        <div className="textleadership" style={{ color: leadershipTextColor }}>
          <h1>Leadership that Inspires</h1>
          <p>For over 100 years, the Tata group has been led by visionaries</p>
          <p>who have stayed true to the vision of the founder Sir Jamsetji Tata.</p>
          <p>Our vision articulates the Group's values and ideals that guide and</p>
          <p>govern the conduct of our companies as well as our colleagues in all</p>
          <p>matters relating to business.</p>
        </div>
        <button
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            padding: '10px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 999
          }}
          onClick={() =>
            setLeadershipTextColor(leadershipTextColor === 'black' ? 'white' : 'black')
          }
        >
          Toggle Leadership Text Color
        </button>
      </div>

      <div className="news-heading">
        <div className="headingnews">
          <p>News & Updates</p>
        </div>
        <div className="covernews">
          <div className="box" onClick={() => handleNewsClick('22nd May 2025', 'news 2')}>
            <h2 className="transparent-heading">22nd May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
          <div className="box" onClick={() => handleNewsClick('30th May 2025', 'news 2')}>
            <h2 className="transparent-heading">30th May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
          <div className="box" onClick={() => handleNewsClick('31st May 2025', 'news 2')}>
            <h2 className="transparent-heading">31st May 2025</h2>
            <p className="transparent-heading">news 2</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footpanel">
          <ul>
            <p>Reach us</p><br /><br />
            <a>TASL Registered Office:</a>
            <a>Hardware Park Plot No.21,</a>
            <a>Sy No.1/1 Imarat Kancha Raviryala Village,</a>
            <a>Maheshwaram Mandal,</a>
            <a>Hyderabad – 501 218,</a>
            <a>Telangana, India.</a><br /><br /><br /><br />
            <a>Dr. Gopaldas Bhawan, 14th Floor,</a>
            <a>28 Barakhamba Road,</a>
            <a>New Delhi - 110001</a><br /><br />
          </ul>
          <ul>
            <p>About Us</p><br /><br />
            <a>What We Do</a>
            <a>What We Value</a>
            <a>Joint Venture & Subsidiaries</a>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Policies/Documents/Financials</p>
          </ul>
          <ul>
            <p>AEROSTRUCTURES & AERO-ENGINES</p><br />
            <a>Customers & Programs</a>
            <a>Centres of Excellence (CoEs)</a>
            <a>Capabilities</a>
          </ul>
          <ul>
            <p>AIRBORNE PLATFORMS & SYSTEMS</p><br /><br />
            <a>Unmanned Aerial Systems</a>
            <a>Fixed and Rotary Wing Platforms</a>
            <a>Mission Systems and Avionics</a>
            <a>Satellite Integration</a>
            <a>Missile Systems & Parts</a>
          </ul>
        </div>
      </footer>

      <button
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '10px 15px',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: window.scrollY > 200 ? 'block' : 'none',
          zIndex: 999
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Top
      </button>
    </>
  );
}