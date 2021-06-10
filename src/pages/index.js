import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <main>
        <div className={style.banner}>
          <div>
            <img
              className="animate__animated animate__fadeIn animate__slow"
              src="/profile.png"
            />
            <p
              className={
                style.quote +
                " " +
                "quote animate__animated animate__fadeIn animate__slow"
              }
            >
              " I always thought the idea of education was to learn to think for
              yourself " - Dead Poets Society
            </p>
          </div>

          <h2 className="animate__animated animate__pulse animate__fast">
            Krishna<span>kripa Jay</span>akumar
          </h2>
          <h3 className="animate__animated animate__fadeIn animate__slow">
            Educator
          </h3>
          <a
            href="https://www.linkedin.com/in/kripajayakumar/"
            rel="noreferrer"
            target="_blank"
            className={
              style.btnBlackYellow +
              " " +
              "animate__animated animate__fadeIn animate__slow"
            }
          >
            Click here for my resume
          </a>
        </div>
        <div className={style.bannerImg}>
          <img
            className="animate__animated animate__pulse animate__fast"
            src="/teacher.png"
            style={{ width: "75%" }}
          />
        </div>
      </main>
    </Layout>
  )
}
