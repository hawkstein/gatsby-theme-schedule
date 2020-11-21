import React from "react"
import { Layout } from "@hawkstein/gatsby-theme-schedule"
import DocumentHead from "@hawkstein/gatsby-theme-schedule/src/components/doc-head"

export default () => {
  return (
    <Layout>
      <DocumentHead title="@hawkstein/gatsby-theme-schedule" />
      <h1>Event Schedule Example</h1>
      <section>
        <h2>Basic Setup</h2>
        <p>Not much to see in this...</p>
      </section>
      <section>
        <h3>An example site for '@hawkstein/gatsby-theme-schedule'</h3>
        <p>
          {" "}
          Find out more at{" "}
          <a href="https://www.github/hawkstein/gatsby-theme-schedule">
            the Github repo
          </a>
        </p>
      </section>
    </Layout>
  )
}
