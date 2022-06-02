import React from 'react'
import styled from 'styled-components'

const BGTextColor = `#2e333b`;

const ScreenBlock = styled.div`
    display: flex;
    height: 40vh;
    width: 100%;
    position: relative;
    overflow: hidden;
`

const BackgroundText = styled.h2`
    position: absolute;
    margin-top: calc(10px + 2vmin*-3);
    font-size: 300%;
    color: ${BGTextColor};
`

const MainText = styled.p`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin-left: 45%;
    margin-right: 15%;
    height: 100px;
    font-size: 50%;
`

export default function TextWhisBG(props) {
    return (
        <ScreenBlock>
            <BackgroundText>{props.lable}</BackgroundText>
            <MainText>{props.text}</MainText>
        </ScreenBlock>
    )
}