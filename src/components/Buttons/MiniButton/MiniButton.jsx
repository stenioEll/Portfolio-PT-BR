import './MiniButton.css'
import React from "react";
import 'font-awesome/css/font-awesome.min.css'




export default props => { 
    let url = props.link
    return (
        <button className='Minibutton' onClick={() => { window.location.href = url}}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    )
}
    