import React from "react"
import footerStyles from "../styles/footer.module.css"
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <p>© Salmi Platform 2020 - 2020</p>
        <div className={footerStyles.social}>
            <a href="https://www.facebook.com/Salmi-Platform-107508790772213/" target="_blank" className={footerStyles.btn}>
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/salmiplatform/" target="_blank" className={footerStyles.btn}>
              <GrInstagram />
            </a>
        </div>
    </footer>
  )
}

export default Footer