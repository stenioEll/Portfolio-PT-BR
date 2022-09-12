import './Button.css'
import React from "react";
import 'font-awesome/css/font-awesome.min.css'




export default props => { 
    let url = props.link
    return (
        <button className='button' onClick={() => { window.location.href = url}}>
            <i className={`fa fa-${props.icon}`}></i>
            <span className="text">
                <p>{props.title}</p> 
            </span>
        </button>
    )
}
    