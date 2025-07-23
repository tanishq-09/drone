import React from "react";
import { Link } from "react-router-dom";
import '../styles/about.css';

export default function About() {
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
      <div className="hero-section">
        <h2>Propelling India Forward</h2>
        <p>leading the "Make in india" in defence and drones</p>
      </div>
      <div className="About-us">
        <h1>About Us</h1>
        <p>Tata Advanced Systems Limited (TASL), a wholly-owned subsidiary of Tata Sons,
          is the strategic Aerospace and Defence arm of the TATA Group. TASL is both an
          operating & a holding company.</p>
        <p>Tata Advanced Systems Limited is one of the country's leading private players for
          aerospace and defence solutions and aspires to be the 'Partner of Choice', especially
          for the government's</p>
        <p>'Make in India' programme and for global Original Equipment
          Manufacturers (OEMs). With the requisite capabilities, resources and scale, it is equipped
          to deliver end-to-end innovative solutions </p>
        <p>encompassing systems, hardware, software,
          technology, and digital solutions, all of which can be fully integrated across the key
          platforms necessary to secure India's land, sea and skies.</p>
        <p>Tata Advanced Systems Limited has a strong portfolio of partnerships and joint ventures
          with leading global aerospace and defence firms, making it an integral partner in the
          international </p>
        <p>supply chain and in some instances, a global single source provider for
          leading defence OEMs.</p>
        <h3>Tata A&D offers a full range of integrated solutions across:</h3>
        <ul>
          <li>Aerostructures & Aero-Engines</li>
          <li>Airborne Platforms & Systems</li>
          <li>Defence & Security</li>
          <li>Land Mobility</li>
        </ul>
        <p>The Tata group has served as a trusted partner to India's armed forces for over six decades
          and will continue to provide world-class standards of quality and delivery that the Tata name
          is known for.
        </p>
      </div>
      <div className="headerboards">
        <h1>Board Of Directors</h1>
      </div>
      <div className="director">
        <div className="box1 box"></div>
        <div className="box2 box"></div>
        <div className="box1 box"></div>
      </div>
      <div className="director2">
        <div className="box1 box"></div>
        <div className="box2 box"></div>
        <div className="box1 box"></div>
      </div>
      <div className="ourstory">
        <h1>OUR STORY </h1>
        <p>The evolution of our enterprise, from the pioneering</p>
        <p>pvision of Jamsetji Tata to a leader among India's </p>
        <p>aerospace and defence players</p>
      </div>
      <div className="do1">
        <div className="do">
          <h1>WHAT WE DO</h1>
          <h2>AEROSPACE AND AEROENGINES</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, amet explicabo repudiandae quo commodi minus! </p>
          <p>Alias rerum dolor molestiae perferendis voluptatem! Blanditiis, ipsum corporis expedita odio nemo accusamus quis</p>
          <p> inventore?</p>
        </div>
        <div className="domage"></div>
      </div>
      <footer>
        <div className="footpanel">
          {/* ...footer content as in Home.jsx... */}
        </div>
      </footer>
    </>
  );
}

