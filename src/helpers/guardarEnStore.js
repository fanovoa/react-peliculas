

export const guardarEnStore = ( clave, elemento ) => {

    //Conseguir los elementos  que ya tenemos en el localstore
    let elementos = JSON.parse(localStorage.getItem('pelis'));

    //Comprobar si es un array
    if( Array.isArray(elementos)){
      //Añador un elemento nuevo
      return localStorage.setItem(clave, JSON.stringify([...elementos, elemento]));
    }

    return localStorage.setItem(clave, JSON.stringify([elemento]))

  }


