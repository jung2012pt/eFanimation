import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";

const Simple: React.FC = () => {
  return (
    <div>
      <h1 className="topic">Simple Text Animation Guide</h1>

      <p className="content">
        When a webpage loads, the browser often uses a system font (like Arial
        or Times New Roman) temporarily until a custom web font finishes
        loading. This process is called a "font swap" and sometimes causes a
        flash of unstyled or shifting text.
      </p>

      <p className="content">
        But what if we treat each letter like an element and animate it in — as
        if it were loading on purpose? That's what this simple text animation
        example does.
      </p>

     <p className="content">
        let show how to create animated text with just HTML and CSS.
      </p>

      <p className="content">Here's the basic HTML structure:</p>

      <pre>
        <code>{`<h1 class="animated-text">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1>`}</code>
      </pre>

      <p className="content">
        And the CSS animation to fade and slide each letter up:
      </p>

      <pre>
        <code>{`.animated-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}

.animated-text span:nth-child(1) { animation-delay: 0s; }
.animated-text span:nth-child(2) { animation-delay: 0.1s; }
.animated-text span:nth-child(3) { animation-delay: 0.2s; }
.animated-text span:nth-child(4) { animation-delay: 0.3s; }
.animated-text span:nth-child(5) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`}</code>
      </pre>

      <p className="content">
         Each letter starts invisible and below its final position. The{" "}
        <code>fadeInUp</code> animation makes them slide into view with a slight
        delay for each span.
      </p>

      <p className="content">
        This creates a smooth, natural effect like the text is gently loading —
        great for intros, splash screens, or page headers.
      </p>
      <iframe
        // height="300"
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://codepen.io/jung2012pt/embed/LEEmEep?default-tab=html%2Cresult"
        loading="lazy"
        allowFullScreen
      >
        See the Pen{" "}
        <a href="https://codepen.io/jung2012pt/pen/GgRzOQe">
          Smooth as Butter Working Example_OutSystems Experts
        </a>{" "}
        by jung2012pt (<a href="https://codepen.io/jung2012pt">@jung2012pt</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
};

export default Simple;
