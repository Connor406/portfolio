import { Box } from "@chakra-ui/react";
import { useEffect } from "react"

export default function IFrame() {
useEffect(() => {
  const iframe = document.createElement('iframe');
  iframe.src = "https://app.staging.fulloutsoftware.com/dev2024/iframe/session/9b408769-abb3-422e-a056-317e6d82be15";
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = '0';
  document.getElementById('fo-session-iframe').appendChild(iframe);
}, [])

  return (
    <Box w="100vh" h="100vh">
    <div id='fo-session-iframe' style={{height: '800px', background: 'yellow'}} />
    </Box>
  )
}
