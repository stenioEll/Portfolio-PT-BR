import './SmallCard.css'
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"



export default props => {
    useEffect(() => {
        Aos.init({duration: 1800});
      }, [])

    return (
        <aside data-aos="fade-up" className="contCardSmall">
            <img src={props.imagem} alt="" />
            <aside className="textCardSmall">
                <h1>{props.title}</h1>
            </aside>
        </aside>
    )
}