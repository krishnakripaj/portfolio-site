import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <main>
        <div className={style.banner}>
          <img
            className="animate__animated animate__fadeIn animate__fast"
            src="/me.png"
          />
          <h2 className="animate__animated animate__pulse animate__fast">
            Krishnakripa Jayakumar
          </h2>
          <h3 className="animate__animated animate__pulse animate__fast">
            Educator
          </h3>
          <a href="https://www.linkedin.com/in/kripajayakumar/" target="_blank">View my CV</a>
        </div>
      </main>
    </Layout>
  )
}
