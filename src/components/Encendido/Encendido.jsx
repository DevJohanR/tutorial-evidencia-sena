import React from 'react'
import styles from "./Encendido.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Descripcion from '../Descripcion/Descripcion'
import encendidoImagen from "../../assets/encendidoImagen.jpeg"
const Encendido = () => {
  return (
    <div>
        <Header/>
        <Descripcion
         imagenSrc={encendidoImagen}
         descripcion={"Antes de encender la vela, tómate un momento para centrarte. Respira profundamente y visualiza tus metas de prosperidad y abundancia. Imagina cómo se manifiestan en tu vida. Enciende la vela con una cerilla o encendedor. Mientras lo haces, declara tu intención en voz alta o en silencio. Puede ser algo como: “Que esta llama ilumine mi camino hacia la prosperidad y la abundancia. Observa la llama de la vela. ¿Es alta y brillante? ¿Está tranquila y constante? La forma y el comportamiento de la llama pueden revelar mensajes y signos importantes. Mantén tu mente abierta y receptiva."}

         />
         <Footer/>
    </div>
  )
}

export default Encendido