// src/pages/Contact.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Course: React.FC = () => {
    return (
        <div>
         {/* <div style={{ marginLeft: '25vw', padding: '20px' }}> */}
            <Navbar></Navbar>
            <h1>Course Page</h1>
            <p>Get in touch with us through this page.</p>
        </div>
    );
};

export default Course;
