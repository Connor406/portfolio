import React from "react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { BlackOpac, DeepBlack, GrayOpac, White } from "../colorVars"

export interface LoaderProps {
  onClick: any
}

const Loader: React.FC<LoaderProps> = ({ onClick }) => {
  return (
    <Box
      as={motion.div}
      pos="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={2000}
      initial={{ background: DeepBlack }}
      exit={{ background: "rgba(0, 0, 0, 0)" }}
      animate={{ background: DeepBlack }}
    >
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: DeepBlack,
          zIndex: 1000,
          textAlign: "center",
        }}
        layoutId="header"
      >
        <motion.h1
          layoutId="logo"
          style={{
            fontSize: "2rem",
            color: White,
            top: "50vh",
            left: "50vw",
            position: "fixed",
          }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          {"<ConnorCodes />"}
        </motion.h1>
        <motion.div
          style={{
            position: "fixed",
            background: "red",
            height: 20,
            width: 100,
            left: "50vw",
            top: "60vh",
          }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{
            flip: Infinity,
            duration: 1.2,
          }}
        />
        <button type="submit" onClick={onClick}>
          Turn off
        </button>
      </motion.div>
    </Box>
  )
}

export default Loader
