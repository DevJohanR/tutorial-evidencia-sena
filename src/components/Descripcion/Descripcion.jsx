import React from 'react'
import styles from "./Descripcion.module.css"

const Descripcion = ({imagenSrc, descripcion }) => {
  return (
    <div className={styles.descripcionContain}>
        <img src={imagenSrc}  alt="" />
        <p>{descripcion}</p>
    </div>
  )
}

export default Descripcion