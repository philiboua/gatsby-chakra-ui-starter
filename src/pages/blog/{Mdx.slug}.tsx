import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { ChakraMDXProvider } from "@src/chakra-ui/mdxProvider"

const BlogPostPage = ({ data }) => {
  const post = data.mdx
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={ChakraMDXProvider()}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPostPage
