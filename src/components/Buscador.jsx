import { useEffect, useState } from "react"

export const Buscador = ({listadoState, setListadoState }) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  useEffect(() => {
    buscarPeli()
  }, [busqueda])
  

  const buscarPeli = () => {


    //Filtar para buscar coincidencias
    let pelis_encontradas = listadoState.filter( peli => {
      return peli.titulo.toLowerCase().includes( busqueda.toLowerCase())
    })

   if( busqueda.length <= 1  || pelis_encontradas<= 0){
    pelis_encontradas= JSON.parse(localStorage.getItem('pelis'));
    setNoEncontrado(true);
   }else{
    setNoEncontrado(false);
   }

    //Actualizar estado del listado principal con lo que he logrado filtrar
    setListadoState(pelis_encontradas);

    
  }

  return (
    <div className="search">
        <h3 className="title">Buscador : {busqueda}</h3>
        {
          noEncontrado && busqueda.length!=0 && ( <span className="no-encontrado"> No se ha encontrado niguna conincidencia</span>) 
        }
       
        <form>
            <input
              autoComplete="off"
              name="busqueda"
              type="text"
              id="search_field"
              onChange={ (e) => setBusqueda(e.target.value ) }
              />
          <button
              id="search">Buscar</button>
        </form>
    </div>
  )
}
