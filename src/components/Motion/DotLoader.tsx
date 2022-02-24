import { MotionBox } from "./Motion"

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}

export default function DotLoader() {
  return (
    <MotionBox
      w="2rem"
      h="2rem"
      display="flex"
      justifyContent="space-around"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <MotionBox
        display="block"
        h="0.5rem"
        w="0.5rem"
        bg="white"
        borderRadius="50%"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <MotionBox
        display="block"
        h="0.5rem"
        w="0.5rem"
        bg="white"
        borderRadius="50%"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <MotionBox
        display="block"
        h="0.5rem"
        w="0.5rem"
        bg="white"
        borderRadius="50%"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </MotionBox>
  )
}
