import React from "react";
import Navbar from "../components/Navbar";
import Transition from "../lessons/CSS/Transition";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Keyframe from "../lessons/CSS/Keyframe";
import Smooth from "../lessons/CSS/Smooth-animation";
import Animejs from "../lessons/SVG/anime.js";
import GsapSVG from "../lessons/SVG/gsapSVG.js";
import Compare from "../lessons/SVG/compareing.js";
import Fake3D from "../lessons/3D/Fake3D.js";
import Threejs from "../lessons/3D/threejs.js";
import Simple from "../lessons/fontanimation/simpleAnimation.js";
import GSAPjavascript from "../lessons/javascripts/gsapjavascript.js";
const API_URL = import.meta.env.VITE_API_URL;
const Sublesson: React.FC = () => {
  const { id } = useParams(); // Get ID from URL
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [sublessons, setSublessons] = useState<any[]>([]); // Use null initially
  const fetchSublessons = async () => {
    try {
      const response = await axios.get(
        // `${API_URL}/sublessons/lesson/` + id
        `${API_URL}/sublessons/lesson/` + id
      );
      console.log("response.data", response.data);
      console.log(loading);
      setSublessons(response.data); // Store the fetched data in state
      setLoading(false); // Set loading to false when data is fetched
      // console.log(course);
    } catch (error) {
      console.error("Error fetching sublessons:", error);
      setLoading(false);
    }
  };

  function getComponent() {
    //'transition'
    // console.log(sublessons[1].reactComponent + "11111");

    if ("transition" == sublessons[0].reactComponent) {
      console.log("transition");
      return <Transition></Transition>;
    }
    if ("keyframe" == sublessons[0].reactComponent) {
      // var i = sublessons.length
      // while (i) {
      //   console.log(sublessons[i].reactComponent + "sub");
      //   console.log(i+"i");
      //   i--;
      // }
      return <Keyframe></Keyframe>;
    }
    if ("Smooth" == sublessons[0].reactComponent) {
      console.log("Smooth");
      return <Smooth></Smooth>;
    }
    if ("Animejs" == sublessons[0].reactComponent) {
      console.log("Anime");
      return <Animejs></Animejs>;
    }
if ("gsapSVG" == sublessons[0].reactComponent) {
  console.log("gsapSVG");
  return <GsapSVG></GsapSVG>;
}
    if ("compare" == sublessons[0].reactComponent) {
      console.log("compare");
      return <Compare></Compare>;
    }
    if ("Fake3D" == sublessons[0].reactComponent) {
      console.log("gsapSVG");
      return <Fake3D></Fake3D>;
    }
    if ("threejs" == sublessons[0].reactComponent) {
      console.log("gsapSVG");
      return <Threejs></Threejs>;
    }
    if ("simple" == sublessons[0].reactComponent) {
      console.log("gsapSVG");
      return <Simple></Simple>;
    }
    if ("gsap" == sublessons[0].reactComponent) {
      console.log("gsapSVG");
      return <GSAPjavascript></GSAPjavascript>;
    }
    
    return <div>hello</div>;
  }
  useEffect(() => {
    fetchSublessons();
  }, []);
  useEffect(() => {
    const existingLink = document.getElementById("lesson-style");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {sublessons.length == 0 ? (
        <div></div> // <p className="content">No sublessons found for this course.</p>
      ) : (
        <div>
          {/* <h3>{sublessons[0].title}</h3>
          <p className="content">{sublessons[0].content}</p> */}
          {getComponent()}
        </div>
      )}

      {/* <h1 className="header">sublesson</h1> */}
      {/* <Transition></Transition> */}
    </div>
  );
};

export default Sublesson;
