import React, { useState, useRef } from "react"
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber"
import { a, useSpring } from "@react-spring/three"
import { OrbitControls, Torus } from "@react-three/drei"
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from "@chakra-ui/react"
import ThreeGui from "../components/ThreeGui"

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
      castShadow
      receiveShadow
      position-x={x}
      onClick={() => setIsBig(!isBig)}
      onPointerOut={() => setIsHovered(false)}
      onPointerOver={() => setIsHovered(true)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 8, 6]} />
      <meshPhongMaterial
        flatShading={true}
        roughness={1}
        metalness={0.5}
        attach="material"
        shininess={100}
        color={color}
      />
    </a.mesh>
  )
}
// Shape docs: https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry

function Plane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-5, 0, 5]}>
      <planeBufferGeometry receiveShadow attach="geometry" args={[20, 20]} />
      <meshPhongMaterial attach="material" color="white" />
    </mesh>
  )
}

const Scene = ({ xValue, yValue, zValue }) => {
  // const positionX = useControl("Position X", { type: "number" })

  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight castShadow intensity={0.7} position={[4, 10, 8]} />
      <Cube position={[xValue, yValue, zValue]} rotation={[9, 10, 5]} />
      <Cube position={[3, 3, 3]} rotation={[9, 10, 3]} />
      <Torus args={[1, 0.2, 100, 40]} castShadow position={[-2, 2, -1]}>
        <meshPhongMaterial
          roughness={1}
          metalness={0.5}
          attach="material"
          shininess={100}
          color="gold"
        />
      </Torus>
      <Plane />
      <OrbitControls />
    </>
  )
}

const Three: React.FC = ({}) => {
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [zValue, setZValue] = useState(2)

  return (
    <>
      <Canvas shadows style={{ background: "aquamarine", height: "100vh" }}>
        <Scene xValue={xValue} yValue={yValue} zValue={zValue} />
      </Canvas>
      <Box position="fixed" top={5} left={5} zIndex={100}>
        <ThreeGui defaultVal={2} label={`Cube X: ${xValue}`} onChange={val => setXValue(val)} />
        <ThreeGui label={`Cube Y: ${yValue}`} onChange={val => setYValue(val)} />
        <ThreeGui label={`Cube Z: ${zValue}`} onChange={val => setZValue(val)} />
      </Box>
    </>
  )
}

export default Three
