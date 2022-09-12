import styled from "styled-components";

export const Item =  styled.div`
    background-color: #20272F;
    /*width: 26%;*/
    width: 300px;
    height: 400px;
    border-radius: 14px;
    /*padding: 2%;*/
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 6px 4px 4px -2px #15181B;
    color: #FFFFFF;
    box-sizing: border-box;

    &:hover {
        background-color: #40A89B;
        border: solid 1px #19564F;
        box-shadow: 
        2px 0 10px 0 rgba(140, 192, 189, 0.12),
        2px 0 10px 0 rgba(168, 188, 189, 0.09);
        transform: scale(1.0);
        transition: all 0.5s;
      }
    `;

export const Imagem =  styled.img`
    width: 100%;
    height: 45%;
    `;

export const ProjectContent = styled.div`
    background-color: #20272F;
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 55%;

`

export const TitleProject = styled.h1`
    font-weight: 300;
    font-style: 'Oxygen';
    text-align: left;
    margin-left: 20px;
    font-size: 1.3rem;
    margin-top: 15px;
    color: #ffffff;

`
export const SecondTitle = styled.span`
    color: #33D9A9;
    font-weight: 400;
`


export const Subtitle = styled.h1`
    font-size: 0.8rem;
    margin: 0 20px;
    margin-top: 10px;
    color: #C7C7C7;
    text-align: left;
    font-weight: 350;   
`

export const ButtonsArea = styled.div`
    margin-top: 12px;
    margin: 0 20px;
    display: flex;
    gap: 15px;
    direction: ltr;


`

export const ToolsIcons = styled.div`
    height: 50%;
    display: flex;
    direction: ltr;
    justify-content: flex-end;
    align-items: end;
    padding: 10px 25px;
    

`
export const Icons = styled.img`
    width: 30px;
    height:30px;
    margin-left: 5px;
    opacity: 0.8;
    box-shadow: 4px 4px 4px -1px #14181d;
    

`
