import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import "./Course.css";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const Course: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]); // To store fetched courses
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  // Function to generate random size for a course
  const randomSizeCard = (): "small" | "medium" | "large" => {
    const sizeCard = ["small", "medium", "large"];
    const randomIndex = Math.floor(Math.random() * sizeCard.length);
    return sizeCard[randomIndex] as "small" | "medium" | "large"; // Return random size
  };
  // Fetch courses from backend APIF
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses`);
        // Add a random sizeCard to each course before setting state
        const updatedCourses = response.data.map((course: any) => ({
          ...course,
          sizeCard: randomSizeCard(), // Add the random sizeCard
        }));
        setCourses(updatedCourses); // Store the fetched and updated data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching courses:", error);
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
      <h1>Course Page</h1>
      <p>Explore our courses below.</p>

      {/* Show loading spinner or message */}
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="groupCard">
          {courses.length > 0 ? (
            courses.map((course) => (
              <Card
                key={course._id}
                description={course.description}
                title={course.name}
                // lessonAmount={course.lessonAmount}
                id={course._id}
                size={course.sizeCard}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Course;
