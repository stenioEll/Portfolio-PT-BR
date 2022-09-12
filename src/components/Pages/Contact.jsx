import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import './Contact.css'

import Email from '../../assets/imgs/email.png'
import Logo from '../../assets/imgs/logo.png'

import MegaButton from '../Buttons/MegaButton/MegaButton'
import MiniButton from "../Buttons/MiniButton/MiniButton";


export const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])

  return (
    <main className="ContContato" id="contatos">
      <aside className="conteudoContato">
        <aside data-aos="fade-up" className="textoContact">
          <h1>Gostou do meu trabalho?<br /> Para mais informações, <br /> <span>Entre em contato</span></h1>
          <MegaButton link="mailto:stenio1998@gmail.com" icon="fa-brands fa-envelope fa-lg" title= "Envie uma mensagem"></MegaButton>
        </aside>
        <img data-aos="fade-left" className="emailImg" src={Email} alt="Email" />
      </aside>
      <footer className="fooContato">
        <aside className="fooConteudo">
          <img src={Logo} alt="Logo" />
          <aside className="textoFooter">
            <h1 className="textfoo">João Pessoa-Paraíba, <span>Brasil</span></h1>
          </aside>
          <aside className="miniBotaosarea">
            <aside className="botoesFoo">
              <MiniButton link="https://github.com/stenioEll" icon="fa-brands fa-github fa-lg"></MiniButton>
              <MiniButton link="https://api.whatsapp.com/send?phone=5584999182370&text=Olá%20tudo%20bem." icon="fa-brands fa-whatsapp fa-lg"></MiniButton>
              <MiniButton link="mailto:stenio1998@gmail.com" icon="fa-brands fa-envelope fa-lg"></MiniButton>
            </aside>
              <h1>© 2022 Stênio Ellison. all rights reserved</h1>
          </aside>

        </aside>
        
      </footer>
    </main>
  );
};
