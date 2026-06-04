import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

/**
 * Three.js animated DevOps command-center background.
 * Renders a wireframe core, orbiting tech labels, particles, and network nodes
 * with bloom post-processing. Mouse parallax + scroll dolly.
 */
const DevOpsScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070f, 0.025);
    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 18);

    scene.add(new THREE.AmbientLight(0x88aaff, 0.5));
    const p1 = new THREE.PointLight(0x00e5ff, 2.4, 60); p1.position.set(8, 6, 10); scene.add(p1);
    const p2 = new THREE.PointLight(0x7c5cff, 2.0, 60); p2.position.set(-9, -4, 6); scene.add(p2);

    // Core
    const core = new THREE.Group(); scene.add(core);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0a2540, emissive: 0x00e5ff, emissiveIntensity: 0.7,
      metalness: 0.9, roughness: 0.25, wireframe: true,
    });
    const coreMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(2.4, 1), coreMat);
    core.add(coreMesh);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x051a2e, transparent: true, opacity: 0.6 });
    core.add(new THREE.Mesh(new THREE.IcosahedronGeometry(2.1, 1), innerMat));
    const ringGeo = new THREE.TorusGeometry(3.6, 0.02, 8, 90);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x19ffd0 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat); ring1.rotation.x = Math.PI / 2.2; core.add(ring1);
    const ring2 = new THREE.Mesh(ringGeo, ringMat.clone()); ring2.rotation.x = Math.PI / 2.2; ring2.rotation.y = Math.PI / 3; core.add(ring2);

    // Tech labels
    const makeLabel = (text: string) => {
      const c = document.createElement("canvas"); c.width = 300; c.height = 80;
      const x = c.getContext("2d")!;
      x.font = "bold 34px Inter,sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillStyle = "#bfe9ff"; x.shadowColor = "#00e5ff"; x.shadowBlur = 18;
      x.fillText(text, 150, 40);
      const t = new THREE.CanvasTexture(c);
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending }));
      s.scale.set(3, 0.8, 1); return s;
    };
    const techNames = ["Docker", "Kubernetes", "Terraform", "AWS", "Azure", "Linux", "Ansible", "Actions", "Jenkins", "Prometheus"];
    const modules: THREE.Group[] = [];
    techNames.forEach((n, i) => {
      const g = new THREE.Group();
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshBasicMaterial({ color: 0x00e5ff }));
      g.add(dot);
      const lbl = makeLabel(n); lbl.position.y = 0.5; g.add(lbl);
      (g.userData as any) = { ang: (i / techNames.length) * Math.PI * 2, rad: 6 + (i % 3), sp: 0.12 + (i % 4) * 0.03, tilt: (i % 5) * 0.4 };
      modules.push(g); scene.add(g);
    });

    // Particles
    const COUNT = 1500;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3); const spd = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const r = 8 + Math.random() * 22, a = Math.random() * Math.PI * 2, h = (Math.random() - 0.5) * 26;
      pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = h; pos[i * 3 + 2] = Math.sin(a) * r;
      spd[i] = 0.005 + Math.random() * 0.02;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
      color: 0x00e5ff, size: 0.08, transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    scene.add(points);

    // Network
    const net = new THREE.Group(); scene.add(net);
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < 9; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5) * 24, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10 - 4);
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), new THREE.MeshBasicMaterial({ color: 0x7c5cff }));
      m.position.copy(v); net.add(m); nodes.push(v);
    }
    const lineMat = new THREE.LineBasicMaterial({ color: 0x224466, transparent: true, opacity: 0.4 });
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i], b = nodes[(i + 2) % nodes.length];
      net.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), lineMat));
    }

    // Bloom
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.9, 0.6, 0.2);
    composer.addPass(bloom);

    let mx = 0, my = 0, scrollY = 0;
    const onMouse = (e: MouseEvent) => { mx = e.clientX / window.innerWidth - 0.5; my = e.clientY / window.innerHeight - 0.5; };
    const onScroll = () => { scrollY = window.scrollY / window.innerHeight; };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight); composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      core.rotation.y = t * 0.15; core.rotation.x = Math.sin(t * 0.2) * 0.15;
      ring1.rotation.z = t * 0.4; ring2.rotation.z = -t * 0.3;
      coreMat.emissiveIntensity = 0.6 + Math.sin(t * 2) * 0.25;
      modules.forEach((g) => {
        const d = g.userData as any; d.ang += d.sp * 0.01;
        g.position.set(Math.cos(d.ang) * d.rad, Math.sin(d.ang * 0.7 + d.tilt) * 2.4, Math.sin(d.ang) * d.rad - 2);
      });
      const arr = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) { arr[i * 3 + 1] += spd[i]; if (arr[i * 3 + 1] > 14) arr[i * 3 + 1] = -14; }
      pGeo.attributes.position.needsUpdate = true;
      points.rotation.y = t * 0.02;
      net.rotation.y = Math.sin(t * 0.1) * 0.1;

      const tz = 18 - scrollY * 1.2;
      camera.position.x += (mx * 4 - camera.position.x) * 0.04;
      camera.position.y += (-my * 3 + scrollY * 1.5 - camera.position.y) * 0.04;
      camera.position.z += (tz - camera.position.z) * 0.04;
      camera.lookAt(0, scrollY * 0.6, 0);
      composer.render();
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      composer.dispose();
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "#05070f" }}
    />
  );
};

export default DevOpsScene;
