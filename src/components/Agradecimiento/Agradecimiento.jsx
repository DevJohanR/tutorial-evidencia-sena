import React from 'react'
import styles from "./Agradecimiento.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Descripcion from '../Descripcion/Descripcion'
import agradecimientoImagen from "../../assets/agradecimientoImagen.jpeg"
const Agradecimiento = () => {
  return (
    <div>
        <Header/>
        <Descripcion
         imagenSrc={agradecimientoImagen}
         descripcion={"Después de haber realizado el encendido y la visualización, toma un momento para sentir la energía que has creado. Reconoce la presencia de esa energía y cómo llena el espacio a tu alrededor. Con la vela aún encendida, expresa tu gratitud en voz alta. Puedes decir algo como: “Gracias por la abundancia que está llegando a mi vida y por las bendiciones que ya están en camino. Para cerrar el ritual, apaga la vela de forma respetuosa, preferiblemente sin soplarla para no dispersar la energía. Puedes usar un apagavelas o simplemente ahogar la llama sumergiendo la mecha en la cera derretida"}

         />
         <Footer/>
    </div>
  )
}

export default Agradecimiento