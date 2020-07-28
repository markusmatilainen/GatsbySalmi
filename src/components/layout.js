import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Navarea from "../components/navarea"

const Layout = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <Navarea />
        <Footer />
    </div>
  )
}

export default Layout