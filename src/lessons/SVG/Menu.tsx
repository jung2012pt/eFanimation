import { useEffect, useRef } from "react";
import anime from "animejs";
import charming from "charming";
import "./base.css";
import BlobBackground from "./BlobBackground";
const menuItems = [
  "Analysis",
  "Models",
  "Philosophy",
  "Comparisons",
  "Specimens",
  "Projects",
];

const Menu = () => {
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    linksRef.current.forEach((link) => {
      // Add span wrappers via charming
      charming(link);

      // Disable pointer events initially
      link.style.pointerEvents = "none";

      anime({
        targets: link.querySelectorAll("span"),
        duration: 800,
        delay: () => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {
          link.style.pointerEvents = "auto";
          link.classList.add("menu__item--showDeco");
        },
      });
    });
  }, []);

  return (
    <div className="relative w-full h-screen">
      <BlobBackground />
      <nav className="menu">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="menu__item"
            ref={(el) => {
              if (el) linksRef.current[idx] = el;
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
