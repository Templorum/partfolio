import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components'

const MoveUp = keyframes`
    0% {
   top: 100%;
  }
  100% {
    top: 0;
  }
`

const Handler = styled.section `
    height: 100vh;
    color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    line-height: 1;
`

const Wrapper = styled.div `
    overflow: hidden;    
    position: relative;
`

const AutorName = styled.h1 `    
    font-family: 'Kaushan Script', cursive;
    font-size: calc(10px + 9vmin) ;
    text-align:center;
    margin:0;
    
    position: relative;

    animation-name: ${MoveUp};
    animation-delay: 1s;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.10, 0.30, 0.50, 1.15);
    
    margin-right: calc(10px + 2vmin*3.5) ; /*Выравнивание текста которое нужо будет чтоб работал последующий фикс background-clipа*/
`

const FirstLetter = styled.span `
    display: inline-block;
    left: 0; bottom: 0;
    background: rgb(131,58,180);
    background: linear-gradient(40deg, rgba(131,58,180,1) 27%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 73%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 200%;
    width: calc(10px + 2vmin*11); /* Это нужно чтоб background-clip корректно вырезал букву */
`

const RestLetters = styled.span `
    margin-left: calc(10px + 2vmin*-4.5); /*Это нужно чтоб убрать зазор между буквами предыдущим фиксом*/
`

const Description = styled.p `
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: calc(10px + 2vmin) ;
    position: relative;

    animation-name: ${MoveUp};
    animation-delay: 2s;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.10, 0.30, 0.50, 1.15);
 
`
class Title extends Component {
    render() {
        return (
            <Handler>
                    <Wrapper>
                        <AutorName>
                            <FirstLetter>V</FirstLetter>
                            <RestLetters>adim Pakhomov</RestLetters>
                        </AutorName>
                    </Wrapper>
                    <Wrapper>
                        <Description>Front-end Developer & UI/UX Designer</Description>
                    </Wrapper>
                        
            </Handler>
        );
    }
}

export default Title;