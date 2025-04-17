import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Course.css";
import axios from "axios";
import "../../public/cssquestion.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL;

const Question: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // For radio type questions: store answer using question _id as key and the selected choice id as value
  const [answers, setAnswers] = useState<Record<string, any>>({});
  // For text type questions: store answers as an array per question (each element corresponds to a dynamic input)
  // const [textAnswers, setTextAnswers] = useState<Record<string, string[]>>({});
  const { setId } = useParams();
  const [name, setName] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [start, setStart] = useState<boolean>(true);
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
  const onSummit = async () => {
    try {
      Swal.fire({
        title: "summit your answer?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "your answer is saved!",
            // text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      // const payload = {
      //   name: name, // example values
      //   student_id: studentId,
      //   set_id: setId,
      //   answers: answers, // example array of selected answer IDs
      //   timestamp: Date.now(),
      // };

      // const response = await axios.post(
      //   `${API_URL}/user-answer-sets/summit`,
      //   payload
      // );
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error posting to questions endpoint:", error);
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
    setAnswers((prev) => {
      const prevAnswers = prev[currentQuestionId] || [];
      const newAnswers = [...prevAnswers];
      newAnswers[choiceIndex] = value;
      return { ...prev, [currentQuestionId]: newAnswers };
    });
  };

  useEffect(() => {
    console.log("radio answers", answers);
  }, [answers]);

  // useEffect(() => {
  //   console.log("text answers", textAnswers);
  // }, [textAnswers]);

  return (
    <div className="wrapper">
      <Navbar />

      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <div>
          {start ? (
            <div>
              <div className="enter-name">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="enter-studentId">
                <input
                  type="text"
                  placeholder="Enter Your Student ID"
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    // handleTextAnswerChange(index, e.target.value)
                  }}
                ></input>
              </div>
              <div>
                <button
                  onClick={() => {
                    setStart(false);
                  }}
                >
                  start
                </button>
              </div>
            </div>
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
                                answers[questions[currentIndex]._id] ===
                                choice._id
                              }
                              onChange={(e) =>
                                handleAnswerChange(e.target.value)
                              }
                            />
                            {choice.choice_text}
                          </label>
                        </div>
                      )
                    )}
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
                                  answers[questions[currentIndex]._id]?.[
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
                      <iframe
                        // height="300"
                        style={{
                          width: "50%",
                          height: "50vh",
                          border: "none",
                          overflow: "hidden",
                        }}
                        title="Smooth as Butter Working Example_OutSystems Experts"
                        src="https://codepen.io/jung2012pt/embed/wBvNpyJ?default-tab=html%2Cresult"
                        loading="lazy"
                        allowFullScreen
                      >
                        See the Pen{" "}
                        <a href="https://codepen.io/jung2012pt/pen/wBvNpyJ">
                          Smooth as Butter Working Example_OutSystems Experts
                        </a>{" "}
                        by jung2012pt (
                        <a href="https://codepen.io/jung2012pt">@jung2012pt</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                      </iframe>
                      {/* <iframe
                    height="300"
                    style="width: 100%;"
                    scrolling="no"
                    title="Smooth as Butter Working test"
                    src="https://codepen.io/jung2012pt/embed/wBvNpyJ?default-tab=html%2Cresult"
                    frameborder="no"
                    loading="lazy"
                    allowtransparency="true"
                    allowfullscreen="true"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/jung2012pt/pen/wBvNpyJ">
                      Smooth as Butter Working test
                    </a>{" "}
                    by jung2012pt (
                    <a href="https://codepen.io/jung2012pt">@jung2012pt</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                  </iframe> */}
                    </div>
                    {/* End of dynamic sentence */}
                  </div>
                </div>
              ) : (
                <div>No question type available</div>
              )}

              <div className="navigation-buttons">
                {/* <div> */}
                <button onClick={handlePrevious} disabled={currentIndex === 0}>
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                >
                  Next
                </button>
                {/* </div> */}
                {currentIndex == questions.length - 1 ? (
                  <div className="submit-button">
                    <button onClick={onSummit}>Submit</button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
