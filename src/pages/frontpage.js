import React from "react"
import Layout from "../components/layout"
import frontpageStyles from "../styles/frontpage.module.css"
import { FaChartLine, FaChartPie, FaMobileAlt } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const FrontPage = () => {
    return (
        <Layout>
            <div className={frontpageStyles.section1}>
                <h2>Matkailua digitalisoimassa</h2>
            </div>
            <div className={frontpageStyles.section2}>
                <div className={frontpageStyles.content2}>
                    <h2>Matkailun digitalisoinnin puolesta</h2>
                    <p className={frontpageStyles.first}>Salmi Platform on matkailun digitalisoimiseen erikoistunut<br />toimija. Teemme innostuneesti työkaluja seuraaviin tarpeisiin:</p>
                    <p className={frontpageStyles.second}>– matkailun analytiikka<br />– tapahtumien analysointi<br />– lisätty todellisuus (AR)<br />– matkailun tiedon hallinta</p>
                    <button className={frontpageStyles.rndbtn}>Lue Lisää</button>
                </div>
                <img src="/AR-phone-1200x1267.jpg" />
            </div>
            <div className={frontpageStyles.section3}>
                <h1>Suoraan asiaan</h1>
                <p>Kaikki palvelumme on mietitty tarkoin matkailu- ja tapahtuma-alan tarpeet huomioiden.</p>
                <div className={frontpageStyles.container3}>
                    <div className={frontpageStyles.frontpagebox}>
                        <FaChartLine size='70px' color='rgb(68, 27, 66)' />
                        <h2>Matkailutulotutkimus</h2>
                        <p>Muutamme matkailutulotiedon päivittäiseksi analytiikaksi. Samalla selvitämme asiakkaiden demografiset tiedot, motiivit ja tyytväisyyden.</p>
                        <button className={frontpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                    <div className={frontpageStyles.frontpagebox}>
                        <FaChartPie size='70px' color='rgb(68, 27, 66)' />
                        <h2>Tapahtuma-analyysi</h2>
                        <p>Tapahtumien analysointi on meidän perustyötä. Selvitä tapahtumasi taloudelliset vaikutukset sekä kävijäprofiilit.</p>
                        <button className={frontpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                    <div className={frontpageStyles.frontpagebox}>
                        <FaMobileAlt size='70px' color='rgb(68, 27, 66)' />
                        <h2>AR-ratkaisut</h2>
                        <p>Lisätyn todellisuuden toteutusten ei tarvitse olla hankalaa. Ota käyttöön yksinkertainen työkalumme ja luo kiinnostavia sisältöjä asiakkaillesi.</p>
                        <button className={frontpageStyles.boxbtn}>Lue lisää</button>
                    </div>
                </div>
            </div>
            <div className={frontpageStyles.section4}>
                <h1>Asiakastarinat</h1>
                <div className={frontpageStyles.stories}>
                    <div className={frontpageStyles.story1}>
                        <img src="/puijopeak.png" className={frontpageStyles.puijo} />
                        <div className={frontpageStyles.storycontent}>
                            <p>“Julkaisemme kesäkuussa perheille suunnatun Luonto AR-kierroksen. Toteutuksessa yhdistyy omatoiminen luonnossa liikkuminen ja digitaalisesti luodut elämykset”.</p>
                        </div>
                        <div className={frontpageStyles.signature}>
                            <p className={frontpageStyles.name}>Pekka Niemelä</p>
                            <p className={frontpageStyles.role}>Toimitusjohtaja</p>
                        </div>
                    </div>
                    <div className={frontpageStyles.story2}>
                        <img src="/runni.jpg" />
                        <div className={frontpageStyles.storycontent}>
                            <p>“Halusimme tuoda Runnin rikkaan historian aivan uudella tavalla ihmisten ihailtavaksi. AR:n avulla saimme luotua visuaalisesti wow-elämyksen asiakkaillemme”</p>
                        </div>
                        <div className={frontpageStyles.signature}>
                            <p className={frontpageStyles.name}>Satu Jokihalme</p>
                            <p className={frontpageStyles.role}>Toimitusjohtaja</p>
                        </div>
                    </div>
                    <div className={frontpageStyles.story3}>
                        <img src="/tahko.png" />
                        <div className={frontpageStyles.storycontent}>
                            <p>“Salmi Eventlizer -tapahtumatutkimus oli helppo ja kustannustehokas toteuttaa, koska koko prosessi on täysin digitalisoitu. Saimme tuloksista merkittävää hyötyä”.</p>
                        </div>
                        <div className={frontpageStyles.signature}>
                            <p className={frontpageStyles.name}>Hannu Airila</p>
                            <p className={frontpageStyles.role}>Tapahtumapäällikkö</p>
                        </div>
                    </div>
                    <div className={frontpageStyles.story4}>
                        <img src="/korttelimuseo.png" />
                        <div className={frontpageStyles.storycontent}>
                            <p>“Salmi AR:n päälle saimme koostettua yhtenäiseksi asiakaskokemukseksi vanhojen kenkien 3D-mallit, kuvat ja tarinat. Saamme tehtyä asiakkaille osallistavaa ja mielenkiintoista sisältöä”.</p>
                        </div>
                        <div className={frontpageStyles.signature}>
                            <p className={frontpageStyles.name}>Helka Väisänen</p>
                            <p className={frontpageStyles.role}>Museonjohtaja</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={frontpageStyles.section5}>
                <h2>Voimmeko jatkaa keskustelua?</h2>
                <h4>Kasvokkain tai etänä, niin viedään asioita eteenpäin.</h4>
                <button className={frontpageStyles.rndbtn}>Jutellaan</button>
            </div>

            <a href="#" className={frontpageStyles.topbtn}><IoIosArrowUp /></a>
        </Layout>
      )
}

export default FrontPage