import React, { useState } from 'react'
import './Color.css'

function Color() {
const [initial,final] = useState('red')
const changeColor = () =>{
    if(initial=='red'){
        return final('blue')
    }
    else if(initial=='blue'){
        return final('green')
    }else if(initial=='green'){
        return final('red')
    }
}

  return (
<>
<div className='div' style={{backgroundColor:initial} } ></div>
<button onClick={ changeColor} >dsgckbsjd</button>
</>
    )
}

export default Color