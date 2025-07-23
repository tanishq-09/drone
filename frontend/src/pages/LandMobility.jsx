import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landmobility.css';

export default function LandMobility() {
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
      <div className="banner">
        <div className="text1">
          <h1>Land Mobility</h1>
        </div>
      </div>
      <div className="hero1">
        <h1>Land Mobility</h1>
        <p>Tata Advanced Systems’ Land Mobility division offers a wide range of products operating across the entire
          spectrum of Military Vehicles from Logistics to front-line Combat. Tata Advanced Systems</p>
        <p>today is the largest private sector mobility player in the Defence space in India. Our mobility solutions
          portfolio includes all classes of vehicles from light to heavy combat range for the Indian and</p>
        <p>International Armed Forces.</p>
        <br />
        <p>Tata Advanced Systems Land Mobility Division has supplied over 170,000+ vehicles to various Armed Forces
          including Paramilitary & State Police. We are proud of our association with the Paramilitary</p>
        <p>& Police Forces and are continually improving & innovating products that cater to specific mission requirements.
        </p>
        <br />
        <p>Tata Advanced Systems also exports its range of specialised Defence Vehicles to SAARC, ASEAN, African Nations and
          for UN Peacekeeping Forces.</p>
      </div>
      <div className="hero2">
        <div className="box1" id="box">
          <i className="fa-solid fa-chart-simple"></i>
          <h3>1958</h3>
          <p>Start of Tata Group's association with</p>
          <p>the Defence Sector</p>
        </div>
        <div className="box2" id="box">
          <i className="fa-solid fa-gears"></i>
          <h3>1,70,000+</h3>
          <p>Vehicles supplied to the Indian Armed</p>
          <p>Forces</p>
        </div>
        <div className="box3" id="box">
          <i className="fa-solid fa-building"></i>
          <h3>India' 1st</h3>
          <p>Indigenous Armoured Amphibious</p>
          <p>Wheeled Infantry Combat vehicle</p>
          <p>designed & developed jointly with DRDO</p>
        </div>
        <div className="box4" id="box">
          <i className="fa-solid fa-industry"></i>
          <h3>1858 units</h3>
          <p>Indian Army's largest Land System order</p>
          <p>for High Mobility 6x6 vehicles</p>
        </div>
      </div>
      <div className="hero3">
        <div className="thirdtext">
          <h1>Key Customers</h1>
        </div>
        <div className="recruit">
          <div className="boxnew1" id="boxnew"></div>
          <div className="boxnew2" id="boxnew"></div>
          <div className="boxnew3" id="boxnew"></div>
        </div>
      </div>
      <div className="hero4">
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
      <footer>
        <div className="footpanel">
          {/* ...footer content as in Home.jsx... */}
        </div>
      </footer>
    </>
  );
}
