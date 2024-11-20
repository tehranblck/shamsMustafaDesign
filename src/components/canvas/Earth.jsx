import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf"); // Model yolunun public klasöründen doğru çağrıldığından emin olun.



  return (
    <primitive
      object={earth.scene}
      scale={[6, 6, 6]} // Modelin ölçeğini artırarak sahnede görünebilir hale getirin.
      position={[0, 0, 0]} // Modeli sahnenin merkezine hizalayın.
      rotation={[0, 0, 0]} // Modelin başlangıç rotasyonunu ayarlayın.
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6], // Kameranın sahnedeki pozisyonu
      }}
    >
      {/* Sahneye ışıklar ekleniyor */}
      <ambientLight intensity={0.5} /> {/* Genel bir aydınlatma */}
      <directionalLight
        position={[10, 10, 10]} // Işığın pozisyonu
        intensity={1} // Işığın parlaklığı
        castShadow
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false} // Yakınlaştırmayı devre dışı bırak
          maxPolarAngle={Math.PI / 2} // Kamera döndürme sınırı
          minPolarAngle={Math.PI / 2} // Kamera döndürme sınırı
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
