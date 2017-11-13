import React from 'react'
import {Link} from 'react-router-dom'

import Barra_Navegacion from './components/Barra_Navegacion/Barra_Navegacion'
import Banner_1 from './components/Banner_1/Banner_1'
import Cursos_Destacados from './components/Cursos_Destacados'
import Banner_2 from './components/Banner_2/Banner_2'
import Seccion_Informacion from './components/Seccion_Informacion'
import Seccion_Contacto from './components/Seccion_Contacto'
import Footer from './components/Footer'

class Home extends React.Component {
    render() {
        return(
            
            <div className='container'> {/*ESTE CONTENEDOR ES EL CONTENEDOR COMPLETO*/}
                
                <Barra_Navegacion />                
                <Banner_1 />
                <Cursos_Destacados />
                <Banner_2 />
                <Seccion_Informacion />
                <Seccion_Contacto />
                <Footer />

            </div>

        )
    }
}

export default Home;

