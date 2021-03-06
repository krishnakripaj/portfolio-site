import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kripa Jay</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <NavBar />
      {children}
      <footer>
         <p> Copyright &copy; 2021 Krishnakripa J</p>
      </footer>
    </>
  )
}
