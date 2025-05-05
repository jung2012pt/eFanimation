import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../components/codeBox.css";
import "../sublessondefault.css";

const GSAPjavascript: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 300,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div>
      <h1 className="topic">Getting Started with GSAP </h1>

      <p className="content">
        Are you fascinated by websites that come to life with stunning
        animations? Then GSAP is the perfect tool for crafting mesmerizing
        motions on the web! GSAP, or GreenSock Animation Platform, is a powerful
        JavaScript library that makes animation creation seamless for beginners
        and pros alike. GSAP empowers you to animate HTML elements, manipulate
        CSS properties, and orchestrate intricate motions easily. Its
        easy-to-understand syntax and robust features allow you to create
        eye-catching animations without diving deep into complex codes. This
        guide will show you how to set up and use GSAP’s basic tools.
      </p>

      <h2 className="header">UNDERSTANDING TWEENS</h2>
      <p className="content">
        Tweens are the basic animation functions from within GSAP. To animate
        any HTML object, we must call the object, define the properties that we
        are going to animate, the duration of the animation, the animation’s
        easing, and any other parameters like delay timing. Methods for creating
        a Tween (all of these methods return a Tween instance): gsap.to()
        gsap.from() gsap.fromTo() For simple animations, the methods above are
        all you need! For example:
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
        src="https://codepen.io/medhansh-jain/embed/mdobbYw?default-tab=html%2Cresult"
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

      <p className="content">
        So let’s break the above example to understand all the tweens
        <pre>
          <code>{`gsap.to(".green", {rotation: 360, x: 100, duration: 1});`}</code>
        </pre>
        This animates elements with the class “green” by rotating them 360
        degrees and moving them 100 units on the x-axis for 1 second. gsap
        object serves as the access point for most of GSAP’s functionality. It
        lets our JS file know that we want to animate using the GSAP library.
        The .to method signifies that we want our object to animate from its
        original state as defined by the HTML and CSS to the final state as
        defined by our javascript file. The .from method reverses this. Next, we
        define the object we want to animate. In the above example, we are
        animating the HTML object with class green, therefore using the .green
        selector in quotes. We use a period (.) to denote classes and a hash (#)
        to denote IDs, just like in CSS selectors. The parameters inside the
        brackets represent any of the properties you’d like to animate. In this
        example, we’re animating the x and rotation parameters. Notice how each
        of these different properties uses camelCase to call them instead of the
        typical hyphen notation used with CSS. The Tween is the basic foundation
        for GSAP animations. Tweens are great for On-Off animations. You can
        read more about different parameters and methods in the GSAP docs.
      </p>

      <h2 className="header">Understanding Timelines</h2>
      <p className="content">
        Timelines in GSAP contain animations that happen either one at a time or
        concurrently. Timelines are useful for sequencing multiple animations in
        a sequence instead of adding delay, which can be tedious and
        inefficient. If you have worked with animation software like After
        Effects you might already be familiar with timelines.
      </p>
      <div className="image">
        <img
          src="/img/timeline.webp"
          //   alt="Smooth timeline illustration"
          //   className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        To call a timeline you must first declare a variable in your JS file.
      </p>
      <pre>
        <code>{`var tl = gsap.timeline();`}</code>
      </pre>

      <p className="content">
        To break this line of code down piece by piece, we first initiate a
        variable tl and set its value gsap.timeline() which gives us a new
        timeline instance. Note that we can substitute tl for any shorthand text
        we’d like. Let’s now recreate our first animation using tl .
      </p>
      <pre>
        <code>{`var tl = gsap.timeline();
tl.to(".green", {rotation: 360, x: 100, duration: 1})
  .to(".purple", {rotation: -360, x: -100, duration: 1}) 
  .fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});`}</code>
      </pre>

      <iframe
        // height="300"
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://codepen.io/medhansh-jain/embed/mdobbYw?default-tab=html%2Cresult"
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

      <p className="content">
        This animation is the same as in the first example, but each box
        animates after the previous one. Furthermore, you'll notice there isn't
        much difference in the code either. Instead of gsap.to, we use tl.to .
        Also, notice how there is no semicolon at the end of the parenthesis.
        This is because we are going to add a second animation to this timeline,
        tethering them together. You can also see that this second line of code
        doesn’t have the tl.to at the beginning of the timeline. Instead, it
        only has .to. This is because multiple animations in one timeline can be
        tethered together as long as there’s no semicolon separating them.
        Multiple objects can be animated using a timeline by adding their
        respective IDs into different functions. For example, if we create an
        HTML circle object and make it fade in after the rectangles move along
        the x-axis, our code will be:
      </p>
      <pre>
        <code>{`var tl = gsap.timeline();
tl.to(".green", {rotation: 360, x: 100, duration: 1})
  .to(".purple", {rotation: -360, x: -100, duration: 1}) 
  .fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1})
  .from(".circle",{
    opacity: 0,
  });`}</code>
      </pre>
      <iframe
        // height="300"
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://codepen.io/medhansh-jain/embed/WNmeMOZ?default-tab=html%2Cresult"
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

      <p className="content">
        We’ve added a third code block to our animation that calls the circle.
        Also, note how we’re now using the .from method. This means that our
        circle animation starts at 0% opacity and then goes to 100% opacity.You
        can see this in action when our animation has the circle hidden because
        it starts at 0% opacity. After the rectangle moves, the circle fades in
        at 100% opacity, just as intended.
      </p>

      <h2 className="header">FINAL THOUGHTS</h2>
      <p className="content">
        GSAP makes it easy to create and manipulate your own timeline animations
        even if you have little to no understanding of JavaScript. To begin
        creating new animations using GSAP, start with this guide. For a better
        understanding and access to more features, I suggest reading the
        documentation and experimenting with different animation techniques. In
        my upcoming blog, I will explain how to add and use plugins with GSAP.
      </p>
    </div>
  );
};

export default GSAPjavascript;
