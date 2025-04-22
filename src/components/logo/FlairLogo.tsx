import React, { useState, useRef } from "react";
import "../Navbar.css";
import { Lightning, Diamond, Flower } from "./logo";

const finalText = "EFanimation";
const flairComponents = [<Lightning />, <Diamond />, <Flower />];

const FlairLogo: React.FC = () => {
  const [displayed, setDisplayed] = useState<(string | JSX.Element)[]>(
    buildText(finalText)
  );
  const hasAnimated = useRef(false);

  function buildText(text: string): (string | JSX.Element)[] {
    return text.split("").map((char, i) => (
      <span key={`char-${i}`} className="letter">
        {char}
      </span>
    ));
  }

  function buildFlair(text: string): (string | JSX.Element)[] {
    return text.split("").map((char, i) => {
      if (Math.random() < 0.3) {
        const flair =
          flairComponents[Math.floor(Math.random() * flairComponents.length)];
        return (
          <span key={`flair-${i}`} className="letter flair-icon">
            {flair}
          </span>
        );
      }
      return (
        <span key={`char-${i}`} className="letter">
          {char}
        </span>
      );
    });
  }

  const handleHover = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Build once, set once = no flicker
    const flaired = buildFlair(finalText);
    setDisplayed(flaired);
  };

  const handleLeave = () => {
    const original = buildText(finalText);
    setDisplayed(original);
    hasAnimated.current = false;
  };

  return (
    <div
      className="flair-logo"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {displayed}
    </div>
  );
};

export default FlairLogo;
