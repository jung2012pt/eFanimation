import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import "./Course.css";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const Quiz: React.FC = () => {
  const [questionSets, setQuestionSets] = useState<any[]>([]); // To store fetched questionSets
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  // Function to generate random size for a course
  const randomSizeCard = (): "small" | "medium" | "large" => {
    const sizeCard = ["small", "medium", "large"];
    const randomIndex = Math.floor(Math.random() * sizeCard.length);
    return sizeCard[randomIndex] as "small" | "medium" | "large"; // Return random size
  };
  // Fetch questionSets from backend APIF
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}/question-sets`);
        // Add a random sizeCard to each course before setting state
        const updatedCourses = response.data.map((course: any) => ({
          ...course,
          sizeCard: randomSizeCard(), // Add the random sizeCard
        }));
        setQuestionSets(updatedCourses); // Store the fetched and updated data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching questionSets:", error);
        setLoading(false);
      }
    };
    const existingLink = document.getElementById("lesson-style");
    if (existingLink) {
      existingLink.remove();
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Quiz Page</h1>
      <p>Explore our quizs below.</p>

      {/* Show loading spinner or message */}
      {loading ? (
        <p>Loading quizs...</p>
      ) : (
        <div className="groupCard">
          {questionSets.length > 0 ? (
            questionSets.map((course) => (
              <Card
                key={course._id}
                description={course.description}
                title={course.name}
                lessonAmount={course.lessonAmount}
                id={course._id}
                size={course.sizeCard}
              />
            ))
          ) : (
            <p>No quizs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
