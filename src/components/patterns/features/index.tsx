import React from "react"
import { Feature, FeatureProps } from "@src/components"
import { isEven } from "@src/utils"

interface FeaturesProps {
  data: FeatureProps[]
  bgColorWithHighSaturation?: boolean
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  const displayFeatures =
    data !== undefined
      ? data.map((feature: FeatureProps, index: number) => {
          return (
            <Feature
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
