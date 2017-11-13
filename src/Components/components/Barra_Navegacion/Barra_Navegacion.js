import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Barra_Navegacion = () => {
    return(
        <div className='Barra_Navegacion'> {/* ESTE CONTENEDOR ES EL CONTENEDOR DE LA BARRA DE NAVEGACION*/}            
            
            <Header />
            <Nav />
        </div>
    )
}

export default Barra_Navegacion;