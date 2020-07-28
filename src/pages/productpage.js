import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import productpageStyles from "../styles/productpage.module.css"
import { FaChartLine, FaChartPie, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const ProductPage = () => {
    return (
        <Layout>
            <div className={productpageStyles.section1}>
                <h1>Tuotteet</h1>
                <p><Link className={productpageStyles.link} to="/frontpage">Etusivu</Link> / Tuotteet</p>
            </div>
            <div className={productpageStyles.section2}>
                <div className={productpageStyles.text2}>
                    <p>Kaikkien tuotteidemme lähtökohtana on helppokäyttöisyys ja osuvuus. Palvelut on mietitty siten, että ne tuovat helpotusta päivittäiseen tekemiseen ja tehostavat siten prosesseja.</p>
                    <p>Tuotteita käytetään digitaalisesti ja pääosin lisenssipohjaisesti. Kun lisenssi on käytössä, voi tuotteita hyödyntää täysimääräisesti ja esimerkiksi sisältöjä voi vaihtaa tarvittaessa useinkin.</p>
                </div>
                <div className={productpageStyles.container2}>
                    <div className={productpageStyles.productpagebox}>
                        <div className={productpageStyles.row}>
                            <FaChartLine size='70px' color='rgb(68, 27, 66)' />
                            <h2>Salmi Triplizer</h2>
                        </div>

                        <p>Salmi Triplizer on työkalu matkailun vaikutuksien realiaiakaiseen seurantaan. Matkailutulon,  motiivin, demografiset tiedot sekä tyytyväisyys.</p>
                        <button className={productpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                    <div className={productpageStyles.productpagebox}>
                        <div className={productpageStyles.row}>
                            <FaChartPie size='70px' color='rgb(68, 27, 66)' />
                            <h2>Salmi Eventlizer</h2>
                        </div>
                        
                        <p>Salmi Eventlizer on tehty tapahtumien, kokousten ja kongressien talousvaikutusten, kävijäprofiilien ja tyytyväisyyden analysointiin.</p>
                        <button className={productpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                    <div className={productpageStyles.productpagebox}>
                        <div className={productpageStyles.row}>
                            <FaMobileAlt size='70px' color='rgb(68, 27, 66)' />
                            <h2>Salmi AR</h2>
                        </div>
                        
                        <p>Salmi AR tekee lisätyn todellisuuden eli AR:n käyttöönoton helpoksi. Erityisesti Salmi AR soveltuu erilaisten virtuaalisten opaskierrosten toteuttamiseen.</p>
                        <button className={productpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                    <div className={productpageStyles.productpagebox}>
                        <div className={productpageStyles.row}>
                            <FaDatabase size='70px' color='rgb(68, 27, 66)' />
                            <h2>Salmi Data</h2>
                        </div>
                        
                        <p>Salmi Data on tietokantaratkaisu, jolla hallitaan suuria matkailun tietokokonaisuuksia. Tuo tietoa muualta ja vie sitä myös toisiin järjestelmiin.</p>
                        <button className={productpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                </div>
            </div>
            <div className={productpageStyles.section3}>
                <img src="/ota_yhteytta.png" height='270px' width='370px'></img>
                <div className={productpageStyles.form}>
                    <form>
                        Nimi (pakollinen)<br />
                        <input type="text" id="name" name="name" /><br />
                        Sähköposti (pakollinen)<br />
                        <input type="text" id="email" name="email" /><br />
                        Puhelinnumero<br />
                        <input type="text" id="puh" name="puh" /><br />
                        Aihe<br />
                        <input type="text" id="topic" name="topic" /><br />
                        Viesti<br />
                        <textarea name="message" rows="10" cols="100"></textarea><br />
                        <input type="submit" value="Lähetä" className={productpageStyles.rndbtn} />
                    </form>
                </div>
            </div>

            <a href="#" className={productpageStyles.topbtn}><IoIosArrowUp /></a>
        </Layout>
      )
}

export default ProductPage