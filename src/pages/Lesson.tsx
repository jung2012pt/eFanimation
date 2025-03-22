import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Course from "./Course";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Lesson.css";
// import { gsap } from "gsap";
import "../../public/loading.css";
import ExpandingList from "../components/ExpandingList";
const API_URL = import.meta.env.VITE_API_URL;
// import "../lessons/lessonCSS/css.css"; // Import Light Mode CSS
// import "./dark.css"; // Import Dark Mode CSS
type Course = {
  id: number;
  name: string;
  title: string;
  description: string;
  cssFileName: string;
};
const Lesson: React.FC = () => {
  // const navigate = useNavigate();
  // const handleClick = (id: any) => {
  //   console.log("ddd");

  //   navigate("/sublesson/" + id); // Navigates to the Lesson page
  // };
  const [course, setCourse] = useState<Course | null>(null); // Use null initially
  const [lessons, setLessons] = useState<any[]>([]); // Use null initially

  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const { id } = useParams(); // Get ID from URL

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_URL}/courses/` + id);
      console.log("response.data", response.data);

      setCourse(response.data); // Store the fetched data in state
      // setLoading(false); // Set loading to false when data is fetched
      // console.log(course);
      console.log(loading);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // setLoading(false);
    }
  };
  const fetchLessons = async () => {
    try {
      const response = await axios.get(`${API_URL}/lessons/course/` + id);
      // console.log("response.data", response.data);

      setLessons(response.data); // Store the fetched data in state
      // setLoading(false); // Set loading to false when data is fetched
      // console.log(course);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // setLoading(false);
    }
  }; // Load lesson-specific styles
  const loadLessonStyles = () => {
    //  setId(lessonId == "1" ? "2" : "1");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    // link.as = "style"; // Make sure the browser treats it as a stylesheet
    link.href = `../../public/${course?.cssFileName}.css`; // Adjust based on your lesson CSS files
    link.id = "lesson-style"; // Unique ID for easy removal
    link.onload = () => {
      setLoading(false); // CSS is loaded, stop the loading spinner
      document.body.classList.add("loaded");
    };
    console.log(link.href);
    document.head.appendChild(link);
    //    link.href = `../lessons/lessonCSS/${lessonId}.css`; // Adjust based on your lesson CSS files
    // console.log("lessonId" + lessonId);

    // Clean up the previous CSS file when switching lessons
    return () => {
      // Remove previous lesson CSS when switching pages
      const existingLink = document.getElementById("lesson-style");
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  };
  // const existingLink = document.getElementById("lesson-style");
  // if (existingLink) {
  //   existingLink.remove();
  // }

  useEffect(() => {
    fetchLessons();
    fetchCourses();
    console.log("Existing link:", document.getElementById("lesson-style"));
    //  gsap.set(".lesson-page", {
    //    backgroundColor: "#2c2c54", // Apply background color instantly
    //    padding: "20px", // Apply padding immediately to prevent shifting
    //    margin: "0", // Apply margin immediately to prevent shifting
    //  });

    //  // Apply the transition with a delay to make it smooth
    //  gsap.to(".lesson-page", {
    //    backgroundColor: "#1a1a2e", // Final background color
    //    duration: 1,
    //    ease: "power2.inOut",
    //  });
  }, []);
  // ✅ Log course after state updates
  useEffect(() => {
    // console.log("Updated course:", course);
    if (course) {
      loadLessonStyles();
      console.log("Applied lesson CSS:", course?.cssFileName);
    }
  }, [course]); // Runs whenever `course` changes

  // const location = useLocation();

  return (
    <div className="lesson-page">
      {loading && <div className="loading-spinner">Loading...</div>}{" "}
      {/* Show spinner while loading */}
      {!loading && (
        <div>
          <Navbar></Navbar>
          <div className="title">
            <h1>{course?.name}</h1>
          </div>
          <div className="description">
            <p>{course?.description}</p>
          </div>
          <div className="container-lesson">
            <hr></hr>
            <p className="sublesson">{/* {lesson.name} */}</p>
            <div>
              {lessons.length === 0 ? (
                <p>No lessons found for this course.</p>
              ) : (
                lessons.map((lesson) => (
                  <ExpandingList
                    title={lesson.title}
                    description={lesson.content}
                    id={lesson._id}
                  ></ExpandingList>
                ))
              )}
            </div>
            {/* <ul>
              {lessons.length === 0 ? (
                <p>No lessons found for this course.</p>
              ) : (
                lessons.map((lesson) => (
                  <li
                    onClick={() => {
                      handleClick(lesson._id);
                    }}
                    key={lesson.id}
                  >
                    <h3>{lesson.title}</h3>
                    <p>{lesson.content}</p>
                  </li>
                  
                ))
              )}
            </ul> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
