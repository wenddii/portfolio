import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 80;
    const maxDistance = 120;

    function createNode() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      };
    }

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(createNode());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(6, 11, 22, 0.8)";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 197, 94, 0.9)";
        ctx.fill();

        for (let j = index + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(34, 197, 94, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero-container">
      <canvas ref={canvasRef} className="tech-canvas" />
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