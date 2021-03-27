import React from "react"
import { screen } from "@testing-library/react"
import { Text, Heading } from "@chakra-ui/react"
import { render } from "@src/tests"
import { Article } from "../Article"

describe("Article", () => {
  it("renders an Article, with an Heading and Text", () => {
    render(
      <Article>
        <Heading>Heading Article</Heading>
        <Text>This is a paragraph</Text>
      </Article>
    )

    expect(screen.getByText("Heading Article")).toBeInTheDocument()
    expect(screen.getByText("This is a paragraph")).toBeInTheDocument()
  })

  it("renders an Article, with some content from the data prop", () => {
    const articleContent = [
      {
        type: "headline.medium" as const,
        content: "Get started now",
      },
      {
        type: "body.medium" as const,
        content: "You will build website faster with Chakra UI",
      },
    ]

    render(<Article data={articleContent} />)

    expect(screen.getByText("Get started now")).toBeInTheDocument()
    expect(
      screen.getByText("You will build website faster with Chakra UI")
    ).toBeInTheDocument()
  })
})
