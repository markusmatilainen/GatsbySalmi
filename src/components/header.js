import React from "react"
import { Link } from "gatsby"
import Menu from './menu'

const Header = () => {
  return (
    <header>
        
        <Link to="/frontpage">
            <img src="/salmi_logo_110.png" alt="Salmi logo" />
        </Link>

        <Menu />

    </header>
  )
}

export default Header