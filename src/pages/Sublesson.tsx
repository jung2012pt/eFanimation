import React from "react";
import Navbar from "../components/Navbar";
import Transition from "../lessons/CSS/Transition";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Keyframe from "../lessons/CSS/Keyframe";
import Smooth from "../lessons/CSS/Smooth-animation";
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
