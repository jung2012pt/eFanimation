// import * as React from "react";
import React, {  useState } from "react";
// import "../../public/style1.css"; // Import Dark Mode CSS
const TestTheme: React.FC = () => {
  // constructor(props:any) {
  //   super(props);
  //   this.state = { stylePath: "style1.css" };
  // }
  // const [theme, setTheme] = useState<string>("style1.css"); // Default themes
  const [id, setId] = useState<string>("1"); // Default themes

  // useEffect(() => {
  //   const cleanupStyles = loadLessonStyles(
  //     theme === "light" ? "dark" : "light"
  //   );
  //   return cleanupStyles;
  // }, [theme]);

  // render() {
  const loadLessonStyles = (lessonId: string) => {
    setId(lessonId == "1" ? "2" : "1");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `../../public/style${id}.css`; // Adjust based on your lesson CSS files
    document.head.appendChild(link);
    document.head.appendChild(link);

    // Clean up the previous CSS file when switching lessons
    return () => {
      const existingLink = document.querySelector(
        `link[href*="style${id}.css"]`
      );
      
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
    
  };
  
  return (
    <div>
      {/* <link rel="stylesheet" type="text/css." href={theme} /> */}
      <button
        onClick={() => {
          // setTheme(theme === "style1.css" ? "style1.css" : "style2.css");
          loadLessonStyles(id);
        }}
      >
        Switch to {id === "1" ? "style1.css" : "style2.css"} Mode
      </button>
    </div>
  );
  // }
};
export default TestTheme;