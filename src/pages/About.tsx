// src/pages/About.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>About Page</h1>
            <p>This is the About Page. Here you can learn more about us.</p>
        </div>
    );
};

export default About;
