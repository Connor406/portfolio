import SkydiveLoader from "@/components/SkydiveLoader"
import { Box, Button } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"

function Loader() {
  const [loading, setLoading] = useState(false)

  // handlers
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
    console.log("🤘 Hire me")
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>{loading && <SkydiveLoader />}</AnimatePresence>
      <Box
        bg="black"
        h="100vh"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          _focus={{ boxShadow: "none", bg: "#ffffff61" }}
          _hover={{ bg: "#ffffff61" }}
          _active={{ bg: "#ffffff61" }}
          onClick={handleSubmit}
          variant="outline"
          color="#fff"
        >
          press to load
        </Button>
      </Box>
    </>
  )
}

export default Loader
