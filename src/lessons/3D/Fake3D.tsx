import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";
const Fake3D: React.FC = () => {
  return (
    <div>
      <h1 className="topic">Simulating 3D Rotation in Figma</h1>

      <p className="content">
        In this lesson, we'll walk through how to create a realistic 3D rotation
        illusion in Figma—no 3D software required. Inspired by Shift Studio's
        tutorial, this technique uses duplicated frames, Smart Animate, and
        subtle styling tweaks to simulate depth and rotation. The result is a
        smooth, interactive effect that feels dimensional, even though it's
        entirely 2D.
      </p>

      <h1 className="header">Why Use Fake 3D?</h1>
      <p className="content">
        Full 3D tools can be overkill for UI motion design. Figma's prototyping
        features allow us to mimic 3D rotation with far less overhead. This
        technique is useful for product cards, onboarding illustrations, and
        showcasing interactions in app previews.
      </p>

      <h1 className="header">Watch the Tutorial</h1>
      <p className="content">
        The approach in this lesson is based on this excellent video by Shift
        Studio:
      </p>
      <div className="video">
        <iframe
          style={{
            width: "50%",
            height: "50vh",
            border: "none",
            overflow: "hidden",
          }}
          src="https://www.youtube.com/embed/xrDrzqjVKw0"
          title="Fake 3D Rotation in Figma by Shift Studio"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className="header">Conclusion</h1>
      <p className="content">
        You don’t need 3D software to make dimensional, dynamic interfaces. With
        a thoughtful use of frames and transitions, Figma can achieve compelling
        visual effects that look and feel more complex than they are. If you
        want a fast, flexible way to enhance interactivity in your designs, this
        approach is well worth learning.
      </p>
    </div>
  );
};

export default Fake3D;
