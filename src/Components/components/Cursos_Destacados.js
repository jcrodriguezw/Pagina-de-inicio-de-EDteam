import React from 'react'
import {Link} from 'react-router-dom'
import Compo_Videos from './Compo_Videos'

class Cursos_Destacados extends React.Component {

    constructor(){
        super();

        this.state = {
            videos:[
                {
                    Imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hdOPSAj8JlMaZsp2NmpttRForQ7wQcZkCSI9Oa1FMubkOhcM',
                    Nombre_Curso: 'Android desde Cero',
                    Profesor: 'Jose Lujan',
                    Precio: '$40'
                },
                {
                    Imagen: 'https://ed.team/sites/default/files/styles/medium/public/courses/images/sass-poster-720_0.jpg?itok=338HDPXY',
                    Nombre_Curso: 'Saas desde Cero',
                    Profesor: 'Alvaro Felipe',
                    Precio: '$40'
                },
                {
                    Imagen: 'https://ed.team/sites/default/files/styles/medium/public/courses/images/poster-drupal-theming_1.png?itok=LoJWeH01',
                    Nombre_Curso: 'Saas desde Cero',
                    Profesor: 'Alvaro Felipe',
                    Precio: '$40'
                }
        ]
        }
    }
    render() {

        const indi_videos = this.state.videos.map((videos,i) => <Compo_Videos key={i} videos={videos}/>)
        return(
            <div className='cursos_destacados'> {/* ESTE ES EL CONTENEDOR DE LOS CURSOS DESTACADOS */}
                <div className='cursos_dest'>
                    <div className='cursos_title'>
                        <h2> Cursos Destacados </h2>
                    </div>
                    <div>
                        {indi_videos}
                    </div>
                    <div className='container_cursos_destacados'> {/* ESTE ES EL CONTENEDOR DEL BOTON EN EL CONTENEDOR DE LOS CURSOS DESTACADOS */}
                        <button className='btn_cursos_dest'> <Link to='/Cursos' className='sinline color'> Ver todos los cursos </Link> </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cursos_Destacados;