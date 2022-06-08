import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import TextWhisBG from './components/TextWhisBG';
import Title from './components/Title';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Satisfy&family=Tajawal:wght@200&display=swap');
    margin: 0;
    padding: 0;
    border: 0;
    
    font-family: 'Tajawal', sans-serif;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: calc(10px + 4vmin);    

    background-color: #282c34;
    color: white;
  }
`
const Handler = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Handler> 
      
      <Title />
      <TextWhisBG lable={'ABOUT ME'} text={'Front-end developer who cares deeply about user experience. Serious passion for UI design and new technologies.'}  />
      <TextWhisBG lable={'MY SKILLS'} text={'JavaScript (TypeScript), React (Electron, ReactNative), Redux, Babel, Webpack, WebGL, HTML5, CSS(SCSS, Styled components), Git, Next.js. '} />
    
    </Handler>

  </React.Fragment>
)

export default App;
