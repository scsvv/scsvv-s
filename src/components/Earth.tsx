'use client'
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/earth/scene.gltf')
  return (
    <>
      <primitive object={gltf.scene} scale={0.18} />
    </>
  )
}

export default function Earth() {
  return (
    <div>
      <div className="cursor-pointer">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>
    </div>
  )
}
