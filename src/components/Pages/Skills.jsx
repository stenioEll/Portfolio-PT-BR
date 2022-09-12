import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import './Skills.css'
import SmallCard from '../SmallCard/SmallCard';
import JavaScript from '../../assets/imgs/logos/JavaScript.png'
import CSS from '../../assets/imgs/logos/CSS.png'
import HTML from '../../assets/imgs/logos/HTML.png'
import Typescript from '../../assets/imgs/logos/Typescript.png'
import Reactjs from '../../assets/imgs/logos/Reactjs.png'
import Bootstrap from '../../assets/imgs/logos/Bootstrap.png'
import Nodejs from '../../assets/imgs/logos/NodeJs.png'
import Git from '../../assets/imgs/logos/Git.png'
import Mysql from '../../assets/imgs/logos/Mysql.png'
import Docker from '../../assets/imgs/logos/Docker.png'
import Figma from  '../../assets/imgs/logos/Figma.png'


export const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])
  
  return (
    <main className="ContSkill" id="skills">
        <aside className="ConteudoSkill">
            <aside data-aos="fade-right" className="textosSkill">
                <h1>Minhas <span  className='skillgreen'>Skills</span> </h1>
            </aside>
            <aside className="conteudoSmallCards">
                <SmallCard imagem={HTML} title="HTML"></SmallCard>
                <SmallCard imagem={CSS} title="CSS"></SmallCard>
                <SmallCard imagem={JavaScript} title="JavaScript"></SmallCard>
                <SmallCard imagem={Typescript} title="Typescript"></SmallCard>
                <SmallCard imagem={Reactjs} title="React JS"></SmallCard>
                <SmallCard imagem={Bootstrap} title="Bootstrap"></SmallCard>
                <SmallCard imagem={Nodejs} title="Node.js"></SmallCard>
                <SmallCard imagem={Git} title="Git"></SmallCard>
                <SmallCard imagem={Mysql} title="MySQL"></SmallCard>
                <SmallCard imagem={Reactjs} title="React Native"></SmallCard>
                <SmallCard imagem={Docker} title="Docker"></SmallCard>
                <SmallCard imagem={Figma} title="Figma"></SmallCard>
                
            </aside>
        </aside>
    </main>
  )
};
