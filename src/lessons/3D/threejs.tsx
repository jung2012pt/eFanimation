import React, { useEffect } from "react";
import * as THREE from "three";
import "../../components/codeBox.css";
import "../sublessondefault.css";

const Threejs: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
  }, []);

  return (
    <div>
      <h1 className="topic">
        How to Use Three.js with a &lt;canvas&gt; (Simplest Example)
      </h1>

      <p className="content">
        Three.js lets you draw 3D graphics in the browser using WebGL. In this
        simplest example, we use a custom <code>&lt;canvas&gt;</code> element to
        render a spinning cube.
      </p>

      <p className="content">
        The steps are:
        <ol>
          <li>
            Create a <code>&lt;canvas id="myCanvas"&gt;</code> in your HTML.
          </li>
          <li>Initialize the Three.js renderer with that canvas.</li>
          <li>Create a scene, camera, and a cube.</li>
          <li>Animate the cube and render it continuously.</li>
        </ol>
      </p>

      <canvas
        id="myCanvas"
        style={{
          width: "50%",
          height: "50vh",
        //   display: "block",
          background: "#00ccff",
        }}
      />

      <p className="content">
        This basic setup is great for learning or embedding simple 3D scenes.
        You can style the canvas with CSS and add more Three.js features like
        lights, textures, or user interaction.
      </p>
    </div>
  );
};

export default Threejs;
