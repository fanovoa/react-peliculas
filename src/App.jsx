import { useState } from 'react';
import {Listado , Buscador, Crear, Header, Navegacion, Footer } from './components/index.js'


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        {/* <!--Cabecera--> */}
        <Header />

        {/* <!--Barra de navegación--> */}
        <Navegacion />

        {/* <!--Contenido principal--> */}
        <section id="content" className="content">

          {/* listado de peliculas */}
          <Listado listadoState = { listadoState } setListadoState={setListadoState }/>

        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
            <Buscador listadoState = { listadoState } setListadoState={setListadoState } />
            <Crear   setListadoState = { setListadoState}/>
            
        </aside>
        
        {/* <!--Pie de página--> */}
        <Footer />

    </div>

    </>
  )
}

export default App
