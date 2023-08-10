import { useState } from "react";
import { guardarEnStore } from "../helpers/guardarEnStore";

export const Crear = ( Props ) => {

  const tituloComponent = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion:''
  });

  const { titulo, descripcion } = peliState;

  const { setListadoState } =Props;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    // Guardar estado
    setPeliState(peli);
    
    //Actualizar el estado del listado principal
    setListadoState( elementos => {
      return [...elementos, peli ]
    });
   

    // Guardar en el localStorage
    guardarEnStore('pelis',peli);

   
  }




  return (
    <div className="add">
                <h3 className="title">{tituloComponent}</h3>
          
                {
                  titulo && descripcion && (<strong>Has creado la película: { titulo }</strong>)

                }


                <form onSubmit={conseguirDatosForm}>
                   <input
                      type="text"
                      id="titulo"
                      name="titulo"
                      placeholder="Titulo" />
                   <textarea
                      id="descripcion"
                      name="descripcion"
                      placeholder="Descripción">

                    </textarea>
                    <input
                      type="submit"
                      id="save"
                      value="Guardar" />
                </form>
    </div>
  )
}
