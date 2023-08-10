import { useEffect, useState } from "react";
import { Formulario } from "./Formulario";

export const Listado = ( Props ) => {

  //const [listadoState, setListadoState] = useState([]);
  const { listadoState, setListadoState } = Props;

  const [editar, setEditar] = useState(-1);

  useEffect(() => {
    conseguirPeliculas();
  }, []);



  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis")) ;
    peliculas === null && (peliculas = []) ;
    setListadoState(peliculas );
    return peliculas;

  }

  const borrarPelicula = ( id ) => {

    let pelis_almacenadas = conseguirPeliculas();
    let nuevo_array_peliculas = pelis_almacenadas.filter( peli => {
      return peli.id!== id
    });

    setListadoState(nuevo_array_peliculas);    

    localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));

  }


  
  return (
    <>
          {/* <!--aqui van las peliculas--> */}

          {
            listadoState && listadoState.length>0 ? 
            
            listadoState.map( pelicula => {
              return(
                <article key={pelicula.id } className="peli-item">
                    <h3 className="title">{pelicula.titulo}</h3>
                    <p className="description">{pelicula.descripcion}</p>

                    <button 
                      className="edit"
                      onClick={ () => setEditar( pelicula.id) }
                    >Editar</button>
                    <button
                      className="delete"
                      onClick={() => {borrarPelicula(pelicula.id)}}
                    >Borrar</button>


                  { editar == pelicula.id && 
                  
                    (<Formulario pelicula={  pelicula }  
                                 conseguirPeliculas ={ conseguirPeliculas }
                                 setEditar={setEditar}
                                 setListadoState={setListadoState}
                                 
                    />) }
                </article>


              )
            }) :
            <h2>No hay peliculas para mostrar</h2>
          }
    </>
  )
}
