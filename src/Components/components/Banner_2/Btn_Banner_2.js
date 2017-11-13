import React from 'react'
import {Link} from 'react-router-dom'

const Btn_Banner_2 = () => {
    return(
        <div> {/* EN ESTE CONTAINER COLOCAMOS EL BOTON */}
            <button className='btn_banner_2'> <Link to='/Cursos' className='sinline color'>Unete a mas de dos mil estudiantes satisfechos en 2017</Link> </button>
        </div>
    )
}

export default Btn_Banner_2;