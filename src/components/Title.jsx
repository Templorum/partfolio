import React, {Component} from 'react';
import styled from 'styled-components'

const Handler = styled.div `
    height: 100vh;
    color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AutorName = styled.h1 `    
    font-family: 'Kaushan Script', cursive;
    position: relative;        
    text-align: center;
    margin: 0;
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
    width: calc(10px + 2vmin*9); /*Это нужно чтоб background-clip корректно вырезал букву*/
`

const RestLetters = styled.span `
    margin-left: calc(10px + 2vmin*-3.5); /*Это нужно чтоб убрать зазор между буквами предыдущим фиксом*/
`

const Description = styled.p `
    margin-top: -5%;
    text-align: center;
`

class Title extends Component {
    render() {
        return (
            <Handler>
                    <AutorName>
                        <FirstLetter>V</FirstLetter>
                        <RestLetters>adim Pakhomov</RestLetters>
                    </AutorName>
                    <Description>Front-end Developer & UI/UX Designer</Description>
            </Handler>
        );
    }
}

export default Title;