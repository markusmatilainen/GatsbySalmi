import React from "react"
import { Link } from "gatsby"
import navareaStyles from "../styles/navarea.module.css"

const Navarea = () => {
  return (
    <div className={navareaStyles.navarea}>
        <div className={navareaStyles.area1}>
            <Link to="/frontpage">
                <img src="/salmi_logo_110.png" alt="Salmi logo" />
            </Link>
        </div>
        <div className={navareaStyles.area2}>
            <ul className={navareaStyles.list}>
                <li className={navareaStyles.listitem}>
                    <Link to="/frontpage" className={navareaStyles.link} activeClassName={navareaStyles.activelink}>Etusivu</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>Ajankohtaista</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link to="/productpage" className={navareaStyles.link} activeClassName={navareaStyles.activelink}>Tuotteet</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>Yritys</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>Yhteys</Link>
                </li>
            </ul>
        </div>
        <div className={navareaStyles.area3}>
            <h4 className={navareaStyles.latestheading}>Viimeisimmät artikkelit</h4>
            <ul className={navareaStyles.list}>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>Jukola Industries Oy:n herätetaulujen raamit</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>Villien jäljillä – asiaa mobiilipaikannuksesta ja matkailun tiedosta</Link>
                </li>
                <li className={navareaStyles.listitem}>
                    <Link className={navareaStyles.link}>AR-opaskierrosten korona-ajan tarjous</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navarea