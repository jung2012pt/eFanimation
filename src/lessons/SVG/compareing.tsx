import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";
const Compare: React.FC = () => {
  return (
    <div>
      <h1 className="topic">Anime.js SVG</h1>
      <p className="content">
        A collection of utility functions to help with SVG morphing, line
        drawing and motion path animations. All SVG utilities functions are
        available on the svg object.
      </p>
      <h1 className="header">morphTo()</h1>
      <p className="content">
        Creates a morphing animation from one SVG shape to another by passing
        the morphTo() function to the d property of a SVGPathElement or to the
        points property of a SVGPolylineElement or a SVGPolygonElement. An
        optional precision parameter can be set to configure the amount of
        points generated to morph the two shapes. If the precision parameter is
        set 0, now points extrapolation is generated. svg.morphTo(shapeTarget,
        precision); Parameters Name Accepts shapeTarget CSS selector |
        SVGPathElement | SVGPolylineElement | SVGPolygonElement precision=.33
        (opt) A Number between 0 and 1 Returns An Array containing the shape's
        starting and final String values
      </p>
      <iframe
        style={{
          width: "50%",
          height: "50vh",
          border: "none",
          overflow: "hidden",
        }}
        title="Smooth as Butter Working Example_OutSystems Experts"
        src="https://stackblitz.com/edit/stackblitz-starters-6r5aoijx?embed=1&file=index.html&hideExplorer=1"
        loading="lazy"
        allowFullScreen
      ></iframe>
      <pre>
        <code>
          {`import { animate, svg, utils } from 'animejs';

const [ $path1, $path2 ] = utils.$('polygon');

function animateRandomPoints() {
  // Update the points attribute on #path-2
  utils.set($path2, { points: generatePoints() });
  // Morph the points of #path-1 into #path-2
  animate($path1, {
    points: svg.morphTo($path2),
    ease: 'inOutCirc',
    duration: 500,
    onComplete: animateRandomPoints
  });
}

// Start the animation
animateRandomPoints();

// A function to generate random points on #path-2 on each iteration
// For demo purpose only
function generatePoints() {
  const total = utils.random(4, 64);
  const r1 = utils.random(4, 56);
  const r2 = 56;
  const isOdd = n => n % 2;
  let points = '';
  for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
    const r = isOdd(i) ? r1 : r2;
    const a = (2 * Math.PI * i / l) - Math.PI / 2;
    const x = 152 + utils.round(r * Math.cos(a), 0);
    const y = 56 + utils.round(r * Math.sin(a), 0);
    points += \`\${x},\${y} \`; 
  }
  return points;
}`}
        </code>
      </pre>

      <h1 className="header">createDrawable()</h1>
      <p className="content">
        Creates a Proxy of an SVGElement exposing an extra draw property that
        defines how much of the line is visible / drawn. const [ drawable ] =
        svg.createDrawable(target); Parameters Name Accepts target CSS selector
        | SVGLineElement | SVGPathElement | SVGPolylineElement |
        SVGPolylineElement | SVGRectElement Returns An Array of Proxy SVGElement
        The added draw property accepts a String containing a start and end
        values separated by an empty space to define how much of the line is
        drawn.
      </p>

      <pre>
        <code>
          {`import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});`}
        </code>
      </pre>
      <h1 className="header">createMotionPath()</h1>
      <div
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
        }}
        className="content"
      >
        {`Creates pre-defined Tween parameter objects that animate along an SVGPathElement's coordinates and inclination.
const { translateX, translateY, rotate } = svg.createMotionPath(path);

Parameters
Name   Type
path   CSS selector | SVGPathElement

Returns an Object with the following properties:
Name        Type             Description
translateX  Tween parameter  Map to the x coordinate of the path element
translateY  Tween parameter  Map to the y coordinate of the path element
rotate      Tween parameter  Map to the angle of the path element`}
      </div>

      <pre>
        <code>
          {`import { animate, svg } from 'animejs';

// Animate the transforms properties of .car the motion path values
const carAnimation = animate('.car', {
  ease: 'linear',
  duration: 5000,
  loop: true,
  ...svg.createMotionPath('path')
});

// Line drawing animation following the motion path values
// For demo aesthetic only
animate(svg.createDrawable('path'), {
  draw: '0 1',
  ease: 'linear',
  duration: 5000,
  loop: true
});`}
        </code>
      </pre>
    </div>
  );
};

export default Compare;
