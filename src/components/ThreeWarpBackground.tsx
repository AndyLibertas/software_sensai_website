import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeWarpBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // --- WARP STARS ---
    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000; // Reduced count
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x00bcd4,
      size: 0.5,
      transparent: true,
      opacity: 0.6 // Less opaque
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    const animate = () => {
      requestAnimationFrame(animate);
      const positions = starGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount; i++) {
        // Move stars towards camera (Z axis) - SLOWER SPEED
        positions[i * 3 + 2] += 0.5; // Was 2, now 0.5 (4x slower)
        // Reset if passed camera
        if (positions[i * 3 + 2] > 200) {
          positions[i * 3 + 2] = -400;
          positions[i * 3] = (Math.random() - 0.5) * 600;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      // Rotate slightly for vortex effect - SLOWER ROTATION
      stars.rotation.z += 0.0005; // Was 0.002
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
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" // Reduced opacity
  style={{
    mixBlendMode: 'screen'
  }} />;
}