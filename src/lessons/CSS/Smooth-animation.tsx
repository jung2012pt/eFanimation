import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";
const Smooth: React.FC = () => {
  return (
    <div>
      <h1 className="topic">Smooooth as Butter</h1>
      <p className="content">
        The @keyframes CSS at-rule controls the intermediate steps in a CSS
        animation sequence by defining styles for keyframes (or waypoints) along
        the animation sequence. This gives more control over the intermediate
        steps of the animation sequence than transitions.
      </p>
      <h1 className="header">Understand the Timeline</h1>
      <p className="content">
        What is the browser doing while rendering and playing around with the
        elements? This very simple timeline is called the Critical Rendering
        Path.
      </p>
      <div className="image">
        <img
          src="/img/smooth_timeline.webp"
          alt="Smooth timeline illustration"
          className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        To achieve smooth animations we need to focus on changing properties
        that affect the Composite step, instead of adding this stress to the
        previous layers.
      </p>
      <h1 className="header">1. Styles</h1>
      <div className="image">
        <img
          src="/img/smooth_styles.webp"
          //   alt="Smooth timeline illustration"
          //   className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        The browser starts calculating the styles to apply in elements —
        Recalculate
      </p>
      <h1 className="header">2. Layout</h1>
      <div className="image">
        <img
          src="/img/smooth_layout.webp"
          //   alt="Smooth timeline illustration"
          //   className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        In the following layer, the browser will start generating the shape and
        position for each of those elements — Layout. This is where the browser
        sets the page properties such as width and height, as well as its
        margins, or left/top/right/bottom for instance.
      </p>
      <h1 className="header">3. Paint</h1>
      <div className="image">
        <img
          src="/img/smooth_paint.webp"
          //   alt="Smooth timeline illustration"
          //   className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        The browser will now start filling in the pixels for each element into
        layers. The properties that it uses are, for instance: box-shadow,
        border-radius, color, background-color, among others.
      </p>
      <h1 className="header">4. Composite</h1>
      <p className="content">
        This is where you want to do your magic, as this is when the browser
        starts drawing all the layers in the screen.
      </p>
      <div className="image">
        <img
          src="/img/smooth_composite.webp"
          //   alt="Smooth timeline illustration"
          //   className="w-full max-w-xl h-auto"
        />
      </div>
      <p className="content">
        Modern browsers can animate four styles pretty, pretty well, making use
        of the transform and opacity properties. Position — transform:
        translateX(n) translateY(n) translateZ(n); Scale — transform: scale(n);
        Rotation — transform: rotate(ndeg); Opacity — opacity: n;
      </p>
      <div className="image">
        <img
          src="/img/smooth-wrongway.webp"
          alt="Smooth timeline illustration"
          className="w-full max-w-xl h-auto"
        />
      </div>
      <h1 className="header">How to Achieve the 60 Frames Per Second Mark</h1>
      <p className="content">
        Let's start with the HTML. We're going to create a very simple structure
        and put our app-menu inside a layout class.
      </p>
      <pre>
        <code>
          {`<div class="layout">
	<div class="app-menu"></div>
	<div class="header">
		<div class="menu-icon"></div>
	</div>
</div>`}
        </code>
      </pre>
      <h1 className="header">Going About It the Wrong Way</h1>
      <p className="content">
        See those properties we changed? You should avoid using transitions with
        the left/top/right/bottom properties. Those don’t create a fluid
        animation because they have the browser creating layouts each time,
        which will affect all of their children.
      </p>
      <p className="content">The result is something like this:</p>
      <h1 className="header">Using Transform</h1>
      <pre>
        <code>
          {`.app-menu {
	-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
	transition: transform 300ms linear;
}
.app-menu-open .app-menu {
	-webkit-transform: none;
			transform: none;
	transition: transform 300ms linear;
}`}
        </code>
      </pre>
      <p className="content">
        The transform properties affect a Composite. Here we’re telling the
        browser that layers will be painted and ready to go as soon as the
        animation starts, so there are fewer hiccups when rendering the
        animation.
      </p>
      <h1 className="header">Running Animations in GPU</h1>
      <p className="content">
        Let's take it up a notch, then. To really get it running smooth and
        buttery, we're going to use the GPU to render the animation.
      </p>
      <pre>
        <code>
          {`.app-menu {
	-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
	transition: transform 300ms linear;
	will-change: transform;
}`}
        </code>
      </pre>
      <p className="content">
        The animation's FPS are much more constant and the animation renders
        much quicker here. But there's still a long frame running there. There's
        still a little bit of a bottleneck at the beginning. Remember the HTML
        structure created right in the beginning? Let's control the app-menu div
        on that structure by using JavaScript:
      </p>
      <pre>
        <code>
          {`function toggleClassMenu() {
	var layout = document.querySelector(".layout");
	if(!layout.classList.contains("app-menu-open")) {
		layout.classList.add("app-menu-open");
	} else {
		layout.classList.remove("app-menu-open");
	}
}
var oppMenu = document.querySelector(".menu-icon");
oppMenu.addEventListener("click", toggleClassMenu, false);`}
        </code>
      </pre>
      <p className="content">
        The problem here is that by adding that class within the layout div, we
        made the browser recalculate styles one more time — and that affects the
        rendering performance.
      </p>
      <h1 className="header">The 60 FPS Smooth as Butter Solution</h1>
      <pre>
        <code>
          {`<div class="menu">
	<div class="app-menu"></div>
</div>
<div class="layout">
	<div class="header">
		<div class="menu-icon"></div>
	</div>
</div>`}
        </code>
      </pre>
      <p className="content">
        And now we can control the state of the menu in a slightly different
        way. We're going to manipulate animations in a class that gets removed
        when the time of transition ends, by using the transitionend function in
        JavaScript.
      </p>
      <pre>
        <code>
          {`function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);`}
        </code>
      </pre>
      <p className="content">
        Let’s put it all together and check the results, then. Here's a complete
        fully-enabled CSS3 example, with everything in its right place:
      </p>
      <pre>
        <code>
          {`.menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 150;
}

.menu--visible {
    pointer-events: auto;
}

.app-menu {
    background-color: #fff;
    color: #fff;
    position: relative;
    max-width: 400px;
    width: 90%;
    height: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    -webkit-transform: translateX(-103%);
            transform: translateX(-103%);
    display: flex;
    flex-direction: column;
    will-change: transform;
    z-index: 160;
    pointer-events: auto;            
}

.menu--visible .app-menu {
    -webkit-transform: none;
            transform: none;
}

.menu--animatable .app-menu {
    transition: all 130ms ease-in;
}

.menu--visible.menu--animatable  .app-menu {
    transition: all 330ms ease-out;
}

.menu:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    will-change: opacity;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
}

.menu--visible.menu:after {
    opacity: 1;
    pointer-events: auto;
}`}
        </code>
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
        src="https://codepen.io/jung2012pt/embed/GgRzOQe?default-tab=html%2Cresult"
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

export default Smooth;
