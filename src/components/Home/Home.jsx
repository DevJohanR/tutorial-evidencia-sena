import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import imagenHome from '../../assets/imagenHome.jpeg'

const Home = () => {
  return (
    <div className={styles.homeContain}>
        <Header/>

<main className={styles.mainContain}>
<h2>Estas mas cerca de alcanzar la prosperidad que sueñas</h2>
<p>A continuacion te dejo los 3 pasos que debes seguir para atraer la prosperidad a tu vida como nunca jamas imaginaste, sigue este tutorial al pie de la letra y veraz los cambios muy pronto</p>
  <section>
    
    <ol>
      <Link to="/preparacion">
      <li>Preparacion</li>
      </Link>

      <Link to="/encendido">
      <li>Encendido</li>
      </Link>

      <Link to="/agradecimiento">
      <li>Agradecimiento</li>
      </Link>
    </ol>
  </section>
  <img src={imagenHome} width={180} alt="vela blanca de la prosperidad" />
</main>

        <Footer/>
    </div>
  )
}

export default Home