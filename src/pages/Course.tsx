// src/pages/Contact.tsx
import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/card';
import './Course.css';
// import KVFetchComponent from './D1fetch';

const Course: React.FC = () => {
   
    return (
        <div>
            {/* <div style={{ marginLeft: '25vw', padding: '20px' }}> */}
            <Navbar></Navbar>
            <h1>Course Page</h1>
            <p>Get in touch with us through this page.</p>
            {/* <KVFetchComponent></KVFetchComponent> */}
            <div className='groupCard'>
                <Card title="Advanced JavaScript" size="large" />
                <Card title="The Full Stack Developer Path" size="small" />
                <Card title="The Full Stack Developer Path" size="small" />
                <Card title="React Developer Journey" size="medium" />
                <Card title="React Developer Journey" size="small" />
                <Card title="React Developer Journey" size="small" />
                <Card title="React Developer Journey" size="small" />
                <Card title="React Developer Journey" size="small" />
                <Card title="The Full Stack Developer Path" size="large" />
                <Card title="React Developer Journey" size="small" />

            </div>
        </div>
    );
};

export default Course;
