import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RockstarParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 8000; // Increased density significantly
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);

    for (let i = 0; i < count * 3; i++) {
      // Much wider distribution to cover long scroll pages
      positions[i] = (Math.random() - 0.5) * 35;
      if (i % 3 === 1) positions[i] = (Math.random() - 0.5) * 45; // Vertical Y spread
      if (i % 3 === 0) velocities[i / 3] = (Math.random() - 0.5) * 0.003;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: '#D4AF37', // brand-GOLD
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 10;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      const positionsArray = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Float and drift
        positionsArray[i3 + 1] += Math.sin(Date.now() * 0.0005 + positionsArray[i3]) * 0.0015;
        positionsArray[i3] += velocities[i];

        if (positionsArray[i3 + 1] > 25) positionsArray[i3 + 1] = -25;
        if (positionsArray[i3 + 1] < -25) positionsArray[i3 + 1] = 25;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Rotation reacts to mouse
      particles.rotation.y += 0.0004;
      particles.rotation.x += (mouseY - particles.rotation.x) * 0.01;
      particles.rotation.y += (mouseX - particles.rotation.y) * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />;
};

export default RockstarParticles;