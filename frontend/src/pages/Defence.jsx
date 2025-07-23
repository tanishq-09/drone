import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style2.css';

export default function Defence() {
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
      <div className="hero1">
        <div className="mage">
          <h1>WEAPONS, SENSORS AND C41 SYSTEMS</h1>
          <p>The First Line of Defence on Future Battlefields</p>
        </div>
      </div>
      <div className="hero2">
        <h1>Weapons, Sensors and C4I Systems</h1>
        <p>Tata Advanced Systems has built up an unmatched depth of capability in integration of various sensors, weapons with cutting edge technologies to deliver complete platform solutions for the armed</p>
        <p>and paramilitary forces, homeland security agencies and state police forces. The Tatas have played a vital role in delivering key solutions across the technology spectrum for vital military programs of</p>
        <p>national importance.</p>
        <br />
        <p>Today, Tata Advanced Systems is a key player in the indigenous Design, Development, Production, Integration, Supply and Life-Cycle support of mission critical defence systems of strategic</p>
        <p>importance..</p>
      </div>
      <div className="hero3">
        <div className="back3">
          <div className="first">
            <h1>Alpha 1</h1>
            <p>self combat drone</p>
          </div>
          <div className="second">
            <h1>Beta 2</h1>
            <p>delivery prototype</p>
          </div>
          <div className="third">
            <h1>Gamma 3 </h1>
            <p>Military equipped</p>
          </div>
          <div className="forth">
            <h1>Delta 4</h1>
            <p>Survivvelence expert</p>
          </div>
        </div>
      </div>
      <div className="hero4">
        <h1>Physical and Cyber Security</h1>
        <p>Tata Advanced Systems provides innovative and state-of-the-art solutions in areas of Critical Infrastructure, Border Protection, Urban Security & Surveillance, Transportation, Law Enforcement and for</p>
        <p>ensuring adequate preparedness for natural disasters. We provide Integrated Security Solutions that enhances situational awareness and actionable intelligence for protection of critical assets,</p>
        <p>infrastructure and people.</p>
        <br />
        <p>Tata Advanced Systems has a strong pedigree in the field of Cyber Security and this is an especially vital segment on the future battlefield with the increased use of software and digital technologies on</p>
        <p>military platforms. Our Cyber Security Practice has built up unmatched domain knowledge and expertise in protection of intellectual property, curbing cyber intrusions and securing highly sensitive</p>
        <p>data.</p>
      </div>
      <div className="hero5">
        <div className="headers5">
          <div className="first5">
            <h1>PHYSICAL SECURITY</h1>
            <p>TATA ADVANCED SYSTEMS PROVIDES INNOVATIVE AND STATE-OF-THE-ART</p>
            <p>SOLUTIONS IN THE AREAS OF CRITICAL INFRASTRUCTURE, BORDER PROTECTION</p>
            <p>URBAN SECURITY AND SURVEILLANCE, TRANSPORTATION, LAW ENFORCEMENT..</p>
          </div>
          <div className="second5">
            <h1>CYBER SECURITY</h1>
            <p>PREPARE YOUR ENTERPRISE TO GROW FEARLESSLY IN TODAY’S DIGITALLY</p>
            <p>TRANSFORMING ECOSYSTEM AND BE FUTURE-READY AGAINST ALL UNKNOWN AND</p>
            <p>KNOWN THREATS. THE CYBER SECURITY PRACTICE OF TATA ADVANCED SYSTEMS..</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footpanel">
          {/* ...footer content as in Home.jsx... */}
        </div>
      </footer>
    </>
  );
}
