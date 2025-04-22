// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// import "../../public/style1.css"
const Score: React.FC = () => {
  const [questionSets, setQuestionSets] = useState<any[]>([]); // To store fetched questionSets
  const [loading, setLoading] = useState<boolean>(true); // For loading state

  useEffect(() => {
    const fetchQuestionSets = async () => {
      try {

        const response = await axios.get(`${API_URL}/question-sets`);

        setQuestionSets(response.data);
        console.log("response:", response);
        setLoading(false); // Set loading to false when data is fetched

      } catch (error) {
        console.error("Error fetching questionSets:", error);
        setLoading(false);
      }
    };

    fetchQuestionSets();
  }, []);
useEffect(() => {
  const fetchQuestionSets = async () => {
    
    try {
      const response = await axios.get(`${API_URL}/user-answer-sets`);

      setQuestionSets(response.data);
      console.log("response:", response);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching user-answer-sets:", error);
      setLoading(false);
    }
  };

  fetchQuestionSets();
}, [questionSets]);
  return (
    <div>
      {loading ? (
        <p>Loading quizs...</p>
      ) : (
        <div>
          <Navbar></Navbar>
          <h1 className="header">Score Page</h1>
          <p className="content">
            This is the score Page. Here you can learn more about us.
            {questionSets[1].name}
          </p>
        </div>
      )}
    </div>
  );
};

export default Score;
