import React from 'react'

const Compo_Videos = props => {
    return(
        <div className='videos'> {/* ESTE ES EL DIV DE LOS VIDEOS DE LOS CURSOS DESTACADOS  ( ESTE ES EL DIV QUE VA A SALIR CUANDO SE MAPEA EL OBJETO)*/}
        
            <div className='videos_img'>{/* ESTE ES EL CONTENEDOR DEL VIDEO */}
                <img src={props.videos.Imagen} width='300px'/>
            </div> 

            
            <div> {/* ESTE ES EL CONTENEDOR DE LA DESCRIPCION DEL VIDEO */}

                <div className='nombre_curso'>
                    {props.videos.Nombre_Curso}{/* NOMBRE Y URL DE LA PAGINA DEL CURSO */}
                </div>

                <div>
                    {props.videos.Profesor} {props.videos.Precio} {/* NOMBRE DEL PROFESOR Y PRECIO DEL CURSO*/}
                </div>
            </div>

        </div>
    )
}

export default Compo_Videos;