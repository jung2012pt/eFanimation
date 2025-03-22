// src/pages/About.tsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
// import "../../public/style1.css"
const About: React.FC = () => {
  useEffect(() => {
    const existingLink = document.getElementById("lesson-style");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="header">About Page</h1>
      <p className="content">
        This is the About Page. Here you can learn more about us.
      </p>
    </div>
  );
};

export default About;
