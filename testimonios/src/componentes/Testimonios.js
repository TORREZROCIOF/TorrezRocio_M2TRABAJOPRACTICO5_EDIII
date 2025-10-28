import React from "react";
import "../hojas-de-estilo/Testimonios.css";
/* Definimos nuestro componente con la función */
function Testimonio(props) {
  return (
    /* Contenedor principal */
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        /* Todo lo que está entre llaves se considera JavaScript.
           Para insertar una imagen podemos usar require o import */
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

/* Exportamos el componente para poder usarlo en App.js u otro archivo */
export default Testimonio;