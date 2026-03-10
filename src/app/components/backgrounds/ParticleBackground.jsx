'use client';

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;

        this.opacity = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(139,92,246,${this.opacity})`;

        ctx.shadowColor = "rgba(139,92,246,0.9)";
        ctx.shadowBlur = 15;

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const createParticles = () => {
      particles = [];

      const amount = Math.floor((canvas.width * canvas.height) / 9000);

      for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {

          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {

            ctx.beginPath();

            ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - dist / 120)})`;

            ctx.lineWidth = 1;

            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);

            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawLines();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}