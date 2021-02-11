import React from "react"
import { Feature } from "@src/components"
import { IFeature } from "@src/@interfaces"
import { isEven } from "@src/utils"

interface FeaturesProps {
  data: IFeature[]
  bgColorWithHighSaturation?: boolean
}

export const Features: React.FC<FeaturesProps> = ({
  bgColorWithHighSaturation,
  data,
}) => {
  const displayFeatures =
    data !== undefined
      ? data.map((feature: IFeature, index: number) => {
          return (
            <Feature
              bgColorWithHighSaturation={bgColorWithHighSaturation}
              key={feature?.id}
              caption={feature.caption}
              featureImage={feature.featureImage}
              headline={feature.headline}
              content={feature.content}
              reverseGridItemsOrder={!isEven(index)}
              link={feature?.link}
            />
          )
        })
      : ""

  return <>{displayFeatures}</>
}

export default Features
