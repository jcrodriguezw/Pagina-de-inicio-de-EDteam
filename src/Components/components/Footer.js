import React from 'react'

const Footer = () => {
    return(
        <footer>
            <div className='footer_1'>
                <div className='footer_1_list'>
                    <div>
                        <h2> EDteam </h2>
                    </div>
                    <ul>
                        <li><a> Lima - Peru </a></li>
                        <li><a> Bogota - Colombia</a></li>
                        <li><a> contacto@ed.team</a></li>
                    </ul>
                    <div className='redes'>
                        <span> <i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i> </span>
                        <span> <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i> </span>
                        <span> <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i> </span>
                        <span> <i class="fa fa-instagram fa-2x" aria-hidden="true"></i> </span>
                        <span> <i class="fa fa-pinterest-square fa-2x" aria-hidden="true"></i> </span>
                        <span> <i class="fa fa-github fa-2x" aria-hidden="true"></i> </span>
                    </div>
                </div>
                
            </div>

            <div>

            </div>

            <div className='footer_3'>
                <h2> Blog </h2>
                <ul>
                    <li><a> Conceptos Basicos de Bases de Datos</a></li>
                    <li><a> Contabilidad basica para emprendedores y freelancers</a></li>
                    <li><a> Documenta tu API</a></li>
                    <li><a> Como crear tu hero imagen perfecta con solo  CSS</a></li>
                    <li><a> Trabajar desde casa - Consejos</a></li>
                </ul>
                <div>
                    <button> Ir al blog </button>
                </div>
            </div>
            <hr/>
        </footer>
    )
}

export default Footer;