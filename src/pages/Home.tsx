// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PutValueComponent from './put';
// import { Route, Router, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import About from './About';
// import Contact from './Course';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            Homehome
            <PutValueComponent></PutValueComponent>
            {/* <Router>

                <div style={{ marginLeft: '25vw', padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

            </Router> */}

        </div>
    );
};

export default Home;