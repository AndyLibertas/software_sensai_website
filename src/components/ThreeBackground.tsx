import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002); // Deep space fog
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.position.y = 10; // Look down slightly
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    // --- ZEN GALAXY PARTICLES ---
    const geometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colorCyan = new THREE.Color(0x00bcd4);
    const colorWhite = new THREE.Color(0xffffff);
    const colorDeepBlue = new THREE.Color(0x0044aa);
    const tempColor = new THREE.Color();
    for (let i = 0; i < count; i++) {
      // Spiral Galaxy Formation
      const branchAngle = i % 3 * (2 * Math.PI / 3); // 3 arms like a shuriken
      const radius = Math.random() * 40 + 2; // Spread out
      const spinAngle = radius * 0.2; // Curve the arms
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2; // Scatter
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = (Math.random() - 0.5) * 5; // Flat galaxy
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      // Color Logic: Center is white/hot, edges are cyan/blue
      const mixedColor = tempColor.copy(colorCyan).lerp(colorDeepBlue, radius / 40);
      if (radius < 5) mixedColor.lerp(colorWhite, 0.8);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
      sizes[i] = Math.random() * 0.3;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    const material = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);
    // --- INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener('mousemove', handleMouseMove);
    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      // Constant slow rotation (The Galaxy Spin)
      galaxy.rotation.y = elapsedTime * 0.05;
      // Mouse Interaction (Parallax/Tilt)
      targetRotationX = mouseY * 0.5;
      targetRotationY = mouseX * 0.5;
      // Smooth easing
      galaxy.rotation.x += 0.05 * (targetRotationX - galaxy.rotation.x);
      galaxy.rotation.z += 0.05 * (targetRotationY - galaxy.rotation.z);
      // Gentle breathing scale
      galaxy.scale.setScalar(1 + Math.sin(elapsedTime * 0.5) * 0.02);
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-70" style={{
    mixBlendMode: 'screen'
  }} />;
}