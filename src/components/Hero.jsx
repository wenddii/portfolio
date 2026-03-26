import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="hero-container">
      <canvas ref={canvasRef} className="star-canvas" />
      <div className="hero-content">
        <h1>Hi, I'm Wendwosen</h1>
        <p>Django Backend Developer building scalable APIs</p>
        <a href="#projects">
          <button>View Projects</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;