
export const Formulario = ( {pelicula, conseguirPeliculas, setEditar, setListadoState } ) => {

    const titulo_componente = "Editar Pelicula";
    const {titulo, descripcion,id } = pelicula ; 


    const guardarEdicion = ( e, id ) => {

        e.preventDefault();
      
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenada = conseguirPeliculas();
        const index = pelis_almacenada.findIndex( peli => peli.id=== id );

        //Crear objeto con ese id de ese indice, con titulo  y descripcion del formulario
        let peli_actualizada ={
            id,
            titulo: target.titulo.value, 
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese indicce
        pelis_almacenada[index] = peli_actualizada;

        console.log( peli_actualizada )
        //Guardar le nuevo array de objeto en el localstore
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenada));


        //Actualizar estados
        setListadoState(pelis_almacenada);
        setEditar(0);

    }

  return (
    <div className="edit_form">
        <h3 className="title"> {titulo_componente }</h3>
        <form  onSubmit={ (e) =>  guardarEdicion(e,id) }>
            <input
              type="text"
              name="titulo"
              className="titulo_editado"
              defaultValue={titulo}
              id="" />

           <textarea
              name="descripcion"
              defaultValue={descripcion}
              className="descripcion_editada"></textarea>

            <input type="submit" value="Actualizar" className="editar" />

        </form>
    </div>
  )
}
