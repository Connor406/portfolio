import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRive } from "rive-react"

const MotionBox = motion(Box)

export default function SkydiveLoader() {
  const { RiveComponent } = useRive({ src: "/skydiver.riv", autoplay: true })

  return (
    <>
      <MotionBox
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ duration: 0.6 }}
        pos="absolute"
        h="100%"
        w="100%"
        zIndex={3}
      >
        <RiveComponent />
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        pos="absolute"
        h="100%"
        w="100%"
        top={0}
        bgGradient={`linear(#5fdfffb7 0%,   #271f74ae 100%)`}
        zIndex={1}
      />
    </>
  )
}
