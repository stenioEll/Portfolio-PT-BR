/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css'
import React from 'react'


import Item1 from '../../assets/imgs/projetos/item1.png'
import Item2 from '../../assets/imgs/projetos/item2.png'
import Item3 from '../../assets/imgs/projetos/item3.png'
import Item4 from '../../assets/imgs/projetos/item4.png'

import HTML from '../../assets/imgs/logos/HTML.png'
import CSS from '../../assets/imgs/logos/CSS.png'
import JS from '../../assets/imgs/logos/JavaScript.png'
import ReactJS from '../../assets/imgs/logos/Reactjs.png'
import Button from '../Buttons/Button';
import {contCarousel, Item, Imagem, ProjectContent, TitleProject, SecondTitle,  Subtitle, ButtonsArea, ToolsIcons, Icons} from './Item';


export default props => {
    const breakPoints = [
        { width: 850, itemsToShow: 3, pagination: false },
        { width: 1, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3, pagination: false },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 5, pagination: false },
        { width: 2000, itemsToShow: 4, pagination: false }
    ] 

    return (
        <div className="contCarousel">   
            <div className="carousel-wrapper">
                <Carousel isLTR breakPoints={breakPoints}>
                    <Item>
                        <Imagem src={Item1}></Imagem>
                        <ProjectContent>
                            <TitleProject>Cardápio <SecondTitle>digital</SecondTitle></TitleProject>
                            <Subtitle>Projeto no qual desenvolvi um cardápio digital que pode ser encontrado através da leitura de um QR Code</Subtitle>
                            <ButtonsArea>
                                <Button link="https://rocketcafe98.netlify.app/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                                <Button link="https://github.com/stenioEll/Maratona-Explorer-3" icon="fa-brands fa-github fa-lg" title= "Github"></Button>
                            </ButtonsArea>
                            <ToolsIcons>
                                <Icons src={HTML}></Icons>
                                <Icons src={CSS}></Icons>
                            </ToolsIcons>
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item2}></Imagem>
                        <ProjectContent>
                            <TitleProject>Projeto <SecondTitle>Calculadora</SecondTitle></TitleProject>
                            <Subtitle>Projeto no qual desenvolvi Calculadora similar ao Mac-OS</Subtitle>
                            <ButtonsArea>
                                <Button link="https://calculadorareactjs98.netlify.app/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                                <Button link="https://github.com/stenioEll/Calculadora-React" icon="fa-brands fa-github fa-lg" title= "Github"></Button>
                            </ButtonsArea>
                            <ToolsIcons>
                                <Icons src={ReactJS}></Icons>
                            </ToolsIcons>
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item3}></Imagem>
                        <ProjectContent>
                            <TitleProject>Jogo <SecondTitle>Flappy-Bird</SecondTitle></TitleProject>
                            <Subtitle>Implementação do famoso jogo flappy bird</Subtitle>
                            <ButtonsArea>
                                <Button link="https://flappybird98.netlify.app/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                                <Button link="https://github.com/stenioEll/Jogo-Flappy-Bird" icon="fa-brands fa-github fa-lg" title= "Github"></Button>
                            </ButtonsArea>
                            <ToolsIcons>
                                <Icons src={HTML}></Icons>
                                <Icons src={CSS}></Icons>
                                <Icons src={JS}></Icons>
                            </ToolsIcons>
                        </ProjectContent>
                    </Item>
                    <Item>
                        <Imagem src={Item4}></Imagem>
                        <ProjectContent>
                            <TitleProject>Relatório de <SecondTitle>Vendas</SecondTitle></TitleProject>
                            <Subtitle>Site responsivo capaz de filtrar periodo de vendas com total apurado e enviar um sms para o vendedor do banco de dados com o montante das suas vendas</Subtitle>
                            <ButtonsArea>
                                <Button link="https://dsdata-stenioellison.netlify.app/" icon="fa-brands fa-link fa-lg" title= "Acessar"></Button>
                                <Button link="https://github.com/stenioEll/dsmeta" icon="fa-brands fa-github fa-lg" title= "Github"></Button>
                            </ButtonsArea>
                            <ToolsIcons>
                                <Icons src={ReactJS}></Icons>
                                <Icons src={CSS}></Icons>
                            </ToolsIcons>
                        </ProjectContent>
                    </Item>
                                        
                </Carousel>
            </div>

        </div>
    )
}