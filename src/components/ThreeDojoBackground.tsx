import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
interface ThreeDojoBackgroundProps {
  isHovering: boolean;
}
export function ThreeDojoBackground({
  isHovering
}: ThreeDojoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(isHovering);
  const hasPlayedRef = useRef(false);
  // Keep ref in sync with prop for animation loop
  useEffect(() => {
    isHoveringRef.current = isHovering;
    if (!isHovering) {
      // Reset played state when mouse leaves
      hasPlayedRef.current = false;
    }
  }, [isHovering]);
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // --- NINJA STAR TEXTURE ---
    const svgString = `
    <svg height="256" width="256" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.084 38.084">
      <path fill="#00bcd4" d="M24.379,33.023l13.705,5.06l-5.06-13.706c-0.076,0.093-0.158,0.184-0.244,0.271
        c-1.324,1.324-3.43,1.365-4.819,0.152l-2.365-2.365c1.106-2.136,1.103-4.698-0.019-6.829l1.877-1.876
        c0,0.003,0.001,0.004,0.001,0.005h0.052c0.083-0.104,0.17-0.204,0.266-0.3c1.383-1.383,3.625-1.383,5.006,0
        c0.088,0.087,0.17,0.178,0.246,0.271l5.059-13.705L24.378,5.061c0.093,0.076,0.184,0.158,0.271,0.245
        c1.323,1.324,1.365,3.429,0.152,4.819l-2.365,2.365c-2.136-1.107-4.698-1.102-6.829,0.018l-1.876-1.876
        c0.001,0,0.002-0.001,0.003-0.002v-0.052c-0.104-0.083-0.204-0.17-0.3-0.266c-1.383-1.383-1.383-3.624,0-5.007
        c0.087-0.087,0.178-0.168,0.271-0.245L0,0l5.059,13.706c0.076-0.093,0.158-0.184,0.245-0.271c1.324-1.324,3.429-1.366,4.819-0.153
        l2.365,2.365c-1.107,2.136-1.102,4.698,0.018,6.83l-1.876,1.875c0,0-0.001-0.002-0.002-0.002h-0.052
        c-0.083,0.104-0.17,0.203-0.266,0.299c-1.383,1.384-3.624,1.384-5.006,0c-0.087-0.086-0.169-0.178-0.245-0.271L0.001,38.084
        l13.706-5.06c-0.093-0.076-0.184-0.157-0.271-0.244c-1.324-1.324-1.366-3.43-0.153-4.819l2.365-2.365
        c2.136,1.107,4.699,1.103,6.83-0.018l1.875,1.876c0,0-0.002,0.001-0.003,0.002v0.052c0.104,0.083,0.204,0.17,0.3,0.267
        c1.383,1.383,1.383,3.623,0,5.006C24.564,32.867,24.472,32.948,24.379,33.023z M19.042,21.655c-1.442,0-2.611-1.17-2.611-2.611
        c0-1.442,1.169-2.611,2.611-2.611c1.441,0,2.611,1.169,2.611,2.611C21.653,20.485,20.484,21.655,19.042,21.655z"/>
    </svg>`;
    const blob = new Blob([svgString], {
      type: 'image/svg+xml'
    });
    const url = URL.createObjectURL(blob);
    const texture = new THREE.TextureLoader().load(url);
    // --- CREATE SINGLE MESHES ---
    const geometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      opacity: 0.9,
      depthTest: false
    });
    const star1 = new THREE.Mesh(geometry, material);
    const star2 = new THREE.Mesh(geometry, material);
    // Initial Positions (Far back, Wide apart)
    const startZ = -50;
    const startX = 35; // Wide start
    star1.position.set(-startX, 0, startZ); // Left
    star2.position.set(startX, 0, startZ); // Right
    scene.add(star1);
    scene.add(star2);
    // Animation State
    const speed = 0.3; // SLOWER SPEED (Was 0.8)
    const rotationSpeed = 0.1; // Slower rotation too
    const animate = () => {
      requestAnimationFrame(animate);
      if (isHoveringRef.current) {
        if (!hasPlayedRef.current) {
          // --- ANIMATE STARS ---
          // Move forward
          star1.position.z += speed;
          star2.position.z += speed;
          // Curve in towards center (lerp X towards 0)
          star1.position.x *= 0.98; // Slower curve decay to match slower speed
          star2.position.x *= 0.98;
          // Rotate
          star1.rotation.z += rotationSpeed;
          star2.rotation.z -= rotationSpeed;
          // Check if passed camera
          if (star1.position.z > 10 && star2.position.z > 10) {
            hasPlayedRef.current = true;
            star1.visible = false;
            star2.visible = false;
          } else {
            star1.visible = true;
            star2.visible = true;
          }
        }
      } else {
        // --- RESET ---
        hasPlayedRef.current = false;
        star1.position.set(-startX, 0, startZ);
        star2.position.set(startX, 0, startZ);
        star1.rotation.set(0, 0, 0);
        star2.rotation.set(0, 0, 0);
        star1.visible = true;
        star2.visible = true;
      }
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
      URL.revokeObjectURL(url);
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" style={{
    mixBlendMode: 'screen'
  }} />;
}