import React from 'react'
import styles from "./Preparacion.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Descripcion from '../Descripcion/Descripcion'
import preparacionImagen from "../../assets/preparacionImagen.jpeg"


const Preparacion = () => {
  return (
    <div>
         <Header/>
         <Descripcion
         imagenSrc={preparacionImagen}
         descripcion={"Comienza limpiando físicamente la vela con agua bendita para purificarla de cualquier energía previa. Esto también puede hacerse sumergiendo la vela en agua bendita durante un tiempo prudencial. Una vez limpia, consagra la vela con aceite esencial de romero o limón, ambos conocidos por sus propiedades limpiadoras y protectoras. Ungir la vela con estos aceites potenciará su poder y la preparará para el ritual. Elige un lugar tranquilo y sereno donde no serás interrumpido. Puede ser un altar o cualquier espacio que consideres sagrado. Asegúrate de que esté limpio y ordenado para permitir un flujo libre de energía positiva."}

         />
         <Footer/>
    </div>
  )
}

export default Preparacion