import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className='header'> {/* ESTE ES LA IMAGEN DE LA BARRA DE NAVEGACION */}
        <div>
            <Link to='/' > 
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ti56HeF7wt7ys653-hzLMcGCExyAQL2acdWI2Tv8msUUwSdP-g' width='100px' alt='Inicio'/>
            </Link>
        </div>
    </header>
    )
}

export default Header;