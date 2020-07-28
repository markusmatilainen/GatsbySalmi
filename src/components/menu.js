import React, { Component } from "react"
import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import headerStyles from "../styles/header.module.css"
import { Link } from "gatsby"

class Menu extends Component {

    constructor() {
        super()
        this.state = {
            showSearchBar: false
        }
    }

    changeState() {
        this.setState({
            showSearchBar: !this.state.showSearchBar
        })
    }

    render() {

        let linkStyles = {
            display: 'flex'
        };

        let searchStyles = {
            display: 'none'
        };

        if (this.state.showSearchBar) {
            linkStyles = {display: 'none'}
            searchStyles = {display: 'flex'}
        }

        return (
            <div>
                <label for="toggle">&#9776;</label>
                <div className={headerStyles.togglebutton}>
                    <input type="checkbox" id="toggle"/>
                </div>
                <nav className={headerStyles.navbar}>
                    <ul style={linkStyles}>
                        <li><Link>Ajankohtaista</Link></li>
                        <li><Link to="/productpage" activeClassName={headerStyles.activeheaderlink}>Tuotteet</Link>
                            <ul>
                            <li><Link>Salmi triplizer</Link></li>
                            <li><Link>Salmi eventlizer</Link></li>
                            <li><Link>Salmi AR</Link>
                                <ul>
                                <li><Link>Digitaaliset opastuskierrokset - koronatarjous</Link></li>
                                </ul>
                            </li>
                            <li><Link>Salmi Data</Link>
                                <ul>
                                <li><Link>Salmi Map</Link></li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li><Link>Yritys</Link>
                            <ul>
                            <li><Link>Rekisteri- ja tietosuojaseloste</Link></li>
                            </ul>
                        </li>
                        <li><Link>Yhteys</Link>
                            <ul>
                            <li><Link>Laskutustiedot</Link></li>
                            </ul>
                        </li>
                        <li>
                            <FaSearch color='grey' onClick={() => this.changeState()} />
                        </li>
                    </ul>

                    <ul style={searchStyles}>
                        <li><input type="text" placeholder="Hae.." name="search"></input></li>
                        <li><button type="submit"><FaSearch color='white' /></button></li>
                        <li><IoMdClose className={headerStyles.closeIcon} onClick={() => this.changeState()} color='grey' size='20px' /></li>
                    </ul>

                </nav>
            </div>
        )
    }
}

export default Menu