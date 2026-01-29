"use client";
import React, { useRef, useEffect } from "react";

const DotGrid = ({
    gridGap = 25,
    dotSize = 5,
    baseColor = "#FA6E00",
    activeColor = "#FA6E00",
    shockRadius = 250,
    shockStrength = 5,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let dots = [];
        let mouse = { x: -1000, y: -1000 };

        const handleResize = () => {
            // Set canvas size to parent size
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            initDots();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        class Dot {
            constructor(x, y) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
            }

            update() {
                // Distance from mouse
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Force calculation
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                let force = 0;
                // Shock/Repulsion effect
                if (distance < shockRadius) {
                    force = (shockRadius - distance) / shockRadius;
                    // Negative force to repel, multiplied by strength
                    // The "shockStrength" usually implies how far it pushes
                    const repulsion = -force * shockStrength;

                    this.vx += forceDirectionX * repulsion;
                    this.vy += forceDirectionY * repulsion;
                }

                // Return to origin (spring/elasticity)
                const returnX = this.originX - this.x;
                const returnY = this.originY - this.y;

                // Spring force
                const springStrength = 0.05;
                this.vx += returnX * springStrength;
                this.vy += returnY * springStrength;

                // Friction/Damping to prevent endless oscillation
                const friction = 0.85; // 0.9 is slippery, 0.8 is thick
                this.vx *= friction;
                this.vy *= friction;

                // Apply velocity
                this.x += this.vx;
                this.y += this.vy;
            }

            draw(context) {
                context.beginPath();
                context.arc(this.x, this.y, dotSize / 2, 0, Math.PI * 2);
                context.fillStyle = baseColor;
                context.fill();
            }
        }

        const initDots = () => {
            dots = [];
            for (let x = gridGap; x < canvas.width; x += gridGap) {
                for (let y = gridGap; y < canvas.height; y += gridGap) {
                    dots.push(new Dot(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach((dot) => {
                dot.update();
                dot.draw(ctx);
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        handleResize();
        window.addEventListener("resize", handleResize);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridGap, dotSize, baseColor, shockRadius, shockStrength]);

    return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default DotGrid;
