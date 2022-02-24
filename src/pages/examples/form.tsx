import BallPit from "@/components/BallPit"
import Load from "@/components/Motion/DotLoader"
import { Box, Button, Input } from "@chakra-ui/react"
import { useState } from "react"

function Login() {
  // colors
  const lightBlue = "#90f2ff"
  const pink = "#b962ff"
  const blue = "#2b6cf8"
  const purple = "#7962ff"

  // loader
  const [loading, setLoading] = useState(false)

  // handlers
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
    console.log("🤘 Hire me")
  }

  return (
    <Box w="100vh" h="100vh">
      <Box
        w="100vw"
        h="100vh"
        opacity={0.8}
        bgGradient={`linear(${lightBlue} 0%, ${pink} 25%, ${blue} 50%, ${purple} 75%, ${lightBlue} 100%)`}
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          h="9rem"
          w="40vw"
          pos="absolute"
          left="30vw"
          top="calc(50vh - 3rem)"
          zIndex={1}
        >
          <Input
            placeholder="email"
            _focus={{ boxShadow: "none" }}
            _placeholder={{ color: "#ffffffa6" }}
            color="#fff"
            mb="1rem"
          />
          <Input
            placeholder="password"
            type="password"
            _focus={{ boxShadow: "none" }}
            _placeholder={{ color: "#ffffffa6" }}
            color="#fff"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            color="#fff"
            variant="outline"
            mt="1rem"
            w="5rem"
            _focus={{ boxShadow: "none", bg: "#ffffff61" }}
            _hover={{ bg: "#ffffff61" }}
            _active={{ bg: "#ffffff61" }}
          >
            {loading ? <Load /> : "submit"}
          </Button>
        </Box>
        <BallPit loading={loading} />
      </Box>
    </Box>
  )
}

export default Login
