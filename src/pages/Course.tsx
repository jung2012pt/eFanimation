import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/card';
import './Course.css';
import axios from 'axios';

const Course: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]); // To store fetched courses
  const [loading, setLoading] = useState<boolean>(true); // For loading state

  // Fetch courses from backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://efanbackend.fly.dev/courses');
        setCourses(response.data); // Store the fetched data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

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
        <div className='groupCard'>
          {courses.length > 0 ? (
            courses.map((course) => (
              <Card key={course._id} description={course.description} title={course.name} lessonAmount={course.lessonAmount} id={course._id} size="medium" />
              
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
