import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    // Fog to hide the horizon
    scene.fog = new THREE.Fog(0x000000, 10, 50);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, -20);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // --- MOVING GRID ---
    const gridSize = 80;
    const gridDivisions = 40;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x00bcd4, 0x0044aa);
    scene.add(gridHelper);
    // Add a second grid for depth/complexity
    const gridHelper2 = new THREE.GridHelper(gridSize, gridDivisions / 2, 0x00bcd4, 0x002255);
    gridHelper2.position.y = -0.1; // Just below
    scene.add(gridHelper2);
    // --- FLOATING GEOMETRY (Data Blocks) ---
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00bcd4,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (Math.random() - 0.5) * 40;
      cube.position.z = -Math.random() * 40;
      cube.position.y = Math.random() * 5;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      scene.add(cube);
      cubes.push(cube);
    }
    const animate = () => {
      requestAnimationFrame(animate);
      // Move Grid Effect (Simulate movement by resetting position)
      gridHelper.position.z = (gridHelper.position.z + 0.05) % 2;
      gridHelper2.position.z = (gridHelper2.position.z + 0.02) % 4;
      // Animate Cubes
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.z += 0.05;
        if (cube.position.z > 10) {
          cube.position.z = -40;
          cube.position.x = (Math.random() - 0.5) * 40;
        }
      });
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
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{
    mixBlendMode: 'screen'
  }} />;
}