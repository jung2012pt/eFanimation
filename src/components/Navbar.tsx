import React from "react";
import "./Navbar.css"; // Create a CSS file for styling
// import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    // <div className="navbar">
    //     {/* <Home> */}
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    // </div>

    <div className="navbar">
      <a className="active" href="/">
        HomeFFF
      </a>

      <div className="navmenu">
        <div className="navtab"><a href="/course">Course</a></div>
        <div className="navtab"><a href="/quiz">Quiz</a></div>
        <div ><a href="/about">About</a></div>
      </div>
    </div>
  );
};

export default Navbar;
