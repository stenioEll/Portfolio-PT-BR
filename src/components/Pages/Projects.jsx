import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import './Projects.css'
import Carousel from '../Carousel/Carousel';

export const Projects = () => {
  useEffect(() => {
    Aos.init({duration: 1700});
  }, [])

  return (
        <main className="ContProjects" id="projetos">
        <aside data-aos="fade" className="ConteudoProjects">
            <aside className="textosProjects">
                <h1>Projetos <span  className='skillgreen'>Recentes</span> </h1>
            </aside>
            <aside data-aos="fade" className="Carrousel">
              <Carousel></Carousel>
            </aside>
        </aside>
    </main>
  )
};
