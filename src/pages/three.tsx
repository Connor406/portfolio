import React, { useState, useRef } from "react"
import { OrbitControls } from "../utils/OrbitControls"
import { Canvas, useThree, extend, useFrame } from "react-three-fiber"
import { a, useSpring } from "@react-spring/three"

extend({ OrbitControls })

const Cube = props => {
  const [isBig, setIsBig] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.01
  })

  const { size, x } = useSpring({
    size: isBig ? [2, 2, 2] : [1, 1, 1],
    x: isBig ? 2 : 0,
  })

  const color = isHovered ? "pink" : "salmon"

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={size}
      position-x={x}
      onClick={() => setIsBig(!isBig)}
      onPointerOut={() => setIsHovered(false)}
      onPointerOver={() => setIsHovered(true)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 8, 5]} />
      <meshStandardMaterial attach="material" color={color} />
    </a.mesh>
  )
}
// Shape docs: https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry

const Scene = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()

  return (
    <>
      <ambientLight />
      <pointLight intensity={0.5} position={[-2, 2, 4]} />
      <Cube position={[1, 1, 1]} rotation={[10, 10, 5]} />
      <Cube position={[3, 3, 3]} rotation={[9, 10, 3]} />
      {/* @ts-ignore */}
      <orbitControls args={[camera, domElement]} />
    </>
  )
}

const Three: React.FC = ({}) => {
  return (
    <Canvas style={{ background: "aquamarine", height: "100vh" }}>
      <Scene />
    </Canvas>
  )
}

export default Three
