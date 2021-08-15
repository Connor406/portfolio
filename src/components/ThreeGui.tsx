import React from "react"
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react"

export interface ThreeGuiProps {
  onChange: (val: any) => void
  label: string
  defaultVal?: number
}

const ThreeGui: React.FC<ThreeGuiProps> = ({ onChange, label, defaultVal = 1 }) => {
  return (
    <>
      <h5>{label}</h5>
      <Slider
        min={-10}
        max={10}
        step={0.02}
        onChange={onChange}
        colorScheme="red"
        minW={100}
        defaultValue={defaultVal}
      >
        <SliderTrack bg="red.100">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  )
}

export default ThreeGui
