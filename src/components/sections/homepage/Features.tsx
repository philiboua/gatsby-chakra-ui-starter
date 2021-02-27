import React from "react"
import {
  ContentWrapper,
  TextProps,
  FeatureBaseProps,
  LinkProps,
  ChildImageSharpProps,
  Feature,
  Text,
  Slice,
} from "@src/components"
import Img from "gatsby-image"
import { isEven } from "@src/utils"

export interface FeatureModel extends FeatureBaseProps {
  link?: LinkProps
  featureImage: ChildImageSharpProps
  content: TextProps
}

export interface FeatureSectionProps {
  data: FeatureModel[]
}

export const FeaturesSection: React.FC<FeatureSectionProps> = ({ data }) => {
  return (
    <ContentWrapper
      contentType="section"
      bgColor="#000"
      withContainer
      highSaturatedBg
      py={{ md: 16 }}
      px={{ md: 8 }}
    >
      {data.map((feature: FeatureModel, index: number) => {
        return (
          <Feature
            reverseGridItemsOrder={!isEven(index)}
            headline={feature.headline}
            caption={feature.caption}
          >
            <Slice __TYPE="body">
              <Text mt={3} type="body.medium">
                {feature.content}
              </Text>
            </Slice>
            <Slice __TYPE="media">
              <Img
                fluid={feature.featureImage.childImageSharp.fluid}
                alt="image"
              />
            </Slice>
          </Feature>
        )
      })}
    </ContentWrapper>
  )
}
