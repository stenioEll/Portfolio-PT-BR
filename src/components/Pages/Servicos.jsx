import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import Cards from "../Cards/Cards"
import front from "../../assets/imgs/front.png"
import web from "../../assets/imgs/web.png"
import ux from "../../assets/imgs/ux.png"
import './Servicos.css'

export const Servicos = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])

  
  return (
    <main className="cardsArea" id="servicos">
      <aside className="contentCards">
        <aside data-aos="fade-right" className="textos" >
            <h1>Meus <span  className='verde'>serviços</span> <br /> <span className="txG">O que eu faço</span> </h1>
        </aside>
        <aside data-aos="fade-up" className="cards">
              <Cards title= "Front-end" subtitle="Implementar código para desenvolver sites ou aplicações, para tornar o design feito funcional" imagem = {front}></Cards>
              <Cards title= "Web Design" subtitle="Desenvolver interfaces para Desktop ou Smartphone" imagem = {web}></Cards>
              <Cards title= "UX/UI Design" subtitle="Estudo de casos e criar interfaces pensando na praticidade do usuário" imagem = {ux}></Cards>
          </aside>
      </aside>
    </main>
  );
};
