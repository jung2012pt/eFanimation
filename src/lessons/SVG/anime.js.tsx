import { useEffect } from "react";
import anime from "animejs";
import charming from "charming";
import "../styles/base.css";

const animejs = () => {
  useEffect(() => {
    // Equivalent of the logic in main.js or gsap-demo.js
    // You can adapt Blob class from the original and plug it in here

    // Example animation using anime.js
    const svg = document.querySelector("svg.scene");
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    anime({
      targets: paths,
      opacity: [0, 1],
      delay: anime.stagger(120),
      scale: [0.2, 1],
      easing: "easeInOutQuad",
      duration: 1800,
    });
  }, []);

  return (
    <main>
      <div className="content content--fixed">
        <p className="info">
          credit{" "}
          <a href="https://polarvectors.com/shop/textures/gradient-topography/">
            Gradient Topography
          </a>
        </p>
      </div>
      <div className="content">
        <nav className="menu">
          <a href="#" className="menu__item">
            Analysis
          </a>
          <a href="#" className="menu__item">
            Models
          </a>
          <a href="#" className="menu__item">
            Philosophy
          </a>
          <a href="#" className="menu__item">
            Comparisons
          </a>
          <a href="#" className="menu__item">
            Specimens
          </a>
          <a href="#" className="menu__item">
            Projects
          </a>
        </nav>
        {/* Paste the <svg class="scene">...</svg> from index.html here */}
      </div>
    </main>
  );
};

export default animejs;
