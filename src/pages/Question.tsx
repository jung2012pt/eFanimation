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
  // For radio type questions: store answer using question _id as key and the selected choice id as value
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // For text type questions: store answers as an array per question (each element corresponds to a dynamic input)
  const [textAnswers, setTextAnswers] = useState<Record<string, string[]>>({});
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

  // Existing function for radio type questions
  const handleAnswerChange = (choiceId: string) => {
    const currentQuestionId = questions[currentIndex]._id;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionId]: choiceId,
    }));
  };

  // New function for text type questions to handle each dynamic input
  const handleTextAnswerChange = (choiceIndex: number, value: string) => {
    const currentQuestionId = questions[currentIndex]._id;
    setTextAnswers((prev) => {
      const prevAnswers = prev[currentQuestionId] || [];
      const newAnswers = [...prevAnswers];
      newAnswers[choiceIndex] = value;
      return { ...prev, [currentQuestionId]: newAnswers };
    });
  };

  useEffect(() => {
    console.log("radio answers", answers);
  }, [answers]);

  useEffect(() => {
    console.log("text answers", textAnswers);
  }, [textAnswers]);

  return (
    <div className="wrapper">
      <Navbar />

      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <div>
          {questions[currentIndex]?.question_type === "choice" ? (
            <div>
              <div className="question-title">
                {questions[currentIndex]?.question_title}
              </div>
              <hr />
              <div className="question-number">
                <h2>
                  {currentIndex + 1}.) Question {currentIndex + 1} of{" "}
                  {questions.length}
                </h2>
              </div>
              <div className="question-text">
                {questions[currentIndex]?.question_text}
              </div>
              <div className="choice">
                {questions[currentIndex].choices?.map(
                  (choice: any, index: number) => (
                    <div key={index} className="choice-item">
                      <label>
                        <input
                          type="radio"
                          name={`question-${questions[currentIndex]._id}`}
                          value={choice._id}
                          checked={
                            answers[questions[currentIndex]._id] === choice._id
                          }
                          onChange={(e) => handleAnswerChange(e.target.value)}
                        />
                        {choice.choice_text}
                      </label>
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
          ) : questions[currentIndex]?.question_type === "text" ? (
            <div>
              <div className="question-title">
                {questions[currentIndex]?.question_title}
              </div>
              <div className="question-textPart">
                {questions[currentIndex]?.question_text}
              </div>
              <hr />
              <div className="question-number">
                <h2>
                  {currentIndex + 1}.) Question {currentIndex + 1} of{" "}
                  {questions.length}
                </h2>
              </div>
              <div className="text-answer">
                <div className="default-text">
                  {questions[currentIndex].choices?.map(
                    (choice: any, index: number) => {
                      const parts = choice.choice_text.split("**");
                      return (
                        <span
                          key={choice._id || index}
                          className="choice-inline"
                        >
                          {parts[0]}
                          <input
                            type="text"
                            placeholder="Enter your answer"
                            value={
                              textAnswers[questions[currentIndex]._id]?.[
                                index
                              ] || ""
                            }
                            onChange={(e) =>
                              handleTextAnswerChange(index, e.target.value)
                            }
                          />
                          {parts[1]}
                          {/* Adding a space between each inline segment */}
                          &nbsp;
                        </span>
                      );
                    }
                  )}
                  <button className="submit-button">Submit</button>
                </div>
                {/* End of dynamic sentence */}
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
          ) : (
            <div>No question type available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
