import React from "react";
import "./Navbar.css";
import FlairLogo from "./logo/FlairLogo";



const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a className="active" href="/">
        <FlairLogo />
      </a>

      <div className="navmenu">
        <div className="navtab">
          <a href="/course">Course</a>
        </div>
        <div className="navtab">
          <a href="/quiz">Quiz</a>
        </div>
        {/* <div>
          <a href="/scoreboard">Score board</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
