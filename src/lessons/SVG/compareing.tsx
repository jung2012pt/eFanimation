import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";

const Compare: React.FC = () => {
  return (
    <div>
      <h1 className="topic">GSAP vs Anime.js in SVG Blob Animation</h1>
      <p className="content">
        In this lesson, we compare two powerful JavaScript animation libraries—
        <strong>GSAP</strong> and <strong>Anime.js</strong>—through the lens of
        a practical use case: animating SVG blobs triggered by interactive menu
        clicks. While both libraries achieve similar visual outcomes, their
        syntax, control mechanisms, and flexibility differ significantly.
      </p>
      <h1 className="header">Project Overview</h1>
      <h1 className="header">GSAP</h1>
      <iframe
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://stackblitz.com/edit/stackblitz-starters-6r5aoijx?embed=1&file=index.html"
        loading="lazy"
        allowFullScreen
      ></iframe>
      <h1 className="header">Anime.js</h1>
      <iframe
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://stackblitz.com/edit/stackblitz-starters-umpayg5z?embed=1&file=index.html"
        loading="lazy"
        allowFullScreen
      ></iframe>
      <p className="content">
        The UI consists of several layered SVG blobs. When a menu item is
        selected, the corresponding blob expands and morphs into a new shape
        while others fade. Clicking a close button collapses the blob and
        restores the original menu.
      </p>
      <h1 className="header">Syntax Comparison</h1>
      <p className="content">
        <strong>Anime.js</strong> uses a configuration-object approach for
        defining animations:
      </p>
      <pre>
        <code>{`anime({
  targets: this.layers,
  scale: [0.2, 1],
  opacity: {
    value: [0, 1],
    duration: 300,
    easing: "linear"
  },
  easing: [0.2, 1, 0.1, 1],
  delay: (t, i) => i * 120,
  duration: 1800
});`}</code>
      </pre>
      <p className="content">
        <strong>GSAP</strong> offers a method-chaining approach that promotes
        better sequencing and modular control:
      </p>
      <pre>
        <code>{`gsap.set(this.layers, { scale: 0.2, opacity: 0 });
gsap.to(this.layers, {
  duration: 1.8,
  scale: 1,
  opacity: 1,
  stagger: 0.12,
  ease: "power2.out"
});`}</code>
      </pre>
      <h1 className="header">SVG Morphing</h1>
      <p className="content">
        Both libraries animate the SVG <code>d</code> attribute for path
        morphing. While Anime.js uses direct attribute access, GSAP wraps it in
        an <code>attr</code> object, offering clearer syntax when combined with
        other features.
      </p>
      <h1 className="header">Animation Control</h1>
      <p className="content">
        GSAP provides structured lifecycle callbacks such as{" "}
        <code>onStart</code>, <code>onUpdate</code>, and <code>onComplete</code>
        . This improves maintainability in complex timelines.
      </p>
      <p className="content">For example, to track animation progress:</p>
      <pre>
        <code>{`// Anime.js
if (anim.progress > 75) resolve();

// GSAP
if (this.progress() * 100 > 75) resolve();`}</code>
      </pre>
      <h1 className="header">Staggering Animations</h1>
      <p className="content">
        Anime.js requires manual delay functions for staggering effects. In
        contrast, GSAP supports native <code>stagger</code> and{" "}
        <code>gsap.utils.random()</code>, simplifying timing and flow.
      </p>
      <h1 className="header">Ecosystem and Performance</h1>
      <p className="content">
        GSAP's plugin ecosystem (e.g., ScrollTrigger, Flip, Draggable) and dev
        tools make it more suitable for large-scale, performance-critical
        applications. Anime.js is smaller in size and ideal for simple
        animations.
      </p>
      <ul className="content">
        <li>
          GSAP: ~50 KB, timeline & plugin support, production-grade tools.
        </li>
        <li>Anime.js: ~15 KB, minimal setup, fewer features.</li>
      </ul>
      <h1 className="header">Conclusion</h1>
      <p className="content">
        Anime.js is a great choice for quick, lightweight animations. GSAP,
        however, is more scalable and maintainable for complex, layered
        animations like blob morphing UIs. If your project requires advanced
        control, timeline orchestration, or extensibility, GSAP is the superior
        tool.
      </p>
    </div>
  );
};



export default Compare;
