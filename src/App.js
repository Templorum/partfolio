import React from 'react';
import styled from 'styled-components'
// import { Reset } from 'styled-reset'
import Title from './components/Title';

const Handler = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #282c34;
  font-size: calc(10px + 4vmin);
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const App = () => (
  <React.Fragment>
  {/* <Reset /> */}

    <Handler> 
      <Title />
    </Handler>

  </React.Fragment>
)

export default App;
