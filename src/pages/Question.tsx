import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Course.css";
import axios from "axios";
import "../../public/cssquestion.css";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Question: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { setId } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`${API_URL}/questions/set/${setId}`);
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questionSets:", error);
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [setId]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="wrapper">
      <Navbar />

      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {" "}
          <div className="question-title">
            {questions[currentIndex]?.question_title}
          </div>
          <hr></hr>
          <div className="question-number">
            <h2>
              {currentIndex + 1}.) Question {currentIndex + 1} of{" "}
              {questions.length}
            </h2>
            <div className="choice">
              {questions[currentIndex].choices?.map(
                (choice: any, index: number) => (
                  <div key={index} className="choice-item">
                    {choice.choice_text}
                  </div>
                )
              )}
            </div>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} disabled={currentIndex === 0}>
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
