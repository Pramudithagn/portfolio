import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "../Loader";

const Robot = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./robot/scene.gltf");
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const ref = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene);
      action.play();
    }

    return () => {
      mixer.stopAllAction();
    };
  }, [animations, mixer, scene]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow={false}
        // shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 1.2 : 2}
        position={isMobile ? [0, -2, 0] : [0, -3.25, -1]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <Canvas
        // frameloop="always"
        frameloop={inView ? "always" : "never"}
        shadows={false}
        dpr={[1, 1.5]}
        camera={{ position: [40, 3, 5], fov: 15 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Robot isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
