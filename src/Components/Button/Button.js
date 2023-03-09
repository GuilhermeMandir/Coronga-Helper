import './Button.css'
import { useState } from 'react';

export const Button = (props) => {

    return(
        <button className='button'>
            {props.text} 
        </button>
    )
}