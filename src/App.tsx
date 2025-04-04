import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import "./App.css"; // Create a CSS file for styling
import Lesson from "./pages/Lesson";
import Sublesson from "./pages/Sublesson";

import Quiz from "./pages/Quiz";
import Question from "./pages/Question";
// import GradientTopography from "./lessons/SVG/GradientTopography";

const App: React.FC = () => {
  return (
    // <GradientTopography />
    <div>
      {/* <Home></Home> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/sublesson/:id" element={<Sublesson />} />

            <Route path="/quiz" element={<Quiz />} />
            <Route path="/question/:setId" element={<Question />} />
          </Routes>
        </div>
      </Router>
    </div>

    // <Router>
    //     <Sidebar />
    //     <Navbar />
    //     <div style={{ marginLeft: '25vw', padding: '20px' }}>
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/about" element={<About />} />
    //             <Route path="/contact" element={<Contact />} />
    //         </Routes>
    //     </div>
    // </Router>
  );
};

export default App;
