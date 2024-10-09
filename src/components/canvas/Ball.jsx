import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "../Loader";

// const Ball = (props) => {
const Ball = React.memo((props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    return () => {
      if (canvasRef.current) {
        canvasRef.current.dispose();
        canvasRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Canvas
        ref={canvasRef}
        // frameloop="always"
        frameloop={inView ? "always" : "never"}
        dpr={[1, 2]}
        // gl={{ preserveDrawingBuffer: true }}
        gl={{ preserveDrawingBuffer: true, antialias: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
