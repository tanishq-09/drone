import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/aerostructures.css';

export default function Aerostructures() {
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
      <div className="hero-aero">
        <h1>Aerostructures & Aero-Engines</h1>
      </div>
      <section className="aero-content">
        <h2>Precision Engineering. Global Integration.</h2>
        <p>
          Autonomous Technologies is at the forefront of developing and manufacturing advanced aerostructures and aero-engine components that power both military and commercial aircraft. Our state-of-the-art facilities support the full product lifecycle — from design and tooling to manufacturing, assembly, and testing.
        </p>
        <p>
          We are a trusted partner for global OEMs and Tier-1 suppliers, delivering precision-built, lightweight components that meet the most demanding quality and airworthiness standards. Our teams specialize in composites, sheet metal, and machining processes for airframes, nacelles, engine mounts, and control surfaces.
        </p>
        <div className="capability-grid">
          <div className="capability-box">
            <h3>Composite Structures</h3>
            <p>High-strength, lightweight components using carbon fiber for wings, fairings, and empennage.</p>
          </div>
          <div className="capability-box">
            <h3>Machined Engine Parts</h3>
            <p>Precision-engineered turbine casings, compressor parts, and rotors for leading aero-engines.</p>
          </div>
          <div className="capability-box">
            <h3>Sub-Assemblies</h3>
            <p>Wing-boxes, fuselage panels, pylon systems and more, ready for final aircraft assembly.</p>
          </div>
          <div className="capability-box">
            <h3>Centers of Excellence</h3>
            <p>Dedicated units for NDT, heat treatment, and cleanroom composite operations.</p>
          </div>
        </div>
      </section>
      <section className="tech">
        <h2>Certified for the Skies</h2>
        <p>
          Our aerospace manufacturing complies with global standards including AS9100D, NADCAP, and OEM-specific certifications. With a deep focus on quality, traceability, and process control, we deliver consistently to tight schedules and rigorous audits.
        </p>
        <p>
          Through digital thread integration, we support full traceability and real-time monitoring — critical for mission-ready performance and airworthiness.
        </p>
      </section>
      <footer>
        <div className="footpanel">
          {/* ...footer content as in Home.jsx... */}
        </div>
      </footer>
    </>
  );
}
