import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import * as Colors from "@/colorVars"

interface Props {}

function Lightning({}: Props) {
  return (
    <Box pos="absolute" w="100vw" h="100vh">
      <motion.svg
        id="eKPn7SgHDGA1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
      >
        <motion.path
          initial={{ scale: 3.5, x: 10000, y: -1000, fill: Colors.BrightYellow }}
          animate={{
            scale: [40, 0.2, 1],
            x: 0,
            y: 0,
            fill: Colors.Lavendar,
          }}
          transition={{ duration: 0.5, type: "spring" }}
          // animate={{
          //   scale: [1, 2, 2, 1, 1],
          //   rotate: [0, 0, 270, 270, 0],
          //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          // }}
          d="M574.824708,46.290484L334.42404,112.534224l80.133556,2.136895-219.03172,68.380633h86.544241L22.437396,264.253755L458.36394,184.120198l-84.407346-1.068448l211.552588-64.106846-74.791319-5.342238L621.836394,99.712849L574.824708,46.290484"
          // fill={Colors.Lavendar}
          stroke="url(#linear)"
          stroke-width="8"
        />
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color={Colors.SecondaryPink} />
            <stop offset="50%" stop-color={Colors.LightOrange} />
            <stop offset="100%" stop-color={Colors.MainOrange} />
          </linearGradient>
        </defs>
      </motion.svg>
    </Box>
  )
}

export default Lightning
