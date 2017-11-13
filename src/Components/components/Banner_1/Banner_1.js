import React from 'react'
import Info_Banner_1 from './Info_Banner_1'
import Img_Banner_1 from './Img_Banner_1'

const Banner_1 = () => {
    return(
        <div className='banner1'> {/* ESTE ES EL CONTENEDOR DEL BANNER */}
        
            <Info_Banner_1 />
            
            <Img_Banner_1 />

            <hr/>
        </div>      
    )
}

export default Banner_1;