import React from 'react'
import {Link} from 'react-router-dom'

const Info_Banner_1 = () => {
    return(
        <div className='escritobanner1'>  {/* ESTE ES EL CONTENEDOR DEL ESCRITO DEL BANNER */}
            <div className='escrito'>
                <div className='escritobaaner1_info color'>
                    <h1> Aprende desde Cero </h1>
                    <p> Aprende programación, diseño y emprendimiento en el primer sitio en español de educación orientada a proyectos.</p>
                </div>
                <div className='escritobaaner1_input'>
                    <input placeholder='Encuentra tu proxima carrera'/>
                    <button className='btn_banner_1'><Link to='/Cursos' className='sinline color'> Ver todos los cursos </Link></button>
                </div>
            </div>
        </div>
    )
}

export default Info_Banner_1;