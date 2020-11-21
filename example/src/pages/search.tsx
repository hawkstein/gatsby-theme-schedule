import React from "react"
import { Layout } from "@hawkstein/gatsby-theme-schedule"

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <p>Setup your search options here.</p>
      <p>
        {" "}
        Use TypeSense, FlexSearch or Meilisearch to build your search perhaps.
      </p>
    </Layout>
  )
}

export default SearchPage
