import './Cards.css'
import React from "react";

export default props =>
   <React.Fragment>
        <aside className="contCard">
            <img src={props.imagem} alt="" />
            <aside className="textCard">
                <h1>{props.title}</h1>
                <h1>{props.subtitle}</h1>
            </aside>
        </aside>
   </React.Fragment> 