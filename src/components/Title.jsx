import React, {Component} from 'react';
import styled from 'styled-components'

const Handler = styled.div `
    height: 100vh;
    color: rgb(240, 240, 240);    
    text-align: center; 
` 

const AutorName = styled.h1 `
    margin-top: 30%;
    font-family: 'Satisfy', cursive;
    position: relative;
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
    width: calc(10px + 2vmin*9);
`

const RestLetters = styled.span `
    margin-left: calc(10px + 2vmin*-3.5);
`

const Label = styled.h3 `
    margin-top: -7%;
`

class Title extends Component {
    render() {
        return (
            <Handler>
                <AutorName>
                    <FirstLetter>V</FirstLetter>
                    <RestLetters>adim Pakhomov</RestLetters>
                </AutorName>
                <Label>Front-end Developer & UI/UX Designer</Label>
            </Handler>
        );
    }
}

export default Title;