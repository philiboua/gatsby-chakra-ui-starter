import React from "react"
import { useRadioGroup, HStack } from "@chakra-ui/react"
import { RadioCard } from "@src/components"

interface RadioCardGroupProps {
  name: string
  defaultValue: string
}

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  name,
  defaultValue,
}) => {
  const options = ["react", "vue", "svelte"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}
