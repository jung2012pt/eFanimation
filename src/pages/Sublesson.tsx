import React from "react";
import Navbar from "../components/Navbar";
import Transition from "../lessons/CSS/Transition";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Sublesson: React.FC = () => {
  const { id } = useParams(); // Get ID from URL
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [sublessons, setSublessons] = useState<any[]>([]); // Use null initially
  const fetchSublessons = async () => {
    try {
      const response = await axios.get(
        "https://efanbackend.fly.dev/sublessons/lesson/" + id
        // "http://localhost:3000/sublessons/lesson/" + id
      );
      console.log("response.data", response.data);

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
    console.log(sublessons[0]);

    if ("transition" == sublessons[0].reactComponent) {
      return <Transition></Transition>;
    }
    return <div>hello</div>;
  }
  useEffect(() => {
    fetchSublessons();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {sublessons.length == 0 ? (
        <p>No sublessons found for this course.</p>
      ) : (
        <div>
          {/* <h3>{sublessons[0].title}</h3>
          <p>{sublessons[0].content}</p> */}
          {getComponent()}
        </div>
      )}

      {/* <h1>sublesson</h1> */}
      {/* <Transition></Transition> */}
    </div>
  );
};

export default Sublesson;
