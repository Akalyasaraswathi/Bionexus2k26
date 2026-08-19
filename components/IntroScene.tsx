"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  active: boolean;
};

/**
 * Renders the rotating DNA/caduceus core plus two flanking lab-coat
 * figures on a transparent full-screen canvas. Pure three.js (no R3F)
 * so it stays lightweight and easy to reason about.
 */
export default function IntroScene({ active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 9);

    scene.add(new THREE.AmbientLight(0x8877ff, 0.6));
    const key = new THREE.PointLight(0x2be8cf, 2.2, 30);
    key.position.set(5, 4, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x7c5cff, 2.4, 30);
    rim.position.set(-5, -3, 4);
    scene.add(rim);

    // ---- central rotating biomedical object: DNA helix + caduceus wings ----
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const strandMat = new THREE.MeshStandardMaterial({
      color: 0x2be8cf,
      emissive: 0x0d5c52,
      roughness: 0.3,
      metalness: 0.6,
    });
    const strandMat2 = new THREE.MeshStandardMaterial({
      color: 0x7c5cff,
      emissive: 0x2c1a70,
      roughness: 0.3,
      metalness: 0.6,
    });
    const rungMat = new THREE.MeshStandardMaterial({
      color: 0xeef0ff,
      roughness: 0.5,
      metalness: 0.2,
    });

    const helixHeight = 5.5;
    const turns = 3;
    const segs = 60;
    const radius = 1.1;
    const sphereGeo = new THREE.SphereGeometry(0.09, 12, 12);

    for (let i = 0; i < segs; i++) {
      const t = i / segs;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * helixHeight;
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const s1 = new THREE.Mesh(sphereGeo, strandMat);
      s1.position.set(x1, y, z1);
      coreGroup.add(s1);

      const s2 = new THREE.Mesh(sphereGeo, strandMat2);
      s2.position.set(x2, y, z2);
      coreGroup.add(s2);

      if (i % 4 === 0) {
        const dist = Math.hypot(x1 - x2, z1 - z2);
        const rungGeo = new THREE.CylinderGeometry(0.02, 0.02, dist, 6);
        const rung = new THREE.Mesh(rungGeo, rungMat);
        rung.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
        rung.lookAt(new THREE.Vector3(x2, y, z2));
        rung.rotateX(Math.PI / 2);
        coreGroup.add(rung);
      }
    }

    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xeef0ff,
      roughness: 0.4,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85,
    });
    [-1, 1].forEach((dir) => {
      const wingGeo = new THREE.ConeGeometry(0.5, 1.6, 4, 1, true);
      const wing = new THREE.Mesh(wingGeo, wingMat);
      wing.position.set(dir * 0.9, helixHeight / 2 + 0.3, 0);
      wing.rotation.z = dir * 1.1;
      wing.rotation.x = 0.3;
      coreGroup.add(wing);
    });

    // ---- lab-coat humanoid figures flanking the core ----
    function makeFigure(xOffset: number) {
      const g = new THREE.Group();
      const coatMat = new THREE.MeshStandardMaterial({
        color: 0xeef0ff,
        roughness: 0.75,
        metalness: 0.05,
      });
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xcbb79a, roughness: 0.7 });
      const trimMat = new THREE.MeshStandardMaterial({
        color: 0x2be8cf,
        roughness: 0.5,
        emissive: 0x0a3a34,
      });

      const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 20), skinMat);
      head.position.y = 2.55;
      g.add(head);

      const torso = new THREE.Mesh(new THREE.ConeGeometry(0.62, 1.9, 24, 1, true), coatMat);
      torso.position.y = 1.55;
      g.add(torso);

      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 10, 24), trimMat);
      collar.position.y = 2.18;
      collar.rotation.x = Math.PI / 2;
      g.add(collar);

      const hem = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.03, 8, 32), trimMat);
      hem.position.y = 0.62;
      hem.rotation.x = Math.PI / 2;
      g.add(hem);

      const armGeo = new THREE.CylinderGeometry(0.09, 0.09, 1.3, 10);
      const armL = new THREE.Mesh(armGeo, coatMat);
      armL.position.set(-0.62, 1.5, 0);
      armL.rotation.z = 0.28;
      g.add(armL);
      const armR = new THREE.Mesh(armGeo, coatMat);
      armR.position.set(0.62, 1.5, 0);
      armR.rotation.z = -0.28;
      g.add(armR);

      const legGeo = new THREE.CylinderGeometry(0.12, 0.1, 1.0, 10);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x1c1f3d });
      const legL = new THREE.Mesh(legGeo, legMat);
      legL.position.set(-0.2, 0.05, 0);
      g.add(legL);
      const legR = legL.clone();
      legR.position.x = 0.2;
      g.add(legR);

      g.position.x = xOffset;
      g.scale.setScalar(0.85);
      return g;
    }

    const figureL = makeFigure(-3.4);
    figureL.rotation.y = 0.35;
    scene.add(figureL);
    const figureR = makeFigure(3.4);
    figureR.rotation.y = -0.35;
    scene.add(figureR);

    // ---- ambient particle field ----
    const particleCount = 260;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x7c5cff, size: 0.045, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      coreGroup.rotation.y = t * 0.35;
      coreGroup.position.y = Math.sin(t * 0.6) * 0.15;

      figureL.position.y = Math.sin(t * 0.9) * 0.06;
      figureR.position.y = Math.sin(t * 0.9 + 1.2) * 0.06;
      figureL.rotation.y = 0.35 + Math.sin(t * 0.4) * 0.05;
      figureR.rotation.y = -0.35 - Math.sin(t * 0.4) * 0.05;

      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      pGeo.dispose();
      sphereGeo.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden={!active}
    />
  );
}
