import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import logo from './logo.svg'

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  text-align: center;
`

const AppLogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: '${AppLogoSpin}' infinite 20s linear;
  }
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`
