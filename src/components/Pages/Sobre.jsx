import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import './Sobre.css'
import img from '../../assets/imgs/resume.png'
import Curriculo from '../../assets/Currículo.pdf'
import Button from '../Buttons/Button';




export const Sobre = () => {
  
  useEffect(() => {
    Aos.init({duration: 1700});
  }, [])

  return (
    <main className="conteudoSobre" id="sobre">
      <aside data-aos="fade-right" className="containerSobre">
        <img src={img} alt="dev" />
        <aside data-aos="fade-left" className="textoSobre">
          <h1 className='Titulo'>Sobre</h1>
          <h1>Estou iniciando minha carreira de desenvolvedor, sou estudante do curso de <span className='green'>Engenharia da Computação na Universidade Federal da Paraíba.</span><br /> <br />
              Atualmente tenho conhecimento em <span className='green'> HTML5, CSS, JavaScript, C, C++, TypeScript, Git, GitHub, NodeJs, BootStrap, Figma, React Native</span> e <span className="green">ReactJS</span> , banco de dados como <span className="green">Firebase, Postman e também Sprint para integração do Backend.</span><br /> <br />
              Venho estudando <span className="green">ReactJS</span>  e <span className="green">ReactNative</span>  e colocando em prática os ensinamentos adquiridos fazendo alguns projetos, pessoais e de cursos, ademais possuo <span className="green">inglês avançado</span>.</h1> 
            <aside className="botaosSobre">
              <Button link={Curriculo} icon="fa-brands fa-file fa-lg" title= "Currículo"></Button>
            </aside>
        </aside>
      </aside>
    </main> 
  );
};
