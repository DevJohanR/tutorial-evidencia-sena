import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/logo.jpeg"
const Header = () => {
  return (

    <div className={styles.headerContain}>
        <div className={styles.logo}><img width={130} src={logo} alt="logo ritual de la vela blanca" /></div>
        <div className={styles.namePage}><h1>Ritual de la Vela Blanca para la Prosperidad</h1></div>
    </div>
  )
}

export default Header