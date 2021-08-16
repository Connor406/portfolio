import React from "react"
import { Box, Heading, forwardRef, Text, Link } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

const MotionHeading = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Heading ref={ref} {...chakraProps} />
  })
)

const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

const MotionText = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Text ref={ref} {...chakraProps} />
  })
)

const MotionLink = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Link ref={ref} {...chakraProps} />
  })
)

export { MotionHeading, MotionBox, MotionText, MotionLink }
