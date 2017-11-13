import React from 'react'

import Img_Banner_2 from './Img_Banner_2'
import Info_Banner_2 from './Info_Banner_2'
import Btn_Banner_2 from './Btn_Banner_2'

const Banner_2 = () => {
    return(
        <div className='banner_2'>{/* EN ESTE CONTAINER VA EL BANNER 2 */}
            <div className='img_banner_2'>
                <Img_Banner_2 />
            </div>
            <div className='infor_banner_2'> {/* EN ESTE CONTAINER VA EL ESCRITO Y EL BOTON */}
               <Info_Banner_2 />
               <Btn_Banner_2 />
            </div>
            <hr/>
        </div>
    )
}

export default Banner_2;