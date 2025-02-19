import React, { useEffect, useRef } from "react";
import './card.css';
import { useNavigate } from "react-router-dom";

interface CardProps {
    title: string;
    description: string;
    lessonAmount: number;
    id:string;
    size?: 'small' | 'medium' | 'large'; // Added size prop with default values
}

const Card: React.FC<CardProps> = ({ title,description,lessonAmount,id, size = 'medium' }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
  const handleClick = () => {
    navigate("/lesson/"+id); // Navigates to the Lesson page
  };
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse position relative to the card
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty(`--mouse-y`, `${y}px`);
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const cardSizeClass = `card-${size}`;

    return (
        <div  onClick={handleClick} ref={cardRef} id="card" className={`card ${cardSizeClass}`}>
              
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="description">
                    {description}
                   
                </p>
                <p className="lessonAmount">
                lessonAmount {lessonAmount}
                   
                </p>
                <div className="tags">
                    {/* <span className="tag">Frontend</span>
                    <span className="tag">64 modules</span>
                    <span className="tag">Beginner</span>
                    <span className="tag">80.1 hrs</span> */}
                </div>
            </div>
            <div className="footer">
                {/* <span className="profile-pic">👤</span>
                <span className="profile-pic">👤</span>
                <span className="profile-pic">👤</span>
                <span className="profile-pic">👤</span> */}
            </div>
        </div>
    );
};

export default Card;
