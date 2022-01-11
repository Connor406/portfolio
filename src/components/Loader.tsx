import { BlackOpac, BlueGreen, BrightYellow, MainPink, SolidGreen } from "@/colorVars"
import { motion } from "framer-motion"
import { MotionBox, MotionText } from "./Motion/Motion"

export interface LoaderProps {
  isMobile: boolean
}

const Loader: React.FC<LoaderProps> = ({ isMobile }) => {
  return !isMobile ? (
    <MotionBox
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      zIndex={6}
      pos="fixed"
      top={0}
      bottom={0}
      right={0}
      left={0}
      bg={SolidGreen}
    >
      <MotionBox layoutId="header" mt="calc(50vh - 75px)" w="100%" h="150px" align="center">
        <MotionText
          color={BlackOpac}
          layoutId="logo"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          fontSize="3rem"
          fontFamily="Tradesmith"
          layout
        >{`< ConnorCodes />`}</MotionText>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            style={{
              background: BlueGreen,
              height: 6,
              width: 100,
            }}
            initial={{ x: -100, y: 10 }}
            animate={{ x: 100, y: -3 }}
            transition={{
              flip: Infinity,
              duration: 1,
            }}
          />
          <motion.div
            style={{
              background: MainPink,
              height: 8,
              width: 20,
            }}
            initial={{ x: -170, y: -6 }}
            animate={{ x: 170, y: 8 }}
            transition={{
              flip: Infinity,
              duration: 1.2,
            }}
          />
          <motion.div
            style={{
              background: BrightYellow,
              height: 4,
              width: 200,
            }}
            initial={{ x: -80, y: 5 }}
            animate={{ x: 80, y: -30 }}
            transition={{
              flip: Infinity,
              duration: 1.4,
            }}
          />
        </motion.div>
      </MotionBox>
    </MotionBox>
  ) : (
    <MotionBox
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      zIndex={6}
      pos="fixed"
      top={0}
      bottom={0}
      right={0}
      left={0}
      bg={SolidGreen}
    >
      <MotionText
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        mt="calc(50vh - 75px)"
        w="100%"
        h="150px"
        align="center"
        color={BlackOpac}
        fontSize="2.2rem"
        fontFamily="Tradesmith"
      >{`< ConnorCodes />`}</MotionText>
    </MotionBox>
  )
}

export default Loader
