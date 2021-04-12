import React from "react"
import {
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderProps as ChakraSliderProps,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"
import { useField } from "formik"
import { InputProps } from "@src/components"

export type SliderProps = {
  sliderTrackProps?: SliderTrackProps
  sliderThumbProps?: SliderThumbProps
} & Omit<InputProps, "withFloatingLabel"> &
  ChakraSliderProps

export const Slider: React.FC<SliderProps> = ({
  name,
  label,
  helperText,
  children,
  sliderTrackProps,
  sliderThumbProps,
  ...rest
}) => {
  const [field, , { setValue }] = useField(name)

  function handleChange(v: number) {
    setValue(v)
  }

  // Does not behave like expected, so we manually handle it.
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    e.target.name = name
    field.onBlur(e)
  }

  return (
    <>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <ChakraSlider
        {...field}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-label={name}
        {...rest}
      >
        <SliderTrack {...sliderTrackProps}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb {...sliderThumbProps} />
      </ChakraSlider>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default Slider
