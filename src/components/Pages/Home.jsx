import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Typical from 'react-typical';



import './Home.css'
import img from '../../assets/imgs/dev.png'
import img2 from '../../assets/imgs/dev2.png'
import img3 from '../../assets/imgs/dev3.png'
import Button from '../Buttons/Button';




export const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <main className="conteudo" id="home">
      <aside className="container">
        <aside data-aos="fade" className="texto">
          <h1>Olá, eu sou <br /> <span>Stênio Ellison</span> <br /> <span>
            <Typical
            loop={4}
            wrapper="r"
            steps={[
              'Desenvolvedor Front-end',
              1000,
              'Designer UX/UI',
              1000
            ]}
            />
            </span> </h1>
            <aside className="botaos">
              <Button link="https://github.com/stenioEll" icon="fa-brands fa-github fa-lg" title= "Github"></Button>
              <Button link="https://www.linkedin.com/in/st%C3%AAnio-ellison-6b2058212/" icon="fa-brands fa-linkedin fa-lg" title= "Linkedin"></Button>
            </aside>
        </aside>
        <img data-aos="fade" src={img3} alt="dev" />
      </aside>
    </main> 
  )
};
