import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";
const GsapSVG: React.FC = () => {
  return (
    <div>
      <h1 className="topic">GSAP: The Animation Superpower</h1>
      <p className="content">
        GSAP (GreenSock Animation Platform) is a high-performance JavaScript
        library for animating HTML, SVG, CSS, and more. It gives you
        fine-grained control over your animations and ensures smooth performance
        across all major browsers.
      </p>

      <h1 className="header">Why GSAP?</h1>
      <p className="content">
        Compared to CSS animations and transitions, GSAP can animate more
        properties, handle complex sequences, and chain animations with ease.
        It's also more predictable and precise.
      </p>

      

      <h1 className="header">1. Basic Tween</h1>
      <p className="content">
        The simplest GSAP animation is a tween, which changes one or more
        properties of a target over time.
      </p>
      <pre>
        <code>{`gsap.to(".box", { x: 200, duration: 1 });`}</code>
      </pre>

      <h1 className="header">2. Multiple Properties</h1>
      <p className="content">
        You can animate multiple CSS properties at once.
      </p>
      <pre>
        <code>
          {`gsap.to(".circle", {
  x: 100,
  y: 100,
  scale: 1.5,
  rotation: 180,
  duration: 2
});`}
        </code>
      </pre>

      <h1 className="header">3. Timeline Magic</h1>
      <p className="content">
        Use GSAP's powerful timeline feature to chain and control animations
        more precisely.
      </p>
      <pre>
        <code>
          {`const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 });
tl.to(".box", { y: 100, duration: 1 });
tl.to(".box", { scale: 0.5, duration: 0.5 });`}
        </code>
      </pre>

      <h1 className="header">4. ScrollTrigger Integration</h1>
      <p className="content">
        ScrollTrigger is a GSAP plugin that lets you start animations based on
        scroll position — great for interactive websites.
      </p>
      <pre>
        <code>
          {`gsap.to(".header", {
  scrollTrigger: ".header",
  x: 300,
  duration: 1
});`}
        </code>
      </pre>

      <h1 className="header">Best Practices</h1>
      <ul className="content">
        <li>
          Always use <code>will-change</code> for properties like{" "}
          <code>transform</code> or <code>opacity</code>.
        </li>
        <li>
          Prefer <code>transform</code> over <code>top</code>/<code>left</code>{" "}
          for smoother GPU-accelerated performance.
        </li>
        <li>Use timelines for synchronized sequences.</li>
      </ul>

      

     
    </div>
  );
};

export default GsapSVG;
