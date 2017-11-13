import React from 'react'

const Seccion_Informacion = () => {
    return(
        <div className='seccion_informacion'> {/* EN ESTE CONTAINER SE COLOCA LA SEGUNDA SECCION */}
            <h2> Por que estudiar en EDteam </h2>
            <div className='contenido'>
                <div className='contenido_indiv'>
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3> Clases en Vivo </h3>
                        <p> 
                            Vive la experiencia de un aula desde tu casa, centro de estudios u oficina 
                            pues hay interacción constante con el profesor y tus compañeros 
                        </p>
                    </div>
                </div>

                <div className='contenido_indiv' >
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3> Profesores </h3>
                        <p> 
                            Tenemos amplia experiencia en la docencia con lo cual no te llevarás 
                            esa amarga sorpresa de que el profesor domina el tema pero no sabe explicarlo. 
                        </p>
                    </div>
                </div>

                <div className='contenido_indiv'>
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3>Preguntas y respuestas </h3>
                        <p>
                            Dentro de cada clase encontrarás una sección de preguntas y respuestas donde 
                            vamos más allá de la clase junto con los compañeros y el profesor. 
                        </p>
                    </div>
                </div>

                <div className='contenido_indiv'>
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3>Proyecto de fin de curso</h3>
                        <p>
                            Somos la única propuesta en español con un enfoque orientado a proyectos. 
                            Comenzamos desde cero y culminamos con un proyecto del mundo real en el que 
                            aplicarás lo aprendido.
                        </p>
                    </div>
                </div>

                <div className='contenido_indiv'>
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3>Sin pagos mensuales</h3>

                        <p>
                            Olvídate de las suscripciones. Paga solo el curso que necesites y 
                            estúdialo a tu propio ritmo.
                        </p>
                    </div>
                </div>

                <div className='contenido_indiv'>
                    <img src='https://www.borjagiron.com/wp-content/uploads/2017/08/trabajo-desde-casa.png'/>
                    <div className='cont_ind'>
                        <h3>Acceso de por vida</h3>
                        <p>
                            Tómate el tiempo que desees para aprender. Los cursos que compres son tuyos 
                            para siempre.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <p> Icons by Freepik (1) (2) </p>
            
        </div>
    )
}

export default Seccion_Informacion;