import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Course from './Course';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
type Course = {
    id: number;
    name: string;
    title: string;
    description: string;
  };
const Lesson: React.FC = () => {
    const navigate = useNavigate();
      const handleClick = (id: any) => { 
        console.log("ddd");
      
        navigate("/sublesson/"+id); // Navigates to the Lesson page
      };
    const [course, setCourse] = useState<Course | null>(null); // Use null initially
    const [lessons, setLessons] = useState<any[]>([]); // Use null initially

    const [loading, setLoading] = useState<boolean>(true); // For loading state
    const { id } = useParams(); // Get ID from URL
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://efanbackend.pages.dev/courses/'+id);
        console.log('response.data',response.data);
        
        setCourse(response.data); // Store the fetched data in state
        setLoading(false); // Set loading to false when data is fetched
        console.log(course);
        console.log(loading);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };
    const fetchLessons = async () => {
        try {
          const response = await axios.get('https://efanbackend.pages.dev/lessons/course/'+id);
          console.log('response.data',response.data);
          
          setLessons(response.data); // Store the fetched data in state
          setLoading(false); // Set loading to false when data is fetched
          console.log(course);
          
        } catch (error) {
          console.error("Error fetching courses:", error);
          setLoading(false);
        }
      };
    useEffect(() => {
    
        fetchCourses();
        fetchLessons();
        console.log(course);
        
      }, []);
        // ✅ Log course after state updates
  useEffect(() => {
    console.log("Updated course:", course);
  }, [course]); // Runs whenever `course` changes
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="title">
            {course?.name}
            </h1>
            <p className="description">
                    {course?.description}
            </p>
            <p className="sublesson">
                {/* {lesson.name} */}
            </p>
            <h2>Lessons</h2>
            <ul>
              {lessons.length === 0 ? (
                <p>No lessons found for this course.</p>
              ) : (
                lessons.map((lesson) => (
                  <li onClick={()=>{
                    handleClick(lesson._id)
                  }}key={lesson.id}>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.content}</p>
                  </li>
                ))
              )}
            </ul>
        </div>
    );
};

export default Lesson;