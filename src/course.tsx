import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    level: string;
    modules: number;
    hours: number;
    isNew?: boolean;
    isPro?: boolean;
    isUpdated?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, level, modules, hours, isNew, isPro, isUpdated }) => {
    return (
        <div className="course-card">
            <div className="course-header">
                <h2>{title}</h2>
                {isPro && <span className="badge pro">PRO</span>}
                {isNew && <span className="badge new">NEW</span>}
                {isUpdated && <span className="badge updated">UPDATED</span>}
            </div>
            <p>{description}</p>
            <div className="course-details">
                <p>Level: {level}</p>
                <p>Modules: {modules}</p>
                <p>Estimated Time: {hours} hrs</p>
            </div>
        </div>
    );
};

const CoursesPage = () => {
    const courses = [
        {
            title: 'Advanced JavaScript',
            description:
                'Master advanced JavaScript concepts through tons of hands-on coding challenges designed to deepen your understanding of the world\'s most used coding language.',
            level: 'Intermediate',
            modules: 11,
            hours: 9.8,
            isPro: true,
            isNew: true,
        },
        {
            title: 'The Frontend Developer Career Path',
            description:
                'Launch your career as a frontend developer with this immersive path. Created in collaboration with Mozilla MDN, ensuring that you\'ll learn the latest best practices for modern web development, and stand out from other job applicants.',
            level: 'Beginner',
            modules: 64,
            hours: 80.1,
            isPro: true,
            isUpdated: true,
        },
        {
            title: 'The AI Engineer Path',
            description:
                'Build apps powered by generative AI - an essential 2024 skill for product teams at startups, agencies, and large corporations.',
            level: 'Intermediate',
            modules: 20,
            hours: 15.5,
            isPro: true,
            isNew: true,
        },
        {
            title: 'Learn TypeScript',
            description:
                'Simplify your coding experience with TypeScript\'s error-proofing.',
            level: 'Beginner',
            modules: 5,
            hours: 4.0,
            isNew: true,
        },
    ];

    return (
        <div className="courses-page">
            <h1>Courses</h1>
            <p>
                Improve your web development skills in a variety of languages and frameworks, including HTML, CSS, JavaScript, React, TypeScript, and cutting-edge methods in AI.
            </p>
            <div className="course-list">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;

// CSS styles for the page (assuming you're using a CSS-in-JS approach or importing CSS)
// const styles = `
//   .courses-page {
//     padding: 20px;
//   }
//   .course-list {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px;
//   }
//   .course-card {
//     border: 1px solid #ccc;
//     padding: 20px;
//     border-radius: 8px;
//     max-width: 300px;
//   }
//   .course-header {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }
//   .badge {
//     font-size: 0.8em;
//     padding: 4px 8px;
//     border-radius: 4px;
//     color: #fff;
//   }
//   .badge.pro {
//     background-color: #ff9800;
//   }
//   .badge.new {
//     background-color: #4caf50;
//   }
//   .badge.updated {
//     background-color: #2196f3;
//   }
// `;

// Assuming styles will be inserted appropriately (e.g., via styled-components or a CSS module) into the JSX
``
