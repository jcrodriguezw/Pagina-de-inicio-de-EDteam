import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div className='navegacion'> {/* ESTE CONTENEDOR ES EL DE LA BARRA DE NAVEGACION */}
            <nav>
                <ul>
                    <li> <Link to='/Cursos' className='sinline cambio'> Cursos </Link> </li>
                    <li> <Link to='Promociones' className='sinline cambio'> Promociones</Link> </li>
                    <li> <Link to='/Ayuda' className='sinline cambio'> Ayuda</Link> </li>
                    <li> <Link to='/Otros1' className='sinline cambio'> Otros1 </Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;